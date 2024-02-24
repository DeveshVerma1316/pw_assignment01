function calculateProcessingFee (paymentMethod){
    let processingFee;
    switch (paymentMethod.toLowerCase()){
        case "credit":
            processingFee= 2;
            break;
        case "debit":
            processingFee = 1.5;
            break;
        case "paypal" :
            processingFee = 3
            break;
            default:
                return "invalid payment method";

    }
    return `processing Fee for${paymentMethod} is ${processingFee}%`;

}
console.log(calculateProcessingFee("credit"));
console.log(calculateProcessingFee("debit"));
console.log(calculateProcessingFee("paypal"));
console.log(calculateProcessingFee("bitcoin"));