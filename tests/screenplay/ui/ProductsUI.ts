import { Page } from '@playwright/test';

export const ProductsUI = {
    booksCategory: (page: Page) => page.locator('div.listbox ul.list li a[href="/books"]'),
    item: (page: Page) => page.locator('.product-item .product-title a[href="/computing-and-internet"]'),
    addToCart: (page: Page) => page.locator('input.button-1.add-to-cart-button'),
    cartItems: (page: Page) => page.locator('a.ico-cart span.cart-qty')
};
