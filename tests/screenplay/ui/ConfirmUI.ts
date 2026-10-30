import { Page } from '@playwright/test';

export const ConfirmUI = {
    confirmOrderBtn: (page: Page) => page.locator('#confirm-order-buttons-container input[value="Confirm"]'),
    orderSuccessMessage: (page: Page) => page.locator('div.title strong')
};
