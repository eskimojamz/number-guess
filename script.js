function nb_random(min,max){
    const nb = min +(max-min+1) * Math.random();
    return Math.floor(nb);
}

const scores = []

function playGame() {
    const rand_num = nb_random(1, 100);
    let count = 0
    let playAgain = false

    let guess = parseInt(prompt("Choose a number between 1 - 100"));

    while (guess === NaN) {
        guess = parseInt(prompt("That's not a number! Choose a number between 1 - 100"));
    };

    while (guess !== rand_num){
        // round played, increment
        count++
        if (guess < rand_num) {
            guess = parseInt(prompt(`The number is greater than: ${guess}. Try again.`));
            while (guess === NaN) {
                guess = parseInt(prompt("That's not a number! Choose a valid number."));
            };
        } else if (guess > rand_num) {
            guess = parseInt(prompt(`The number is less than: ${guess}. Try again.`));
            while (guess === NaN) {
                guess = parseInt(prompt("That's not a number! Choose a valid number."));
            };
        };
    };

    if (guess === rand_num) {
        playAgain = confirm(`You win! The number is: ${rand_num}! You won in ${count} tries! Would you like to play again?`)
    }

    scores.push(count)

    if (playAgain) {
        playGame()
    }
};

playGame()

scores.sort()

alert(`You played ${scores.length} times. Your best score is ${Math.max(...scores)}.`)
