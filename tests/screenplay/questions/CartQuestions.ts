import { Page, expect } from '@playwright/test';
import { ProductsUI } from '../ui/ProductsUI';

export class CartQuestions {

    static async verifyCartIncrement(page: Page, initialCartText: string) {
 
        const previousCount = Number(initialCartText.replace(/\D/g, ''));
        const expectedNextText = `(${previousCount + 1})`;
        
        await expect(ProductsUI.cartItems(page)).toHaveText(expectedNextText);
    }
}
