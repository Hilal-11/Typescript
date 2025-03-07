console.log("Hello Typescript")


const username: string = "Hilal"
const user_id: number = 1818
const isMinor: boolean = false

const notype : any = 19 

console.log(username)
console.log(user_id)
console.log(isMinor)
console.log(notype)


// creating an interface for defining the types of an object in typescript 
interface Person {
    name : string;
    id : number;
    address: string;
    course: string;
    email: string;
    contect: number
}

const person: Person = {
    name: "Hilal",
    id: 1010,
    address : "lolab",
    course: "Computer Science",
    email: "Hilalahmadcodedev1232gmail.com",
    contect: 999-424-633
}

console.log(person)

export {}