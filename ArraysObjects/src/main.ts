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

myObj = bands
myObj = {}


const exampleObj = {
  prop1: 'Gayathri',
  prop2: true
}

exampleObj.prop1 = 'Yara';

type Guitartist ={
  name?: string,
  active: boolean, //Optional
  albums: (string | number)[]
}

let evh: Guitartist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, '0U812']
}

let jp: Guitartist = {
  active: true,
  albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist:Guitartist)  => {
  if(guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`
  }
  return `Hello!`
}


//Used for classes
interface Guitarist {
  name: string,
  active: boolean,
  albums : (string | number)[]
}

console.log(greetGuitarist(jp))


//Enums
// Unlike most typescript features, Enums are not a type-level
// addition to JavaScript but something added to the languages and runtime

enum Grade {
  U = 1,
  D,
  C,
  B,
  A
}

console.log(Grade.U)
