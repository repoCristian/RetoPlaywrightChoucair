markdown
# Reto Playwright Demo Web Shop

Proyecto de automatización de pruebas de extremo a extremo (E2E) utilizando **Playwright** con **TypeScript**, estructurado bajo el patrón de diseño **Screenplay** adaptado a un enfoque **BDD (Behavior-Driven Development)** ágil y limpio.

## 📐 Arquitectura del Proyecto

Este proyecto implementa el patrón **Screenplay** de forma optimizada y directa para BDD, **prescindiendo de la entidad formal del "Actor"** para mantener el código lo más limpio, legible y mantenible posible. En su lugar, las pruebas interactúan directamente a través de:
* **Features:** Definición de escenarios de negocio en lenguaje Gherkin.
* **Tasks:** Clases que representan acciones de alto nivel o flujos de usuario (ej. `Login`, `ConsolidateCart`).
* **UI (User Interfaces):** Selectores y localizadores de los elementos de las páginas web.
* **Questions:** Verificaciones y aserciones para validar el estado de la aplicación.
* **Step Definitions:** Puentes que conectan los pasos de Gherkin con la lógica de ejecución técnica.

### 📂 Árbol de Directorios

```text
reto-demo_web_shop-screenPlay/
├── .github/
├── node_modules/
├── tests/
│   ├── features/
│   │   ├── 01_register.feature
│   │   └── 02_purchase.feature
│   ├── screenplay/
│   │   ├── questions/
│   │   │   ├── CartQuestions.ts
│   │   │   ├── LoginQuestions.ts
│   │   │   ├── OrderQuestions.ts
│   │   │   └── RegisterQuestions.ts
│   │   ├── tasks/
│   │   │   ├── ConsolidateCart.ts
│   │   │   ├── FillDeliveryInfo.ts
│   │   │   ├── FillPaymentInfo.ts
│   │   │   ├── Login.ts
│   │   │   ├── Register.ts
│   │   │   └── SelectProduct.ts
│   │   └── ui/
│   │       ├── CheckoutUI.ts
│   │       ├── ConfirmUI.ts
│   │       ├── ConsolidateCartUI.ts
│   │       ├── LoginUI.ts
│   │       ├── PaymentUI.ts
│   │       ├── ProductsUI.ts
│   │       └── RegisterUI.ts
│   ├── step_definitions/
│   │   ├── hooks.ts
│   │   ├── purchaseSteps.ts
│   │   └── registerSteps.ts
│   └── utils/
│       ├── data/
│       │   └── purchaseData.json
│       └── UserGenerator.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

## 🛠️ Prerrequisitos

* [Node.js](https://nodejs.org) (Versión v18 o superior recomendada)
* Visual Studio Code

## 🚀 Instalación y Uso Local

1. Instalar dependencias del proyecto:
   ```bash
   npm install
   ```
2. Instalar los navegadores de Playwright:
   ```bash
   npx playwright install
   ```
3. Ejecutar las pruebas automatizadas:
   ```bash
   npm run bdd
   ```