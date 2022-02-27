//Converting temperature
const kelvin = 0;
//Coverting kelvin to celsius
var celsius = kelvin - 273;
//Converting celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
//Using floor method to convert fahrenheit from decimal
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')