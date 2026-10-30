import { Page } from '@playwright/test';

export const CheckoutUI = {
    firstNameLabel: (page: Page) => page.locator('label[for="BillingNewAddress_FirstName"]'),
    addressSelectLabel: (page: Page) => page.locator('label[for="billing-address-select"]'),
    countries: (page: Page) => page.getByRole('combobox', { name: 'Country:' }),
    city: (page: Page) => page.getByRole('textbox', { name: 'City:' }),
    address: (page: Page) => page.getByRole('textbox', { name: 'Address 1:' }),
    zip: (page: Page) => page.getByRole('textbox', { name: 'Zip / postal code:' }),
    phone: (page: Page) => page.getByRole('textbox', { name: 'Phone number:' }),
    billingAddBtn: (page: Page) => page.locator('#billing-buttons-container input[value="Continue"]'),
    shippingAddBtn: (page: Page) => page.locator('#shipping-buttons-container input[value="Continue"]'),
    shippingMethodBtn: (page: Page) => page.locator('#shipping-method-buttons-container input[value="Continue"]')
};
