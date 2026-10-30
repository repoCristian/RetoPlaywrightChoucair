import { Page, expect } from '@playwright/test';
import { ConfirmUI } from '../ui/ConfirmUI';

export class OrderQuestions {
    static async expectedSuccessfulMessage(page: Page, message: string) {
        await expect(ConfirmUI.orderSuccessMessage(page)).toHaveText(message);
    }
}
