function calculateSum(inputNumber){
    if (typeof inputNumber !=='number'|| inputNumber<=0 || !Number.isInteger(inputNumber)){
        console.log("Please enter the positive integer.");
        
        return;


    }
    let sum =0 
    let currentNumber = 1

    do{
        sum += currentNumber;
        currentNumber++;

    }while (currentNumber<=inputNumber);
    console.log(`The sum of number from 1 to${inputNumber} is: ${sum}`);

}
const userInput  = 5;
calculateSum(userInput)

