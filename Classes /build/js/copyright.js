"use strict";
// Challenge for converting number to string
Object.defineProperty(exports, "__esModule", { value: true });
//Original JS Code
// const year = document.getElementById('year') as HTMLElement
// const thisYear: number = new Date().getFullYear()
// year.setAttribute("datetime", (thisYear as unknown) as string)
// year.textContent = (thisYear as unknown) as string
//as assertions
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
//# sourceMappingURL=copyright.js.map