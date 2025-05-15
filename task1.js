// === Помощник по выбору топлива ===
// Цель: написать функцию, которая по типу двигателя и бюджету выдает рекомендацию по топливу.

// Подсказка по логике:

// Тип двигателя: "бензин"
// - если бюджет меньше 3000: рекомендовать 92-й бензин, без добавок
// - если от 3000 до 4999: рекомендовать 95-й бензин, можно добавить простую присадку
// - если от 5000 и выше: рекомендовать 98-й бензин + комплексная присадка

// Тип двигателя: "дизель"
// - если бюджет меньше 3000: обычный дизель, без добавок
// - от 3000 до 4999: улучшенный дизель (летний/зимний — по сезону)
// - от 5000 и выше: премиальный дизель + антигель и очистка форсунок

// Тип двигателя: "гибрид"
// - при любом бюджете: 95-й бензин
// - если бюджет больше 4000: можно добавить очиститель топливной системы

// Если тип двигателя не распознан — вернуть сообщение об ошибке

// Ниже заготовка функции. Вместо return "" напиши свою логику с условиями if / else if / else.

// const expr = "Oranges";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }



function recommendFuel(engineType, budget) {
  let defaultGasoline = '92-й бензин, без добавок'
  let normalGasoline = '95-й бензин, можно добавить простую присадку'
  let premiumGasoline = '98-й бензин + комплексная присадка'
  let defaultDiesel = 'обычный дизель, без добавок'
  let normalDiesel = 'улучшенный дизель'
  let premiumDiesel = 'премиальный дизель + антигель и очистка форсунок'
  let result

  switch (engineType) {
    case "бензин":
      if (budget < 3000) {
        result = defaultGasoline
      } else if (budget > 3000 && budget <= 4999) {
        result = normalGasoline
      } else if (budget > 5000) {
        result = premiumGasoline
      }
      break;
    case "дизель":
      if (budget < 3000) {
        result = defaultDiesel
      } else if (budget > 3000 && budget <= 4999) {
        result = normalDiesel
      } else if (budget >= 5000) {
        result = premiumDiesel
      }
      break;
    case "гибрид":
      if (budget > 4000) {
        result = `${normalGasoline}, можно добавить очиститель топливной системы`
      } else if (budget < 4000) {
        result = normalGasoline
      }
      break;
    default: result = 'Неизвестеный тип двигателя'
  }

  return result;
}

// Пример вызова функции:
const userName = "Никита";

// Протестируй с разными типами двигателя и бюджетом
const result1 = recommendFuel("бензин", 2500);
const result2 = recommendFuel("дизель", 4800);
const result3 = recommendFuel("гибрид", 5500);
const result4 = recommendFuel("электро", 10000); // неизвестный тип

// Вывод результатов
result = (`${userName}, вот что я рекомендую: ${result1}`);
console.log(result);
result = (`${userName}, вот что я рекомендую: ${result2}`);
console.log(result);
result = (`${userName}, вот что я рекомендую: ${result3}`);
console.log(result);
result = (`${userName}, вот что я рекомендую: ${result4}`);
console.log(result);
