import { Page } from '@playwright/test';
import { ProductsUI } from '../ui/ProductsUI';

export class SelectProduct {
    static async fromBooksCategory(page: Page): Promise<string> {
        await ProductsUI.booksCategory(page).click();
        await ProductsUI.item(page).click();
        
        await ProductsUI.cartItems(page).waitFor({ state: 'attached' });
        const lastCount = await ProductsUI.cartItems(page).innerText();
        
        await ProductsUI.addToCart(page).click();
        return lastCount;
    }
}
