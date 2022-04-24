
  let aSide = +prompt('Катет a');

  console.log(`Катет a: ${aSide}`);

  let bSide = +prompt('Катет b');

  console.log(`Катет b: ${bSide}`);

  let sum = aSide ** 2 + bSide ** 2;

  console.log(`Сумма квадратов катетов: ${sum}`);

  let hypotenuse = Math.sqrt(sum);

  console.log(`Гипотенуза: ${hypotenuse}`);