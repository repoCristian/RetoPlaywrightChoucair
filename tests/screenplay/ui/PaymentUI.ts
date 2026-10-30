import { Page } from '@playwright/test';

export const PaymentUI = {
    creditCardRbtn: (page: Page) => page.getByRole('radio', { name: 'Credit Card Credit Card' }),
    paymentContinueBtn: (page: Page) => page.locator('#payment-method-buttons-container input[value="Continue"]'),
    creditCardDropdown: (page: Page) => page.locator('#CreditCardType'),
    cardHolderName: (page: Page) => page.getByRole('textbox', { name: 'Cardholder name' }),
    cardNumber: (page: Page) => page.getByRole('textbox', { name: 'Card number' }),
    expireMonthDropdown: (page: Page) => page.locator('#ExpireMonth'),
    expireYearDropdown: (page: Page) => page.locator('#ExpireYear'),
    cardCode: (page: Page) => page.getByRole('textbox', { name: 'Card code' }),
    paymentMethodBtn: (page: Page) => page.locator('#payment-info-buttons-container input[value="Continue"]')
};
