// let user = {
//     fullName: 'David Chioma',
//     email: 'pauldaniel@gmail.com',
//     phone: [
//         {
//             type: 'home',
//             phone: '088851684651'
//         },
//         {
//             type: 'mobile',
//             phone: '6824684165465'
//         }
//     ],
//     age: 30,
//     children: ['Paul', 'Daniel'],
//     newBirth: function () {
//         return `${this.fullName} births a new child`
//     }
// }

// console.log(user.fullName)
// console.log(user.children)
// console.log(user.newBirth())


// TASK

// 1. Write a function that takes two numbers as inputs and returns the sum of all the even numbers between them. Use a loop and conditional statements to accomplish this task.

// 2. Write a program that prints the first 100 Fibonacci numbers. Use a loop and conditional statements to accomplish this task.

// 3. Write a program that takes an array of integers and returns the largest number in the array. Use a loop and conditional statements to accomplish this task.

// 4. Write a program that takes an array of integers and returns the sum of all the even numbers in the array. Use a loop and conditional statements to accomplish this task.

// 5. Write a program that takes an array of integers and returns a new array with only the even numbers. Use a loop and conditional statements to accomplish this task.


// SOLUTION 1 
// Define the array of numbers
// const numbers1 = [0 , 10];
// let evenSum1 = 0;
// for (let i = 0; i < numbers1.length; i++) {
//     if (numbers1[i] % 2 === 0) {
//       evenSum1 += numbers1[i];
//     }
//   }
// console.log("The sum of even numbers is:", evenSum1);

// TAKE 2 


// SOLUTIONS 3
// const digits = [10, 20, 300, 40, 50];
// let LargeNumber = digits[0];
// for (i = 0; i < digits.length; i++) {
//     if (digits[i] > LargeNumber) {
//         LargeNumber = digits[i]
//     }
// }
// console.log('the largest number:',LargeNumber)

// // SOLUTION 4
// const Numbers = [36, 257, 30, 128.2, 535];
// const Numbers = [1, 2, 3, 4, 5 , 6 , 7, 8 ,9, 10];
// let evenSum = Numbers[0];
// for (i = 0; i < Numbers.length; i++){
//     if (Numbers[i] % 2) {
//         evenSum = Numbers[i] ++
//     }
// }
// console.log('the even number is:', evenSum);

// // SOLUTION 5
// const numbers = [15, 20, 25, 30, 35];
// let evenNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
// if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   console.log("Array with even numbers:", evenNumbers);

