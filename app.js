let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value == "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}


function clearDisplay() {
    display.value = "0";
}


function removeDigit() {
    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    } else {
        display.value = display.value;
    }
}

function increment() {
    display.value++;
}

function decrement() {
    display.value--;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        clearDisplay();
    
    }
}



// media query
