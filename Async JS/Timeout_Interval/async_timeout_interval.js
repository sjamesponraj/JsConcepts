let num1 = 100;
let num2 = 200;
let previous_Balance = 1000;
let total;

const add = () => {
  total = num1 + num2;
  console.log(total);
};

const grandTotal = () => {
  let finalTotal = total + previous_Balance;
  console.log(finalTotal);
};

// Sets Timeout & calls clearTimeout - Hence the test setTimeout doesnt execute
const time_out = () => {
  setTimeout(grandTotal, 5000);
};
time_out();
clearTimeout(time_out);
add();

// setInterval
const set_Intvl = () => {
  setInterval(grandTotal, 1000);
};

set_Intvl();
clearInterval(set_Intvl);
