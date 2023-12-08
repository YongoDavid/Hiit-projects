// WHEN WRITING FUNCTIONS YOU FIRST START BY DECLARING "function" KEYWORD THEN THE NAME 
// IN THE PARENTISIS // YOU CAN PASS IN AN INPUT TOO RETUN AN OUTPUT

function logToConsole() {
    console.log("Class Started")
}

// THIS "()" AFTER THE FUNCTION NAME IS USED TO INVOCKE THE FUNCTION 
// logToConsole()

let a = 5
let b = 6

// HERE IS ANOTHER WAY TO DECLARE FUNCTION WITHOUT AN INPUT 
const areaRectangle = () => {
    let area = a * b
    console.log(area)
}

const perimeterRectangle = (c, d) => {
    let peri = 2 * (c + d)
    // console.log(peri)
    return peri
}

areaRectangle()
perimeterRectangle(10, 20)
const first_peri = perimeterRectangle(10, 20)
console.log(first_peri)


const score = [50, 25, 32, 10, 11, 15, 41, 7, 75, 81, 1, 19, 90, 20, 65, 76, 90, 8]

// HERE IS ANOTHER WAY TO DECLARE FUNCTION WITH AN INPUT 
const printVal = (scores) => {

    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 50) {
            total = total + scores[i]
        }

        console.log(total)
    }

    return total
}

console.log(printVal(score))