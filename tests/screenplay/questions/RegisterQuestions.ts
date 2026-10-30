import { Page, expect } from '@playwright/test';
import { RegisterUI } from '../ui/RegisterUI';

export class RegisterQuestions {
    static async expectedSuccessfulMessage(page: Page, expectedMessage: string): Promise<void> {
        await expect(RegisterUI.successMessage(page)).toBeVisible();
        await expect(RegisterUI.successMessage(page)).toHaveText(expectedMessage);
    }
}
