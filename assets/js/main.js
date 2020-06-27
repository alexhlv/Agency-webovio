/* Завдання 1:*/
let value = Number(prompt('Введіть число'));

if (value===10) {
    console.log('Вірно');
}
else {
    console.log('Не вірно');
}
/* Завдання 1:*/
/* Завдання 2:*/
let name = prompt('Введіть ваше ім\'я');

if (name==='Jonh') {
    console.log('Привіт Jonh');
}
else {
    console.log('');
}
/* Завдання 2:*/
/* Завдання 3:*/
let time = prompt('Введіть значення від 0 до 59');

let result;

if (time >= 0 && time <= 15) {
    result = 'Перша четверть часа';
} else if (time >= 16 && time <= 30) {
    result = 'Друга четверть часа';
} else if (time >= 31 && time <= 45) {
    result = 'Третя четверть часа';
} else if (time >= 46 && time <= 59) {
    result = 'Четверта четверть часа';
} else {
    result = 'Час не відомий';
}
console.log(result);
/* Завдання 3:*/
/* Завдання 4:*/
let a = Number(prompt('Введіть значення від 0 до 6'));
let b = Number(prompt('Введіть значення від 0 до 6'));

let result;

if (a <= 1 && b >= 3) {
    result = a + b;
} else if (a === 0 && b === 6) {
    result = a - b;
} else if (a === 3 && b === 5) {
    result = a - b;
} else {
    result = 'Змінні задані не вірно';
}

console.log(result);
/* Завдання 4:*/
/* Завдання 5:*/
let num = prompt('Оцените фильм "Титаник" от 1 до 5');

let result;

switch(num) {
    case '1':
        result = 'Зима';
        break;
    case '2':
        result = 'Весна';
        break;
    case '3':
        result = 'Літо';
        break;
    case '4':
        result = 'Осінь';
        break;
    default: result = 'Пора року не визначена';
}

console.log(result);
/* Завдання 5:*/
/* Завдання 6:*/
let login = prompt('Введіть свій логін');
let password = prompt('Введіть свій пароль');

if (login == 'ivan' && password == 333) {
    console.log('Ласкаво просимо');
} else if (login == 'ssss' && password == 666) {
    console.log('Ласкаво просимо');
} else if (login == 'gibs' && password == 0000) {
    console.log('Ласкаво просимо');
} else {
    console.log('Користувач не знайдений');
}
/* Завдання 6:*/
/* Завдання 7:*/
let userAge = prompt('Введіть свій вік');

let userResult = (userAge >= 21) ? "You may enter" :
    "You may not enter";

console.log(userResult);
/* Завдання 7:*/
/* Завдання 8:*/
let num1 = Number(prompt('Введіть число'));
let num2 = Number(prompt('Введіть число'));
let num3 = Number(prompt('Введіть число'));

let maxValue;

if (num1 > num2 && num2 > num3) {
    maxValue = num1;
    console.log(maxValue);
} else if (num1 < num2 && num2 > num3) {
    maxValue = num2;
    console.log(maxValue);
} else if (num1 < num2 && num2 < num3) {
    maxValue = num3;
    console.log(maxValue);
} else if (num1 === num2 && num2 === num3) {
    console.log('Всі числа рівні');
}
/* Завдання 8:*/
/* Завдання 9:*/
let num1 = Number(prompt('Введіть число'));
let num2 = Number(prompt('Введіть число'));
let num3 = Number(prompt('Введіть число'));

let maxValue = num1;
let minValue = num2;

if (num2 < minValue) {
    minValue = num2;
} if (num3 < minValue) {
    minValue = num3;
} if (num2 > maxValue) {
    maxValue = num2;  
} if (num3 > maxValue) {
    maxValue = num3;
} if (num1 === num2 && num2 === num3) {
    console.log('Всі числа рівні');
}

console.log(minValue, maxValue);
/* Завдання 9:*/
/* Завдання 10:*/
let rating = Number(prompt('Введіть число'));
let mark;

if (rating >= 10) {
    mark = 5;
    console.log(mark);
} else if (rating >= 7 && rating <= 9){
    mark = 4;
    console.log(mark);
} else if (rating >= 5 && rating <= 6) {
    mark = 3;
    console.log(mark);
} else if (rating >= 3 && rating < 5) {
    mark = 2;
    console.log(mark);
} else if (rating <= 2) {
    mark = 1;
    console.log(mark);
}  else {
    console.log('Вибачте оцінка поставлена не вірно');
}
/* Завдання 10:*/