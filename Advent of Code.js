const Day1P1 =
    `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
function day1p1(text = "") {
    let sum = 0;
    const lines = text.split("\n");
    console.log(lines);
    for (const line of lines) {
        let firstDigit = 0;
        let lastDigit = 0;
        console.log(line)
        for (const letter of line) {
            if (parseInt(letter)) {
                if (firstDigit === 0) {
                    firstDigit = letter;
                }
                lastDigit = letter;
            }
        } 
        let allSum = firstDigit + lastDigit;
        sum = Number (allSum) + sum
    }
    return sum;

};
console.log(day1p1(Day1P1));
