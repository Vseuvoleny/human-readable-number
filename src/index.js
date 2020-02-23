const a = new Map([
    [0, ""],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"]
]);
const b = new Map([
    [0, ""],
    [1, "ten"],
    [2, "twenty"],
    [3, "thirty"],
    [4, "forty"],
    [5, "fifty"],
    [6, "sixty"],
    [7, "seventy"],
    [8, "eighty"],
    [9, "ninety"]
]);
module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    let x = Math.floor(number / 100);
    let y = Math.floor((number % 100) / 10);
    let z = number % 100;
    let hundred = " hundred";

    if (y === 1) {
        y = number % 100;
        y = a.get(y);
        z = "";
    }
    if (y === 0) {
        y = "";
        z = a.get(z);
    }
    if (y > 1) {
        z = number % 10;
        if (z != 0) {
            y = String(number % 100);
            y = b.get(Number(y[0])) + " " + a.get(Number(y[1]));
            z = "";
        }
        if (z === 0) {
            y = String(number % 100);
            y = b.get(Number(y[0])) + a.get(Number(y[1]));
            z = "";
        }
    }

    if (number >= 100) {
        if (number % 100 === 0) {
            x = a.get(x) + hundred;
        } else {
            x = a.get(x) + hundred + " ";
        }
    } else {
        x = "";
    }
    return x + y + z;
};
