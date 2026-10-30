import { Page } from '@playwright/test';
import { LoginUI } from '../ui/LoginUI';

export class Login {
    static async withCredentials(page: Page, data: any) {
        await LoginUI.loginLink(page).click();
        await LoginUI.mailInput(page).fill(data.email);
        await LoginUI.passInput(page).fill(data.password);
        await LoginUI.loginButton(page).click();
    }
}
