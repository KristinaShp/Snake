const testArray = [];
console.log(testArray);
testArray.push("test");
console.log(testArray);
console.log(testArray[0]);
testArray.push("test2");
console.log(testArray);
console.log(testArray[1]);
console.log(testArray[2]);
testArray.slice()
const newArray = ["New1", "New2", "New3", "New4", "New5", "New6", "New7", "New8"];
for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}
for (const el of newArray) {
    console.log(el);
}
newArray.forEach(function (el, index, arr) {
    console.log("Element", el);
    console.log("Index", index);
    console.log("Array", arr);
});
newArray.forEach(function (el) {
    console.log("Element", el);
});
newArray.map(function (el) {
    return el + " Edited"
});
newArray[3] = "Old4";
console.log(newArray)

newArray.push("Newwwwww");
newArray.find(function (el, idx) {
    return el.length > 4
}
)
function camelize(str = "") {
    const strArr = str.split("-");
    console.log(strArr);
    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1)
    }
    console.log(strArr);
    return strArr.join(" ");

}
camelize("list-style-image") // list Style Image

function camelize(str = "") {
    const strArr = str.split("-");
    console.log(strArr);
    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1)
    }
    console.log(strArr);
    return strArr.join(" ");

}
camelize("-webkit-transition") 
