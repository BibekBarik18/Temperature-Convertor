let display=document.getElementById("display");
let toFahrenheit=document.getElementById("tofahrenheit");
let toCelcius=document.getElementById("tocelcius");
let result=document.getElementById("result");
let temp;

function convert(){
if(toFahrenheit.checked)
{
    temp=Number(display.value);
    temp=temp*9/5+32;
    result.textContent=temp.toFixed(1)+"°F";
}
else if(toCelcius.checked)
{
    temp=Number(display.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp.toFixed(1)+"°C";
}
else
{
    result.textContent="Please select a unit";
}
changeBackgroundColor(temp);
}

function changeBackgroundColor(temperature) {
    let body = document.body;

    if (temperature < 32) {
        body.style.backgroundColor = "#00f"; // Cold (blue)
    } else if (temperature >= 32 && temperature <= 68) {
        body.style.backgroundColor = "#0f0"; // Mild (green)
    } else if (temperature > 68) {
        body.style.backgroundColor = "#f00"; // Hot (red)
    }
}
