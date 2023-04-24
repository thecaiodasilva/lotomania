let numbers = [];

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 25) + 1;
    if (numbers.includes(randomNumber)) {
        return getRandomNumber();
    }
    numbers.push(randomNumber);
    return randomNumber;
}

document.getElementById('rollButton').onclick = function() {

    numbers = [];

    let sorteios = [];

    for (let i = 0; i < 15; i++) {

        sorteios.push(getRandomNumber());

    }

    sorteios.sort(function(a, b) {

        return a - b;

    });

    for (let i = 0; i < 15; i++) {

        document.getElementById("sorte" + (i+1)).innerHTML = sorteios[i];

    }

};

