//Generics - Sometimes we don't know what type we pass in a interface, tpe


// It works with any type we pass into a fucntions
const echo = <T>(arg: T): T => arg


//Useful In Utility Functions

const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && ! Array.isArray(arg) && arg ! == null)
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1,2,3]))
console.log(isObj({name: 'John'}))
console.log(isObj(null))



// One Example of adding generics is when you want to write a function don't know the return type

