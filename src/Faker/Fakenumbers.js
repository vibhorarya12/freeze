import { faker } from '@faker-js/faker';
export function generateFourDigitNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const numbers = [];
        for (let i = 0; i < count; i++) {
            // Generate a random 4-digit number using faker.js
            const number = faker.number.int({ min: 1000, max: 9999 });
            numbers.push(number);
        }
        return numbers;
    }
    return numbers;
}
export function generateMonthYearString() {
    // Generate a random month (between 1 and 12)
    const month = faker.number.int({ min: 1, max: 12 });
    // Generate a random year (between current year and 2040)
    const currentYear = new Date().getFullYear();
    const maxYear = Math.min(currentYear + 40, 2040);
    const year = faker.number.int({ min: currentYear, max: maxYear });
    // Format month and year as MM/YY
    const monthString = month.toString().padStart(2, '0'); // Ensure two digits for month
    const yearString = year.toString().slice(-2); // Take last two digits of the year
    return `${monthString}/${yearString}`;
}
export function generateThreeDigitNumber() {
    // Generate a random number between 0 and 999 (inclusive)
    const number = faker.number.int({ min: 0, max: 999 });
    // Convert the number to a string
    const numberString = number.toString().padStart(3, '0'); // Ensure at least 3 digits with leading zeros if needed
    return numberString;
}