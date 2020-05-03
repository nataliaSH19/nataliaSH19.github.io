//1 Написать функцию, которая принимает 2 числа и возвращает - 1,
//     если первое меньше, чем второе  1 – если первое больше,
//         чем второе; и 0 – если числа равны.
let n1 = prompt('Enter first number');
let n2 = prompt('Enter second number');

function Numbers() {
    if (n1 < n2) {
        alert("-1");
    }
    else if (n1 > n2) {
        alert("1")
    }
    else if (n1 == n2) {
        alert("0");
    }

}
Numbers();
//2 Написать функцию, которая вычисляет факториал переданного ей числа.

let n = prompt("Enter the number to calculate the factorial");

function Factorial(n) {
    if (n == 0 || n == 1) {
        return (1);
    } else
        return (n * Factorial(n - 1));
}

alert(Factorial(n));

//3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.

function conversion(v) {
    let n1 = prompt('Enter first number');
    let n2 = prompt('Enter second number');
    let n3 = prompt('Enter third number');
    alert('Integer: ' + n1 + n2 + n3);
}

conversion();

//4Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function square(p) {
    let width = prompt('Enter width:');
    let height = prompt('Enter height:');
    let pl = width * height;
    alert('Площа прямокутника - ' + pl);
}
square();

//5 Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

let a = prompt("Введи число:  ");

function Task5(a5) {
    let result = 0;
    for (let i = 1; i < a5; i++) {
        if (a5 % i == 0) {
            result += i;
        }
    };
    if (result == a5) {
        alert(`число досконале - ${a5}`);
    } else {
        alert("число не досконале")
    }
}
Task5(a5);

//6 Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

let min = prompt("Мінімальне значення діапазону: ");
let max = prompt("Максимальне значення діапазону:  ");
function Task6(f) {
    let result = 0;
    for (let i = 1; i < f; i++) {
        if (f % i == 0) {
            result += i;
        }
    };
    if (result == f) {
        alert(`число досконале - ${f}`);
    }
};
for (var i = zna1; i <= zna2; i++) {
    Task(i);
};
Task6();

//7 Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function Task7() {
    let hours = +prompt("години");
    let minutes = +prompt("хвилини");
    let seconds = +prompt("секунди");

    hours = (!!hours) ? hours : "00";
    minutes = (!!minutes) ? minutes : "00";
    seconds = (!!seconds) ? seconds : "00";

    function Adding(a, b, c) {
        alert(`${a}:${b}:${c}`);
    }
    Adding(hours, minutes, seconds);
}
Task7();

//8 Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function Clock() {
    let hours = prompt("години:");
    let minutes = prompt("хвилини:");
    let seconds = prompt("секунди:");

    hours = (!!hours) ? hours : "00";
    minutes = (!!minutes) ? minutes : "00";
    seconds = (!!seconds) ? seconds : "00";

    function task8(a, b, c) {
        alert(`  ${(((a * 60) + (b)) * 60) + (c)} - секунд`);

    }
    task8(hours, minutes, seconds);

}
Clock();
//9-10