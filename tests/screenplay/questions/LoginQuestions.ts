import { Page, expect } from '@playwright/test';
import { LoginUI } from '../ui/LoginUI';

export class LoginQuestions {

    static async isUserLoggedIn(page: Page) {
        await expect(LoginUI.successMessage(page)).toBeVisible();
    }
}
