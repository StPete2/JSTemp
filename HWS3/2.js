"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const salary = Number(prompt('Введите число (размер Вашей зп): '));

if (Number.isNaN(salary)) {
    console.log('Значение задано неверно');
} else {
    const salaryAfterTax = (num) => num * 0.87;
    console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTax(salary)}`);
}

/* пробовал создать и такую функцию, обе работают. */

// function salaryAfterTax(num) {
//     return num * 0.87;
// }