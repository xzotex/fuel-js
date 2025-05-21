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

// Спроси у пользователя через командную строку сколько километров он проезжает в месяц в среднем
// - потом спроси какой расход топлива на 100 км
// - дальше с какого по какой месяц произвести расчёт трат (например с декабря по март, всё включительно)
// 5. Далее посчитай и выпиши сколько пользователь будет тратить на бензин каждый месяц (например Февраль: 5000р, Март: 4000р...)

const fuelPrices = {
  "92": 52,
  "95": 57,
  "98": 65,
  "дизель": 60,
  "премиум-дизель": 68
};

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// const userData = {};
//
//
// readline.question('Сколько километров вы проезжаете в месяц: ', (numberMonth) => {
//   userData.numberMonth = parseFloat(numberMonth);
//   readline.question('Расход топлива автомобиля на 100км: ', (fuelCalculation) => {
//     userData.fuelCalculation = parseFloat(fuelCalculation);
//
//     readline.question('Период расчёта трат - с какого месяца?: ', (fromMonth) => {
//       readline.question('Период расчёта — по какой месяц?: ', (toMonth) => {
//         userData.period = {
//           from: fromMonth,
//           to: toMonth
//         };
//         console.log('Собранные данные:', userData);
//         readline.close();
//       });
//     });
//   });
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function collectUserData() {
  const userData = {};

  const distance = await askQuestion('Сколько километров вы проезжаете в месяц: ');
  userData.distance = parseFloat(distance);

  const spendFuel100 = await askQuestion('Расход топлива автомобиля на 100км: ');
  userData.spendFuel100 = parseFloat(spendFuel100);

  const fromMonth = await askQuestion('Период расчёта трат - с какого месяца?: ');
  const toMonth = await askQuestion('Период расчёта — по какой месяц?: ');
  userData.period = {
    from: parseInt(fromMonth),
    to: parseInt(toMonth)
  };

  console.log('Собранные данные:', userData);

  rl.close();
  return userData;
}

const fuelResult = (data) => {
  let price;
  let snowMonth = 0;
  let normalMonth = 0;
  snowMonth = data.period[0, 1, 11];
  price = data.distance / 100 * data.spendFuel100 * fuelPrices["95"];
  console.log(price);
}

(async () => {
  const userData = await collectUserData();
  fuelResult(userData);
})();




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
    default: result = 'Неизвестный тип двигателя'
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
