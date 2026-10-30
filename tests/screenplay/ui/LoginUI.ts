import { Page } from '@playwright/test';

export const LoginUI = {
    loginLink: (page: Page) => page.getByRole('link', { name: 'Log in' }),
    mailInput: (page: Page) => page.getByRole('textbox', { name: 'Email:', exact: true }),
    passInput: (page: Page) => page.getByRole('textbox', { name: 'Password:' }),
    loginButton: (page: Page) => page.getByRole('button', { name: 'Log in' }),
    successMessage: (page: Page) => page.getByRole('link', { name: /@yopmail\.com/ }).first()
};
