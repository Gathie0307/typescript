// Type Aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active: boolean,
  albums: stringOrNumber
}

type UserId = stringOrNumber

//Literal types - type is Dave specify assignment

let myName: 'Dave'
let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// Functions
const add =(a: number,b:number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message)
}

logMsg('Hello');
logMsg(add(2,3))

let subtract = function(c: number, d: number): number {
  return c - d;
}

type mathFunction  = (a:number, b:number) => number

// type mathFunction {
//   (a:number, b:number) : number
// }

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(2, 2));


//optional Parameters - we need to use type guard

// Required Parameter at start and other parameter at the end

const addAll = (a:number, b:number, c?:number) :
  number => {
    if(typeof c !== 'undefined') {
      return a + b + c
    }
    return a + b
  }

  //default parameter
  const sumAll = (a:number = 10, b:number, c:number = 2) :
  number => {
   return a + b + c
  }

  logMsg(addAll(2, 3, 3))
  logMsg(addAll(2,3))
  logMsg(sumAll(undefined , 2, 3))


  //Rest Parameters typed with TypeScript
  const total = (a:number, ...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
  }

  logMsg(total(10, 2, 3));

  //Return never type when the fucntion as infinite or endless loop inside

  const createError = (errMsg: string): never => {
    throw new Error(errMsg);
  }

  const infinte = () => {
    let i: number =1
    while(true) {
      i++;
      if( i > 100)
        break
    }
  }

  //custome type guard 
  const isNumber = (value: any): boolean => {
    return typeof value === 'number'? true: false
  }

  //use of the never type
  const numberOrString = (value: number |string): string => {
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError('This should never happen')
  }
