let age = prompt('Який твій вік');

if (age >= 0 && age <= 2) {
    alert('Ти Дитина');
} else if (age >= 12 && age < 18) {
    alert('Ти підліток');
} else if (age >= 18 && age < 60) {
    alert('Ти дорослий');
} else if (age >= 60) {
    alert('Ти пенсіонер');
}
//2
let num = prompt('Напишіть число від 0 до 9');
if (num == 1) {
    alert('Символ - ! ');
} else
    if (num == 2) {
        alert('Символ - @ ');
    } else
        if (num == 3) {
            alert('Символ - # ');
        } else
            if (num == 4) {
                alert('Символ - $ ');
            } else
                if (num == 5) {
                    alert('Символ - % ');
                } else
                    if (num == 6) {
                        alert('Символ - ^ ');
                    } else
                        if (num == 7) {
                            alert('Символ - & ');
                        } else
                            if (num == 8) {
                                alert('Символ - * ');
                            } else
                                if (num == 9) {
                                    alert('Символ - ( ');
                                } else
                                    if (num == 0) {
                                        alert('Символ - ) ');
                                    }
//3
let number = prompt('Введіть трьохзначне число');

if (number[0] == number[1] && number[1] == number[2]) {
    alert('Всі числа однакові.');
} else if (number[0] == number[1]) {
    alert('Перша і друга цифра однакові');
} else if (number[1] == number[2]) {
    alert('Друга і третя цифра однакові');
} else if (number[0] == number[2]) {
    alert('Перша і третя цифра однакові');
} else {
    alert('Немає однакових чисел');
}
//4
let year = prompt('Введіть рік');

if (year >= 1000 && year <= 9999) {
    const whatYear = year % 4;

    if (whatYear === 0) {
        alert('Рік високосний');
    } else {
        alert('Рік не високосний');
    }
}
//5
let p = prompt(`Введіть п'ятизначне число`);

if ((p > 9999) && (p < 100000)) {
    let reverse = p.split('').reverse().join('');

    if (p == reverse) {
        alert('Це число є паліндромне');
    } else {
        alert('Це число не паліндромне');
    }
}
// Завдання 7
const amount = prompt(`Введіть суму покупки.`);

if (amount >= 200 && amount < 300) {
    alert(`Сума : ${amount - (amount * .03)} грн. Знижка - 3% Отже з вас - ${amount * .03} грн`);
} else if (amount >= 300 && amount < 500) {
    alert(`Сума :${amount - (amount * .05)} грн. Знижка -  5% Отже з вас - ${amount * .05} грн`);
} else if (amount >= 500) {
    alert(`Сума :${amount - (amount * .07)} грн. Знижка -  7% Отже з вас -${amount * .07} грн`);
}
alert('Заходьте ще :)')


// 9
let zavd1 = prompt('Рік народження Шевченка ?   1) 1832; 2) 1814; 3) 1812');
if (zavd1 == 1) {
    alert(' Не вірно ');
} else
    if (zavd1 == 2) {
        alert(' Вірно ');
    } else
        if (zavd1 == 3) {
            alert(' Не вірно ');
        }
let zavd2 = prompt('Що робить оператор інкремент ?  1) зменшує на 1; 2) збільшує на 1; 3) ділить на 1');
if (zavd2 == 1) {
    alert(' Не вірно ');
} else
    if (zavd2 == 2) {
        alert(' Вірно ');
    } else
        if (zavd2 == 3) {
            alert(' Не вірно ');
        }
let zavd3 = prompt('Що робить оператор декремент ?  1) зменшує на 1; 2) збільшує на 1; 3) ділить на 1');
if (zavd3 == 1) {
    alert(' Вірно ');
} else
    if (zavd3 == 2) {
        alert(' Не вірно ');
    } else
        if (zavd3 == 3) {
            alert(' Не вірно ');
        }
alert(' Не поганий результат :)');


//   10
let date = new Date(prompt(`Введіть дату (YYYY.MM.D)`));

date.setDate(date.getDate() + 1);
alert(date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate());