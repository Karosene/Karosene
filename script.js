let display = document.getElementById('display');
let lastChar = inputStr.charAt(inputStr.length - 1);

function appendCharacter(char) {
    if (display.value !== '0') {
        display.value += char;
    } 
    else {
        display.value = '';
        display.value += char;
    }
}

function deleteChar() {
    if (display.value == 'Error') {
        display.value = '0';
    }
    else if (display.value.length === 1) {
        display.value = '0';
    }
    else{
        display.value = display.value.slice(0, -1);
    }
}

function clearall() {
    display.value = '0';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
