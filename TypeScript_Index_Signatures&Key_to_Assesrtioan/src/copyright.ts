
// Challenge for converting number to string


//Original JS Code

// const year = document.getElementById('year') as HTMLElement
// const thisYear: number = new Date().getFullYear()
// year.setAttribute("datetime", (thisYear as unknown) as string)
// year.textContent = (thisYear as unknown) as string


//as assertions

const year = document.getElementById('year') as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
