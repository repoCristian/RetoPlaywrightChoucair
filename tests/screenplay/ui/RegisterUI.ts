import { Locator, Page } from '@playwright/test';

export class RegisterUI {

    static registerLink = (page: Page): Locator => page.getByRole('link', { name: 'Register' });


    static heading = (page: Page): Locator => page.getByRole('heading', { name: 'Register' });
    static femaleRadio = (page: Page): Locator => page.getByRole('radio', { name: 'Female' });
    static maleRadio = (page: Page): Locator => page.getByRole('radio', { name: 'Male', exact: true });
    static firstNameInput = (page: Page): Locator => page.getByRole('textbox', { name: 'First name:' });
    static lastNameInput = (page: Page): Locator => page.getByRole('textbox', { name: 'Last name:' });
    static emailInput = (page: Page): Locator => page.getByRole('textbox', { name: 'Email:' });
    static passwordInput = (page: Page): Locator => page.getByRole('textbox', { name: 'Password:', exact: true });
    static confirmPasswordInput = (page: Page): Locator => page.getByRole('textbox', { name: 'Confirm password:' });
    static registerButton = (page: Page): Locator => page.getByRole('button', { name: 'Register' });

    static successMessage = (page: Page): Locator => page.locator('div.result');
}
