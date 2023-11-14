function calculateNumbers(numbers) {
    // Calculate and display the sum of all numbers
    let sum = 0;
    for (let i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(`Sum of numbers: ${sum}`);

    // Calculate and display the maximum number using Math.max and spread operator
    let max = Math.max(...numbers);
    console.log(`Maximum number: ${max}`);

    // Calculate and display the square root of the minimum number using Math.min
    let min = Math.min(...numbers);
    let sqrtMin = Math.sqrt(min);
    console.log(`Square root of minimum number: ${sqrtMin}`);
}

// Example usage:
let numbers = [12, 5, 8, 16, 3];
calculateNumbers(numbers);
console.log(calculateNumbers(numbers));

