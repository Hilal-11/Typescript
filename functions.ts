

// type is any(dangrous , not optoimize)

// let user;

// function greeting() {
//     return "Hilal"
// }

// user = greeting()


// let user : string;


// function greeting(user:string) {
//     return `HELLO ${user.toUpperCase()}`
// }
// let getuser = greeting("Hilal");
// console.log(getuser)




// //  function type (i mean what value function could return in TS)

// function getFavoriteNumber ():number {
//     return Math.floor(Math.random() * 100)
// }

// let fav_num = getFavoriteNumber();
// console.log(fav_num)




// const names:string[] = ["Alice" , "Bob" , "Eva"];

// names.forEach(function (name) {
//     console.log(name.replace(name , "Hilal").toUpperCase())
// })

// names.forEach((name) => {
//     console.log(name.toUpperCase())
// })

//  types of functions in typescript

function greeting(username : string) {
    return username.toUpperCase()
}
const username: string = "Hilal"
greeting(username);



function favNumber() : number{
    return Math.floor(Math.random() * 100)
}

const favNum = favNumber();
console.log(favNum)

// type is (Any) --> so it is problematic
// function add(num) {
//     return num + 10;
// }
// add(6)

// function add(num: number) {
//     return num + 10;
// }

// add(6)


const list:string[] = ["Apple" , "Banana" , "Mangoo" , "papeta"]

list.forEach((item: string) => {
    return item.toUpperCase()
})



//  first issue

// function getValue(myval: number){
//     if(myval > 5) {
//         return true
//     }
//     else "200 Ok"
// }

const greeting2 = (s: string):string => {
    return "Hello "+ s;
}

greeting2("Hilal")


const data = [10 , 45 , 71 , 90];
// const data = ["A" , "B" , "C" , "D"];


data.map((item ) => {
    return "Hero is "+item;
})




























export {}