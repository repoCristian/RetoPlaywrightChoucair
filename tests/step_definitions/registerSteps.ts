import { When, Then } from '@cucumber/cucumber';
import { page } from './hooks';
import { Register } from '../screenplay/tasks/Register';
import { RegisterQuestions } from '../screenplay/questions/RegisterQuestions';


const generateRandomString = (length: number) => Math.random().toString(36).substring(2, 2 + length);
const getRandomGender = (): 'Male' | 'Female' => (Math.random() < 0.5 ? 'Male' : 'Female');

When('de clic en la opción {string}', async (buttonName: string) => {
    await Register.navigateToForm(page, buttonName);
});

When('ingrese los datos de registro aleatorios', async () => {
    const gender = getRandomGender();
    const randomSuffix = generateRandomString(5);
    const password = `Pass_${generateRandomString(6)}!`;
    const email = `user_${randomSuffix}@yopmail.com`;

    console.log(`email: ${email} | pass: ${password}`);

    const randomUserData = {
        gender: gender,
        firstName: `User${randomSuffix}`,
        lastName: `Test${randomSuffix}`,
        email: email,
        password: password,
        confirmPassword: password
    };

    await Register.fillingForm(page, randomUserData);
});

Then('el sistema debe mostrar el mensaje {string}', async (expectedMessage: string) => {
    await RegisterQuestions.expectedSuccessfulMessage(page, expectedMessage);
});
