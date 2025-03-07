

// type is any(dangrous , not optoimize)

// let user;

// function greeting() {
//     return "Hilal"
// }

// user = greeting()


// let user : string;


function greeting(user:string) {
    return `HELLO ${user.toUpperCase()}`
}
let getuser = greeting("Hilal");
console.log(getuser)




//  function type (i mean what value function could return in TS)

function getFavoriteNumber ():number {
    return Math.floor(Math.random() * 100)
}

let fav_num = getFavoriteNumber();
console.log(fav_num)




const names:string[] = ["Alice" , "Bob" , "Eva"];

names.forEach(function (name) {
    console.log(name.replace(name , "Hilal").toUpperCase())
})

names.forEach((name) => {
    console.log(name.toUpperCase())
})



export {}