'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
let current = document.getElementById(`current--0`);
let total = document.getElementById(`score--0`);
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
let currentScore = 0;

// Tlačítko hod kostkou
btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', holdScore);
btnNewGame.addEventListener('click', newGame);

function diceRoll() {
    dice.removeAttribute('hidden', '');
    const roll = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${roll}.png`;
    if (roll == 1) {
        currentScore = 0;
        current.textContent = '0';
        total.textContent = Number(total.textContent) + currentScore;
        switchPlayer();
    } else {
        currentScore += roll;
        current.textContent = currentScore;
    }
}

function switchPlayer() {
    if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        current = document.getElementById('current--1');
        total = document.getElementById('score--1');
    } else {
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        current = document.getElementById('current--0');
        total = document.getElementById('score--0');
    }
};

function holdScore() {
    total.textContent = Number(total.textContent) + currentScore;
    currentScore = 0;
    current.textContent = '0';
    victoryCheck();
};

function victoryCheck() {
    if (Number(total.textContent) < 100) {
        total.textContent = Number(total.textContent) + currentScore;
        currentScore = 0;
        current.textContent = '0';
        switchPlayer();
    } else if (player1.classList.contains('player--active')) {
        player1.classList.add('player--winner');
        btnRoll.removeEventListener('click', diceRoll);
        btnHold.removeEventListener('click', holdScore);
        dice.setAttribute('hidden', '');
    } else {
        player2.classList.add('player--winner');
        btnRoll.removeEventListener('click', diceRoll);
        btnHold.removeEventListener('click', holdScore);
        dice.setAttribute('hidden', '');
    }
};

function newGame() {
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    btnRoll.addEventListener('click', diceRoll);
    btnHold.addEventListener('click', holdScore);
    player1.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--winner');
    player2.classList.remove('player--active');
    dice.setAttribute('hidden', '');
};