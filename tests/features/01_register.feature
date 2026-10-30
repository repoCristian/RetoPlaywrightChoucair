Feature: HU – 01: Registro de usuario

  
  Scenario: Registro de usuario exitoso en Demo Web Shop
    Given ingreso a la aplicación ubicada en la URL "https://demowebshop.tricentis.com"
    When de clic en la opción "Register"
    And ingrese los datos de registro aleatorios
    Then el sistema debe mostrar el mensaje "Your registration completed"
