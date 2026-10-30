Feature: HU – 02: Proceso de compra

  Background:
    Given ingreso a la aplicación ubicada en la URL "https://demowebshop.tricentis.com"

  @smoke
  Scenario: Compra exitosa de un libro usando tarjeta de crédito Visa
    When me autentico con credenciales válidas
    And doy clic en una Categoría y, en caso de existir, en su Subcategoría
    And selecciono un producto y lo agrego al carrito
    And ingreso al carrito y doy clic en "Checkout"
    And ingreso los datos solicitados para la entrega y dejo los demás por defecto
    And selecciono "Credit Card" como método de pago
    And completo la información de pago con los siguientes datos:

      | creditCard | cardholderName | cardNumber       | expirationDate | cardCode |
      | Visa       | Barbara Gordon | 4485564059489345 | 04/2039        | 123      |
    And confirmo la orden
    Then el sistema deberia mostrar el mensaje "Your order has been successfully processed!"
