function determineWeatherCondition(tempreture){
    const weatherCondition = tempreture>30 ?"Hot":"Moderate";
    console.log(`The weather condition is ${weatherCondition}`);

}
const currentTempreture = 25;
determineWeatherCondition(currentTempreture)// Function to determine weather condition based on temperature
