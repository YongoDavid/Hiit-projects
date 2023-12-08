                            // DATA TYPES 

// NUMBER DATA TYPE 
// NUMEBERS DATA TYPES HAVE MATH FUNCTIONS THAT ARE USED TO CARRY OUT MATH OPERATIONS 
// console.log(10 + 10)    // THIS IS FOR ADDITION 
// console.log(10 - 2)     // THIS IS FOR SUBTRACTION 
// console.log(10 * 2)    //  THIS IS FOR MULTIPLICATION
// console.log(10 / 3)     // THIS IS DIVITION
// console.log(10 % 3)     // THIS TO GET REMAINDERS
// console.log(10 ** 3)    // 1000 THIS IS MODULUS TO "RAISED TO THE POWER "

// NAN 'NOT A NUMBER'
// YOU CAN ONLY ADD NUMBERS AND BOOLEAN AND STRINGS AS BOOLEN 
// console.log(2 + true)       // 3 
// console.log(2 + false)      // 2
// console.log(2 + "true")     // 2true
// console.log(2 - "true")     // NaN
// console.log("100" - 4)      // NaN 96
// console.log("true" - 2)     // NaN
// console.log("100" + 4)      // 104
// console.log(100 - "4")      // 96
// console.log("10" * 2)       // 20
// console.log("true" * 2)     // NaN
// console.log(("true") * 2)   // NaN
// console.log("10" ** 2)      //  100
// console.log("10" % 2)       //  0

// console.log(100 - - '2') // 102
// console.log(100 - -"2")  // 102
// console.log(100 - + '2') // 98
// console.log(100 + +'2') // 102
// console.log(typeof Number('2'))  // THIS IS USED TO CHANGE A DATA TYPE FROM NUMBR TO STRING OR OPPOSITE

// console.log(typeof +'2')  Look at what this means 

// // TYPE CONVERSTION , THIS IS CHANGING ONE DATA TYPE TO THE OTHER 


// // MATH OPERATORS AND FUNCTIONS

// let r = 5
// let area = Math.PI * (r ** 2)
// let roundedArea = Math.round(area)
// let floorArea = Math.floor(area)
// let ceilArea = Math.ceil(area)
// let areaTDP = area.toFixed(2)
// console.log(area)
// console.log(roundedArea)
// console.log(floorArea)
// console.log(ceilArea)
// console.log(areaTDP)
// console.log(typeof areaTDP)

// console.log(Math.floor(Math.random() * 10000))  // THIS IS TO GENERATE RANDOM NUMBERS FROM 0-1 1 BEING THE HIGHEST
// console.log((Math.random() * 10000).toFixed(0)) // THIS IS WHEN YOU WANT TO GENERATE MORE THAT 1 AS THE HIGHEST NUMBER 

// // STRINGS AND STRING CONCATINATION

// let surname
// let firstName = 'David'
// let lastName = 'Yongo'
// let country = 'Nigeria'
// let age = 40
// let height = "5'7"
// let weight = 70
// let email = "Davidyongo9@gmail.com"

// // HERE ARE DIFFERENT WAYS TO CONCATIANTE STRING BUT "TEMPLATE" METHOOD IS THE BEST 

// let userDetails = "My name is " + firstName + " " + lastName + ", and I am from " + country + ". I am " + age + " years old, I am " + height + " tall and weigh " + weight + "kg. My email is " + email + "."
// console.log(userDetails)
// // THIS IS THE TEMPLATE METHOD 
// userDetails = `My name is ${firstName} ${lastName}, and I am from ${country}. I am ${age} years old, I am ${height} tall and weigh ${weight}kg. My email is ${email}.`
// console.log(userDetails)

// // STRING INDEXING , THIS IS USED THE FIND THE INDEX OF A PARTICULAR CHARACTER OR  LETTER IN A STRING AND IT STARTS COUNTING FROM 0

// let fullName = firstName + " " + lastName

// console.log(fullName)
// console.log(fullName[5])    // the fifth character is a space so it is empty 
// console.log(fullName[9])    // g
// console.log(fullName[6])   //  Y
// console.log(fullName[4])    // d
// console.log(fullName[20])   // undifined because there are no characters found 

// // STRING PROPERTIES , THIS ARE USED TO CARRY OUT CERTAIN FUNCTIONS OR OPERATIONS ON STRINGS 
// console.log(fullName.length)

// // STRING METHODS AND FUNCTIONS 
// console.log(fullName.toUpperCase()) // TO MAKE LETTERS TO UPPERCASE 
// console.log(fullName.toLowerCase())// MAKE LETTERS OT LOWER CASE 
// console.log(fullName.indexOf("i"))// TO GET THE POSITION OF A PARTICULAR LETTER OR CHARACTER 
// console.log(fullName.split("i")) // TO SPLIT CHARACTERS 
// console.log(fullName.split("i").join('i')) // JOIN IS USED TO JOIN CHARACTERS TOGETHER 
// console.log(fullName.slice(4, 9)) // THIS IS USED TO SLICE BETWEEEN CHARACTERS IN A STRING 

// let lowerName = fullName.toLowerCase()
// console.log(lowerName)
// let formatedFirstName = lowerName[0]
// let splitFirstName = lowerName.split('d')
// console.log(formatedFirstName)
// console.log(splitFirstName[1])
// let upperFirstFirstName = formatedFirstName.toUpperCase()
// let finalName = upperFirstFirstName + splitFirstName[1]
// console.log(finalName)

// console.log(lowerName[0].toUpperCase() + lowerName.split('d')[1])

// // ARRAY 
// let students = ["Daniel", "Paul", "David", "Chioma", 50, true]

// console.log(students)
// console.log(students.length)
// console.log(students[3])
// console.log(students.indexOf(true))

// students[4] = "Maxwell"
// console.log(students)

// students[true] = "Emmanuel"
// students[students.indexOf(true)] = "Sever"
// console.log(students)

// students.push("Emmanuel")
// console.log(students)

// students.pop()
// console.log(students)

// console.log(students.join('-'))


// let scores = [50, 70, 10, 5]
// // console.log(scores)

// const allData = students.concat(scores)
// const allData = [...students, "Dominion", ...scores, 100]
// console.log(allData)
// console.log(students)
// console.log(scores)
// console.log(students.join(', '))

// Boolean
// console.log(10 > 2)     // true
// console.log(10 < 2)     // false
// console.log(10 <= 2)    // false
// console.log(10 <= 10)   // false, true
// console.log(10 <= "10") // false
// console.log(10 >= 2)    // false, true
// console.log(10 == 2)    // false
// console.log(10 == '10') // false, true
// console.log(10 === '10')    // true
// console.log(10 !== '10')    // false, true
// console.log(10 != '10')     //  true, false

// // PRACTICE 
// let firstName = "david";
// let lastName = 'yongo';


// let fullName = firstName + lastName;
// let result = fullname .tolow