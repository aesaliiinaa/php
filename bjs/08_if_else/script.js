let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
const randomQuestion = Math.round(Math.random() * 2);
switch (randomQuestion) {
    case 0:
        answerField.innerText = `Вы загадали число ${answerNumber}?`;
        break;
    case 1:
        answerField.innerText = `Может быть, это число ${answerNumber}?`;
        break;
    case 2:
        answerField.innerText = `А может это число ${answerNumber}?`;
        break;
}

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
    
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    const questionRandom = Math.round(Math.random() * 2);
    switch (questionRandom) {
        case 0:
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
            break;
        case 1:
            answerField.innerText = `Может быть, это число ${answerNumber}?`;
            break;
        case 2:
            answerField.innerText = `А может это число ${answerNumber}?`;
            break;
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            let answerPhrase; 
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `А Вы точно число загадали..?\n\u{1F610}`;
                    break;
            }   

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionRandom = Math.round(Math.random() * 2);
            switch (questionRandom) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber}?`;
                    break;
                case 1:
                    answerField.innerText = `Может быть, это число ${answerNumber}?`;
                    break;
                case 2:
                    answerField.innerText = `А может это число ${answerNumber}?`;
                    break;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            let answerPhrase; 
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `А Вы точно число загадали..?\n\u{1F610}`;
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            answerNumber = (answerNumber < minValue) ? answerNumber + 1 : answerNumber;
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionRandom = Math.round(Math.random() * 2);
            switch (questionRandom) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber}?`;
                    break;
                case 1:
                    answerField.innerText = `Может быть, это число ${answerNumber}?`;
                    break;
                case 2:
                    answerField.innerText = `А может это число ${answerNumber}?`;
                    break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const successMessage = Math.round(Math.random() * 2);
        switch (successMessage) {
            case 0:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 1:
                answerField.innerText = `И снова победа\n\u{1F60C}`;
                break;
            case 2:
                answerField.innerText = `Ха! Я опять победил\n\u{1F60F}`;
                break;
        }
        gameRun = false;
    }
})