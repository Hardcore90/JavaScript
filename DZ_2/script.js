// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");
num1 === 1
  ? console.log(`${num1} равно 1`)
  : num1 < 1
  ? console.log(`${num1} меньше 1`)
  : console.log(`${num1} больше 1`);
num2 === 3
  ? console.log(`${num2} равно 3`)
  : num2 > 3
  ? console.log(`${num2} больше 3`)
  : console.log(`${num2} меньше 3`);

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
test === true ? console.log("+++") : console.log("---");

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 32;
switch (true) {
  case day > 1 && day <= 10:
    console.log("Первая декада!");
    break;
  case day > 10 && day <= 20:
    console.log("Вторая декада!");
    break;
  case day > 20 && day <= 30:
    console.log("Третья декада!");
    break;
  default:
    console.log("Ошибка!");
    break;
}

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

let num = +prompt("Введите число");
console.log(
  `В числе ${num} сотен: ${Math.trunc(
    (num / 100) % 10
  )}, десятков: ${Math.trunc((num / 10) % 10)}, единиц: ${num % 10}`
);
