import { Page } from '@playwright/test';
import { PaymentUI } from '../ui/PaymentUI';

export class FillPaymentInfo {
    static async selectCreditCard(page: Page){
        await PaymentUI.creditCardRbtn(page).check();
        await PaymentUI.paymentContinueBtn(page).click();
    }

    static async withCreditCard(page: Page, cardData: any) {
       

        const [month, year] = cardData.ExpirationDate.split('/');
        const cleanMonth = Number(month).toString();

        await PaymentUI.creditCardDropdown(page).selectOption({ value: cardData.selectCredictCard });
        await PaymentUI.cardHolderName(page).fill(cardData.cardholderName);
        await PaymentUI.cardNumber(page).fill(cardData.cardNumber);
        await PaymentUI.expireMonthDropdown(page).selectOption({ value: cleanMonth });
        await PaymentUI.expireYearDropdown(page).selectOption({ value: year });
        await PaymentUI.cardCode(page).fill(cardData.cardCode);
        
        await PaymentUI.paymentMethodBtn(page).click();
    }
}
