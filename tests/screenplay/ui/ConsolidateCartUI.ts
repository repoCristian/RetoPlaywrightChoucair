import { Page, Locator } from '@playwright/test';

export class ConsolidateCartUI {
    static cartHeaderLink(page: Page): Locator {
        return page.locator('#topcartlink a');
    }

    static countryDropdown(page: Page): Locator {
        return page.getByRole('combobox', { name: 'Country:' });
    }

    static termsOfServiceCheckbox(page: Page): Locator {
        return page.locator('.terms-of-service input[type="checkbox"]');
    }

    static checkoutBtn(page: Page): Locator {
        return page.getByRole('button', { name: 'Checkout' });
    }
}
