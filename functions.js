"use strict";
// type is any(dangrous , not optoimize)
Object.defineProperty(exports, "__esModule", { value: true });
// let user;
// function greeting() {
//     return "Hilal"
// }
// user = greeting()
// let user : string;
function greeting(user) {
    return "HELLO ".concat(user.toUpperCase());
}
var getuser = greeting("Hilal");
console.log(getuser);
//  function type (i mean what value function could return in TS)
function getFavoriteNumber() {
    return Math.floor(Math.random() * 100);
}
var fav_num = getFavoriteNumber();
console.log(fav_num);
var names = ["Alice", "Bob", "Eva"];
names.forEach(function (name) {
    console.log(name.replace(name, "Hilal").toUpperCase());
});
names.forEach(function (name) {
    console.log(name.toUpperCase());
});
