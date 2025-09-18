type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific

let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'world'
let e = <string | number>`world`


// Asserions for the narrowing real time example
const addOrConcat = (a:number, b:number, c: 'add' | 'concat ') : number | string => {
  if(c === 'add') return a + b
  return '' + a + b
}


let myVal: string = addOrConcat(2, 3, 'concat ') as string

// Be careful TS sees no problem - but a string os returned
let nextVal: number = addOrConcat(2, 2, 'concat ') as number


//Unknow you can't use unknow anywhere

//Fore Casting or Double Casting
//10 as string
(10 as unknown ) as string


// The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement

// This line will not work for tsc file in typeScript
const nextImg = <HTMLImageElement> document.getElementById('#img') as HTMLImageElement
// throught errors when we try to access myImg tag
img.src
myImg.src
