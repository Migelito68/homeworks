function solveEquation(a, b, c) {
  let arr;
  "use strict";
  let d = b ** 2 - 4 * a * c;
  switch (d) {
    case 0: arr = [(-b / (2 * a))];
      break;

    default: if (d < 0) {
      arr = [];
    } else {
      arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
    }
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  "use strict";

  let now = new Date();
  
  if (isNaN(percent) || percent < 0) {
    return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  } else if (isNaN(contribution)) {
    return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } else if (isNaN(amount)) {
    return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  } else if (now > date) {
    return(`Параметр "Срок ипотеки" содержит неправильное значение "${date}"`);
  } else {
    let n = (date.getFullYear() - now.getFullYear()) * 12 - date.getMonth() + now.getMonth();
    let s = amount - contribution;
    let p = percent / 1200;
    let payment = s * (p + (p / (((1 + p)**n) - 1)));
    totalAmount = Math.round(n * payment*100)/100;
  }
  
  // код для задачи №2 писать здесь

  return totalAmount;
}
