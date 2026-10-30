import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from './hooks';

import testData from '../utils/data/purchaseData.json';

import { Login } from '../screenplay/tasks/Login';
import { SelectProduct } from '../screenplay/tasks/SelectProduct';
import { ConsolidateCart } from '../screenplay/tasks/ConsolidateCart';

import { FillDeliveryInfo } from '../screenplay/tasks/FillDeliveryInfo';
import { FillPaymentInfo } from '../screenplay/tasks/FillPaymentInfo';

import { LoginQuestions } from '../screenplay/questions/LoginQuestions';
import { CartQuestions } from '../screenplay/questions/CartQuestions';
import { OrderQuestions } from '../screenplay/questions/OrderQuestions';

import { ConfirmUI } from '../screenplay/ui/ConfirmUI';

let initialCartCount: string;


When('me autentico con credenciales válidas', { timeout: 30000 }, async () => {
    await Login.withCredentials(page, testData.userData);
    await LoginQuestions.isUserLoggedIn(page);
});

When('doy clic en una Categoría y, en caso de existir, en su Subcategoría', async () => {
    initialCartCount = await SelectProduct.fromBooksCategory(page);
});

When('selecciono un producto y lo agrego al carrito', async () => {
    await CartQuestions.verifyCartIncrement(page, initialCartCount);
});

When('ingreso al carrito y doy clic en "Checkout"', async () => {
    await ConsolidateCart.toCheckout(page, '1');
});


When('ingreso los datos solicitados para la entrega y dejo los demás por defecto',{ timeout: 30000 }, async () => {
    await FillDeliveryInfo.enterBillingAddress(page, testData.billingAddressData);
});

When('selecciono "Credit Card" como método de pago', async () => {
     await FillPaymentInfo.selectCreditCard(page);
});

When('completo la información de pago con los siguientes datos:', async (table: any) => {
    const row = table.hashes()[0];
    const cardConfig = {
        selectCredictCard: row.creditCard,
        cardholderName: row.cardholderName,
        cardNumber: row.cardNumber,
        ExpirationDate: row.expirationDate,
        cardCode: row.cardCode
    };
    await FillPaymentInfo.withCreditCard(page, cardConfig);
});

When('confirmo la orden', async () => {
    await ConfirmUI.confirmOrderBtn(page).click();
});

Then('el sistema deberia mostrar el mensaje {string}', async (expectedMessage: string) => {
    await OrderQuestions.expectedSuccessfulMessage(page, expectedMessage);
});


