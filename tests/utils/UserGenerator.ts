export class UserGenerator {
    static generateRandomString(length: number): string {
        return Math.random().toString(36).substring(2, 2 + length);
    }

    static getRandomGender(): 'Male' | 'Female' {
        return Math.random() < 0.5 ? 'Male' : 'Female';
    }

    static generateUserData() {
        const randomSuffix = this.generateRandomString(5);
        const password = `Pass_${this.generateRandomString(6)}!`;
        const gender = this.getRandomGender();

        return {
            gender,
            firstName: `User${randomSuffix}`,
            lastName: `Test${randomSuffix}`,
            email: `user_${randomSuffix}@yopmail.com`,
            password: password,
            confirmPassword: password
        };
    }
}
