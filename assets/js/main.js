/* Завдання 1:*/
// function week(number) {
//     let message = +prompt('Введіть цифру від 1 до 7');
//     if (message) {
//         let weekDay;

//         switch(message) {
//             case 1 : weekDay = 'Понеділок'; break;
//             case 2 : weekDay = 'Вівторок'; break;
//             case 3 : weekDay = 'Середа'; break;
//             case 4 : weekDay = 'Четвер'; break;
//             case 5 : weekDay = 'П\'ятниця'; break;
//             case 6 : weekDay = 'Субота'; break;
//             case 7 : weekDay = 'Неділя'; break;
//             default: weekDay = `День тижня не визначений ${message}!`;
//         }

//         console.log(`Сьогодні ${message} день тижня - ${weekDay}`);
//     } else {
//         console.log('Ви не ввели день, або ввели не вірно !');
//     }
// }

// week();
// week();
// week();
// week();
// week();
// week();
// week();
// week();
/* Завдання 1:*/
/* Завдання 2:*/
// let num = Number(prompt('Введіть довільне число'));

// function integer(number) {
//     if (num === parseInt(num)) {
//         let message = 'Це число ціле';
//         console.log(`${message}`);
//     } else {
//         let message = 'Це число дробове';
//         console.log(`${message}`);
//     }
// }

// integer();
/* Завдання 2:*/
/* Завдання 3:*/
// let numeric = Number(prompt('Введіть довільне число'));
// let power = Number(prompt('Введіть довільне число'));

// function degree(num1, num2) {
//     let result = numeric ** power;
//     console.log(`Якщо число ${numeric} привести до степеню ${power} вийде такий результат ${result}`);
// }

// degree();
/* Завдання 3:*/
/* Завдання 4:*/
// let a = Number(prompt('Введіть довільне число'));
// let b = Number(prompt('Введіть довільне число'));

// let message;

// function divisions(num1, num2) {
//     if (a % b === 0) {
//         let message = 'Остачі не має';
//         console.log(`${message}`);
//     } else {
//         let message = 'Є остача';
//         console.log(`${message}`);
//     }
// }

// divisions();
/* Завдання 4:*/
/* Завдання 5:*/
// function getRandom(number) {
//     return Math.random();
// }
// console.log(getRandom());

// getRandom();
// console.log(getRandom());
/* Завдання 5:*/
/* Завдання 6:*/
// function isYearLeap(year) {
//     if (year % 400 === 0) {
//         return true;
//     } else if (year % 100 === 0) {
//         return false;
//     } else if (year % 4 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log( isYearLeap(2000) ); //true
// console.log( isYearLeap(1200) ); //true
// console.log( isYearLeap(400) ); //true

// console.log( isYearLeap(1500) ); //false
// console.log( isYearLeap(1300) ); //false
// console.log( isYearLeap(1100) ); //false
/* Завдання 6:*/
/* Завдання 7:*/
// function bank(n, year) {
//     const rate = 1.1;
//     return n * (year ** rate);
// }

// const result = bank(
//     +prompt('Введіть суму коштів'),
//     +prompt('Введіть кількість років')
// );

// console.log(result);
/* Завдання 7:*/
/* Завдання 8:*/
const TRIANGLE = 'TRIANGLE';
const RECTANGLE = 'RECTANGLE';
const CIRCLE = 'CIRCLE';

function triangleSquare(a, b, c) {
    const p = 0.5 * (a + b +c);
    return Math.sqrt (p * (p - a) * (p - b) * (p - c));
}

function rectangleSquare(a, b) {
    return a * b;
}

function circleSquare(r) {
    return Math.PI * r ** 2;
}

function calculateSquare () {
    const figure = prompt('Figure type');

    switch (figure) {
        case TRIANGLE: return triangleSquare(
            +prompt('a'),
            +prompt('b'),
            +prompt('c'),
        );
        case RECTANGLE: return rectangleSquare(
            +prompt('a'),
            +prompt('b'),
        );
        case CIRCLE: return circleSquare(
            +prompt('r'),
        );
        default: return null;
    }
}

console.log( calculateSquare() );
/* Завдання 8:*/