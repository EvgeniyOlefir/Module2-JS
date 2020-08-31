const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;

// 1 перебрать массив

// for (let i = 0; i < cart.length; i += 1) {
//   //   console.log(cart[i]);

//   total += cart[i];
// }

// console.log("Total: ", total);
//2 сделать переменную total до цикла

//3 каждый элемент приплюсовать к тотал

for (const value of cart) {
  total += value;
}

//каждый элемент массива +10%

console.log("Total: ", total);

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);
