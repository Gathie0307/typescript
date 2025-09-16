let stringArr = ['one', 'hey', 'Dave']
let guitars = ['Strat', 'Les Paul', 5150]
let mixedData = ['EVH', 1948, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')
console.log(guitars)

let test = []
let bands: string[] =[]
bands.push('Van Halen')

//Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

//myTuple[4] = 21 // TypeScript doesn't allow

myTuple[1] = 2 // Typescript allowws this code

//Objects


let myObj: Object

myObj = []

console.log(typeof myObj);
