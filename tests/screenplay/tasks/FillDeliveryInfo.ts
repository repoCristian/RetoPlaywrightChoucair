import { Page } from '@playwright/test';
import { CheckoutUI } from '../ui/CheckoutUI';

export const FillDeliveryInfo = {
    async enterBillingAddress(page: Page, data: any) {
        await CheckoutUI.countries(page).waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});

        const isFormFieldsVisible = await CheckoutUI.countries(page).isVisible();

        if (isFormFieldsVisible) {
            console.log("-> Detectado: Formulario de nueva dirección abierto. Llenando datos...");
            await CheckoutUI.countries(page).selectOption({ value: '1' });
            await CheckoutUI.city(page).fill(data.city);
            await CheckoutUI.address(page).fill(data.address);
            await CheckoutUI.zip(page).fill(data.zip);
            await CheckoutUI.phone(page).fill(data.phone);

            await this.selectContinueButtons(page);
        } else {
            console.log("-> Detectado: Dirección preexistente seleccionada por defecto.");
            await this.selectContinueButtons(page);
        }
      
    },

    async selectContinueButtons(page: Page) {

        await CheckoutUI.billingAddBtn(page).waitFor({ state: 'visible', timeout: 5000 });
        await CheckoutUI.billingAddBtn(page).click();
        
        await CheckoutUI.shippingAddBtn(page).waitFor({ state: 'visible', timeout: 5000 });
        await CheckoutUI.shippingAddBtn(page).click();
        
        await CheckoutUI.shippingMethodBtn(page).waitFor({ state: 'visible', timeout: 5000 });
        await CheckoutUI.shippingMethodBtn(page).click();
        console.log("-> Checkout: Datos de entrega confirmados con éxito.");
    }
};
