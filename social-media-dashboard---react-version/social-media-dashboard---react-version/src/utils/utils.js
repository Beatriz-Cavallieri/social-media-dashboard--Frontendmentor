export const bigNumberFormat = (number) =>
    number >= 10000 ? parseInt(number / 1000) + "k" : number;

export const numberFormat = (number) => {
    number = number.toString();
    let algarisms = number.length;
    if (algarisms > 3) {
        let start = number.slice(0, algarisms - 3);
        let end = "," + number.slice(algarisms - 3, algarisms + 1);
        algarisms -= 3;
        number = numberFormat(start) + end;
    }
    return number;
};
