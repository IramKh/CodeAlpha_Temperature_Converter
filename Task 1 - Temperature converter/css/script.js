document.getElementById("convert").addEventListener("click", function () {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperatureInput + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperatureInput - 273.15;
    } else if (fromUnit === "celsius" && toUnit === "rankine") {
        result = (temperatureInput + 273.15) * 9/5;
    } else if (fromUnit === "rankine" && toUnit === "celsius") {
        result = (temperatureInput - 491.67) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (temperatureInput - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (temperatureInput - 273.15) * 9/5 + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "rankine") {
        result = temperatureInput + 459.67;
    } else if (fromUnit === "rankine" && toUnit === "fahrenheit") {
        result = temperatureInput - 459.67;
    } else if (fromUnit === "kelvin" && toUnit === "rankine") {
        result = temperatureInput * 1.8;
    } else if (fromUnit === "rankine" && toUnit === "kelvin") {
        result = temperatureInput / 1.8;
    } else {
        // Handle other conversions if needed
        result = temperatureInput; // Default: no conversion
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toUnit === "celsius" ? "°C" : (toUnit === "fahrenheit" ? "°F" : (toUnit === "kelvin" ? "K" : "°R"))}`;
});
