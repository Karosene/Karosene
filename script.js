let display = document.getElementById('display');

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
    display.value = display.value.slice(0, -1);
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