
  let number = +prompt('Количество жителей');

  console.log(`Количество жителей: ${number}`);

  let landArea = +prompt('Площадь территории (в км2)');

  console.log(`Площадь территории: ${landArea} км2`);

  let populationDensity = number / landArea;

  console.log(`Плотность населения: ${populationDensity}`);