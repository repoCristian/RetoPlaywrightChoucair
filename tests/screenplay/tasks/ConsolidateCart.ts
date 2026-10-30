import { Page } from '@playwright/test';
import { ConsolidateCartUI } from '../ui/ConsolidateCartUI';

export class ConsolidateCart {
    static async toCheckout(page: Page, countryValue: string) {
        await ConsolidateCartUI.cartHeaderLink(page).click();
        await ConsolidateCartUI.countryDropdown(page).selectOption({ value: countryValue });
        await ConsolidateCartUI.termsOfServiceCheckbox(page).check();
        await ConsolidateCartUI.checkoutBtn(page).click();
    }
}
