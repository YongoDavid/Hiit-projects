// let firstName = 'david';
// let lastName = 'yongo';
// let Age = 23;
// const fullName = firstName + ' ' + lastName;
// console.log(fullName.toUpperCase());

// console.log(fullName.slice(0, 5));
// console.log(fullName.replace('david', 'xdo'));
// console.log(fullName)

// let staffName = ['amanda', 'david', 'daniel', 'emmanuel', 'christian'];
// let staffAge = [20, 25, 27, 29, 31];

// console.log(staffName.push('adamu', 'Mensah', 'luka'));
// // console.log(staffName.length)
// console.log(staffAge.push(50, 70, 80));
// console.log(staffName, staffAge);


// // SOME MATHS OPERATORS
// console.log(10 + '10')
// // 1010
// console.log(10 - '10');
// // 0
// console.log('true' - 10)
// // NaN
// console.log(true + '10')
// 11

// // TYPE CONVERTION 
// console.log(typeof staffName);
// console.log(typeof firstName);
// console.log(typeof Age);


// let r = 1
// let area = Math.PI * (r ** 6)
// let roundedArea = Math.round(area)
// let floorArea = Math.floor(area)
// let ceilArea = Math.ceil(area)
// // let areaTDP = area.toFixed(2)
// console.log(area)
// console.log(roundedArea)
// console.log(floorArea)
// console.log(ceilArea)
// console.log(areaTDP)
// Math.random()
// console.log(Math.random())

// console.log(Math.floor(Math.random() * 10000))
// console.log((Math.random() * 10000).toFixed(0))

// console.log(true)
// console.log(false)

// console.log(!true)
// console.log(!false)

// const scores = [12, 20, 10, 40, 30, 50, 200, 300 , 4000 , 5000 ]
// for (i = 0; i < scores.length; i++){

//     if(scores[i] === 20){
//         continue;
//     }

//     console.log('Your score is ', scores[i])

//     if (scores[i] === 300) {
//     console.log('This is your max score',)
//     break;
// }


// }  

// // LOCAL AND GLOBAL SCOPE 

// const age = 30
// console.log('outside code block' , age)

// if (true) {
//     const age = 50
//     const lastName = 'Yongo'
//     console.log('inside 1st code black', age , lastName)
    
//     if (true) {
//         const age = 100
//         const lastName = 'David'
//         console.log('inside second code block', age, lastName)
//     }
// }

// console.log('outside coode block',lastName)

// // SWITCH STATMENT 
// const grade = 'A'
// switch (grade) {
//     case "A":
//         console.log('You have done VERY WELL');
//         break;
//     case "B":
//         console.log('You did your BEST');
//         break;
//     case "C":
//         console.log('You can do BETTER');
//         break;
//     case "D":
//         console.log('You need HELP');
//         break;
//     default:
//         console.log('Input the correct grade:');

// }

// FUNCTIONS 
// function greet() {
//     console.log('Good afternoon billioner David Yongo')
// }
// greet()

// // FUNCTION EXPRESSION 
// const speak = function () {
//     console.log('You are welcome to the billionaires meeting Yongo')
// };
// speak()

// // PARAMETERS AND ARGUMENTS 
// function greet(name , time) {
//     console.log(`Good ${time} billionaires ${name} welcome back ` )
// };
// greet('David Yongo', 'morning');

// RETURNING VALUES 
// const addNumbers = (a , b) => {
//     let sumNumbers = a + b
//     return sumNumbers;
// }
// let Total = addNumbers(100, 400)
// console.log(Total)

// CALLBACK FUNCTIONS AND FOR EACH 


// FOREACH 
// let people = ['David', 'Christian', 'Emmanuel']
// for (let i = 0; i < people.length; i++){
//     people.forEach([i])
//     console.log('Your Name is', people) 
// }


// // DOM ( DOCUMENT OBJECT MODEL) 
// const paraGraph = document.querySelector('.error')
// // console.log(paraGraph);

// const anotherDiv = document.querySelector('body > div.error')
// // console.log(anotherDiv)

// const paraS = document.querySelectorAll('p')
// // console.log(paraS)

// // THSES ARE DIFFERENT WAYS  FOR YOUR DOM TO ACCESS HTML WITH MORE SPECITIVITY  
// // GET BY ID
// const newP = document.getElementById('error2.0')
// console.log(newP)

// // GET BY CLASS NAME 
// const newP1 = document.getElementsByClassName('error')
// console.log(newP1);

// // GEY BY TAG NAME 
// const newP2 = document.getElementsByTagName('h1')
// console.log(newP2);