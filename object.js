// let user = {
//     name: "John",
//     surname: "Smith",
// }
// user.name = "Pete";
// delete user.name


// let schedule = {};
// function isEmpty(obj) {
// for (let key in obj) {
//     return false
// } 
// return true
// }


// let salaries = {
//     // John: 100,
//     // Ann: 160,
//     // Pete: 130
//   }
//   let sum = (salaries.John + salaries.Ann+salaries.Pete);
//   alert (sum);
// if (for (let key in salaries) = Nan)
// alert (sum = 0)
// // {
// // alert (sum = 0)
// //   }
 

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log (menu)
// menu.width    передають значенння
// menu["width"]
function multiplyNumeric(menu){
  for (key in menu) {
    if (typeof menu[key] === "number"){
      menu[key] *= 2
      // menu[key] = menu[key] *2 записується в лет меню
    }
  }
}
multiplyNumeric(menu)
console.log (menu)
