function generateRandomNumber(min, max) {
    if (min > max) {
        
        [min, max] = [max, min];
    }

    
    return Math.floor(Math.random() * (max - min) + min);
}


let minNumber = 10;
let maxNumber = 30;

let randomNumber = generateRandomNumber(minNumber, maxNumber);
console.log(`Random number between ${minNumber} and ${maxNumber}: ${randomNumber}`);

