import { Page } from '@playwright/test';
import { RegisterUI } from '../ui/RegisterUI';

export class Register {
    static async navigateToForm(page: Page, optionName: string): Promise<void> {
        await RegisterUI.registerLink(page).click();
        await RegisterUI.heading(page).waitFor({ state: 'visible' });
    }

    static async fillingForm(page: Page, userData: any): Promise<void> {
        if (userData.gender === 'Female') {
            await RegisterUI.femaleRadio(page).check();
        } else {
            await RegisterUI.maleRadio(page).check();
        }

        await RegisterUI.firstNameInput(page).fill(userData.firstName);
        await RegisterUI.lastNameInput(page).fill(userData.lastName);
        await RegisterUI.emailInput(page).fill(userData.email);
        await RegisterUI.passwordInput(page).fill(userData.password);
        await RegisterUI.confirmPasswordInput(page).fill(userData.confirmPassword);
        
        await RegisterUI.registerButton(page).click();
    }
}
