const units = document.querySelectorAll('[type="radio"]')
let vlera = units[0].value;
let placeHolder = document.querySelector('[type="number"]');
units.forEach((radio) => {
    radio.addEventListener("change", (e) => {
        e.preventDefault();
        if (radio.checked) {
            vlera = radio.value
            if (vlera === "celsiusToFarenheit") {
                document.getElementById("unit").innerHTML = "&deg;C";
                placeHolder.setAttribute("placeholder", "Enter the temperature in celsius");
            } else {
                document.getElementById("unit").innerHTML = "&deg;F";
                placeHolder.setAttribute("placeholder", "Enter the temperature in farenheit");
            }
        }
    });
});
document.getElementById('convertBtn').addEventListener('click', (e) => {
    e.preventDefault();
    let temp = document.querySelector('[type="number"]').value;
    let result = document.querySelector('.result');
    if (temp === "") {
        result.innerHTML = "Please enter a temperature value";
    }
    else if (vlera === "celsiusToFarenheit") {
        result.innerHTML = `${temp} &deg;C = ${(temp * 1.8 + 32).toFixed(3)} &deg;F`;
    } else {
        result.innerHTML = `${temp} &deg;F = ${(((temp - 32) * 5) / 9).toFixed(3)} &deg;C`;
    }
});