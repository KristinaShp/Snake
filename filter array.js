function filterRange(arr, min, max) {
    // створим новий масів з числами мін макс
    // let arr = [5, 3, 8, 1];
    let result = [];
    // filter arr 
    // i>= min || i<=max; 
    for (let i = 0; i < arr.length; i++) {
        let numberFromArray = arr[i];
        console.log(numberFromArray);
        if (numberFromArray >= min && numberFromArray <= max) {
            result.push(numberFromArray)
        }
    }
    return result
}
alert(filterRange([5, 3, 8, 1], 1, 4))


function filterRangeMutable(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        let numberFromArray = arr[i];
        console.log(numberFromArray);
        if (numberFromArray >= min && numberFromArray <= max) {
        } else {
            arr.splice(i, 1);
        }
    }
}
let pop = [5, 3, 8, 1]
filterRangeMutable(pop, 1, 4)
console.log("змінений масив", pop);


function unique(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let wordFromArray = arr[i];
        if (!result.includes(wordFromArray)) {
            result.push(wordFromArray)
        }

    }

    return result
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O

  
function number (x){
let result = (x / 0)
    return result
}
alert (number(2))

function total (Num1, Num2, Num3){
    let sum = (Num1 + Num2 + Num3)
    return sum
}
alert (total(1,2,3))

function total (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    }
    return sum
}
alert (total ([1,2,3]))