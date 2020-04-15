//1
let first1 = +prompt("Введіть початок діапозону:");
let last1 = +prompt("Введіть кінець діапозону:");
let sum1 = 0;
while (first1 <= last1) {
  sum1 += first1;
  first1++;
}
alert(sum1);
//2
let first2 = +prompt("Введіть перше число:");
let second2 = +prompt("Введіть друге число:");
while (first2 != 0 && second2 != 0) {
  if (first2 > second2) first2 = first2 % second2;
  else second2 = second2 % first2;
}

let result2 = first2 + second2;
alert(result2);
//3
let number3 = Number(prompt("Введіть число", " "));

for (i = 0; i < number3; i++) {
  if (number3 % i == 0) {
    console.log("Дільники: " + i);
  }
}
//4
let number4 = prompt("Введіть число:");
let count4 = 0;

while (number4 >= 1) {
  number4 /= 10;
  count4++;
}
alert(count4);
//5
//6

let number1_6 = +prompt("Введіть будь-яке число:");
let number2_6 = +prompt("Введіть ще одне число:");
let symbol = prompt("Вкажіть операцію(знак):");
while (true) {
  switch (symbol) {
    case "+": {
      alert(number1_6 + number2_6);
    }
    case "-": {
      alert(number1_6 - number2_6);
      break;
    }
    case "*": {
      alert(number1_6 * number2_6);
      break;
    }
    case "/": {
      alert(number1_6 / number2_6);
      break;
    }
  }
}
question = confirm("Ще раз?");

//7

let stroke7 = prompt("Введіть число:");
let n = prompt("На скільки цифр його зрушити?");

alert(stroke7.substring(n) + stroke7.substring(0, n));
//8
let day = new Array(
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
  "Неділя"
);
let nextDay = true;

for (let i = 0; nextDay == true; i++) {
  alert(day[i]);
  nextDay = confirm("Хочете побачити наступний день?");
}
//9
for (var i = 2; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}
//10
