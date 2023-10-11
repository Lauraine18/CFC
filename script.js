
// CFC (convert from farenheit to celsius)

const farenheit = 342;
const celsius = (farenheit - 32) * 5/9;   

function CreateMessage (name){
    if (farenheit < 112){
        alert(`The tempature is ${name}°C and its freazing`);
    } else{
        alert(`The temperature is ${name}°C it needs to be more cold out here.`);
}
}
const message = CreateMessage(Math.round(celsius));

console.log(celsius)