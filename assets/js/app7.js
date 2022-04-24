
  let a = +prompt('Число a');

  console.log(`Число a: ${a}`);
  
  let numerator = a ** 2 + 10;

  console.log(`Числитель: ${numerator}`);

  let denominator = a ** 2 + 1;

  console.log(`Знаменатель: ${denominator}`);

  let sqrDenominator = Math.sqrt(denominator);

  console.log(`Корень из знаменателя: ${sqrDenominator}`);

  let y = numerator / sqrDenominator;

  console.log(`Число y: ${y}`);