// a, b, c это параметры
// const add = function (a, b, c) {
//   return a + b + c;
// };

// // 1, 2, 3 это аргументы
// const result = add(1, 2, 3);
// console.log(result); // 6

// // 5, 10, 15 это аргументы
// console.log(add(5, 10, 15)); // 30
//-----
// const fnA = function () {
//   console.log("Начала выполняться [fnA]");
//   fnB();
//   console.log("Продолжила выполняться [fnA] после выхода из [fnB]");
// };

// const fnB = function () {
//   console.log("Выполняется [fnB]");
// };

// console.log("Начал выполнение [main]");
// fnA();
// console.log("Продолжил выполняться [main] после выхода из [fnA]");

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */
//-------

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(); // countFrom = 0, countTo = 10, step = 1
//------

// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15
//-----
// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля.");
//   } else if (amount > balance) {
//     console.log("Недостаточно средств на счету.");
//   } else {
//     console.log("Операция снятия средств проведена.");
//   }
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

//------
// const withdraw = function (amount, balance) {
//   /*
//    * Проверяется условие. Если оно выполняется, происходит
//    * console.log и выход из функции. Код идущий после тела if
//    * не выполнится.
//    */
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля.");
//     return;
//   }

//   /*
//    * Если условие первого if не выполнилось, его тело пропускается
//    * и интерпретатор доходит до этого if.
//    * Проверяется условие. Если оно выполняется, происходит
//    * console.log и выход из функции. Код идущий после тела if
//    * не выполнится.
//    */
//   if (amount > balance) {
//     console.log("Недостаточно средств на счету.");
//     return;
//   }

//   /*
//    * Если ни один из предыдущих if не выполнился,
//    * интерпретатор доходит до этого кода и выполняет его.
//    */
//   console.log("Операция снятия средств проведена.");
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

//------

// add(1, 2, 3); // 6
// print("text"); // text

// function add(a, b, c) {
//   return a + b + c;
// }

// function print(str) {
//   console.log(str);
// }

//-----

// const b = 10;

// const add = function () {
//   const a = 5;

//   return a + b;
// };

// console.log(add()); // 15

//-----
// const value = 50;

// const add = function (num) {
//   const value = 10;
//   const innerValue = 5;

//   return num + value + innerValue;
// };

// // value объявлен глобально и поэтому доступен
// console.log(value); // 50

// console.log(add(20)); // 35

// // Ошибка, переменная innerValue не объявлена в этой области
// // видимости, она доступна только внутри фукции add
// console.log(innerValue);

// //-------
// // console.log('Этого сообщения не будет в консоли.');

// // cos value = 5;
