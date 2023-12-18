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
    if (display.value == 'Error') {let countDraw = 0;
let countLose = 0;
let countWin = 0;
let gameCount = 0;

function startGame() {
    let choice = prompt("Game begins. Write ROCK, PAPER, or SCISSORS.").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        var pcChoice = pcInput();
        alert("Your choice: " + choice)
        alert("Randomly generated prompt: " + pcChoice)

        var finalAns = answer(choice, pcChoice);
        alert(finalAns);
        
        gameCount++;

        updateScores();

        console.log(choice, pcChoice, finalAns)
    } else {
        alert("Invalid choice");
    }
}

function pcInput() {
    var options = ['rock', 'paper', 'scissors'];
    var index = Math.floor(Math.random() * 3);
    return options[index];
}

function answer(choice, pcChoice) {
    if (choice === pcChoice) {
        countDraw++;
        return 'Draw';
    } else if (
        (choice === 'rock' && pcChoice === 'scissors') ||
        (choice === 'paper' && pcChoice === 'rock') ||
        (choice === 'scissors' && pcChoice === 'paper')
    ) {
        countWin++;
        return 'You Won!';
    } else {
        countLose++;
        return 'You Lose.';
    }
}

function updateScores() {
    document.getElementById("scoreUser").innerText = "User: " + countWin;
    document.getElementById("scoreComputer").innerText = "Computer: " + countLose;
    document.getElementById("scoreDraw").innerText = "Draw: " + countDraw;
}
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
