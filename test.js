// const readLine = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// readLine.question('Введите своё имя: ', (name) => {
//     console.log(`Ваше имя: ${name}`);
//     readline.close()
// })

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// const userData = {};
//
// readline.question('Сколько километров вы проезжаете в месяц: ', (number) => {
//     userData.number = parseFloat(number);
//
    readline.question('Расход топлива автомобиля на 100км: ', (fuelCalculation) => {
        userData.fuelCalculation = parseFloat(fuelCalculation);

        readline.question('Период расчёта — с какого месяца?: ', (fromMonth) => {
            readline.question('Период расчёта — по какой месяц?: ', (toMonth) => {
                userData.period = {
                    from: fromMonth,
                    to: toMonth
                };
                console.log('Собранные данные:', userData);
                readline.close();
            });
        });
    });
});


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// const userData = {};
//
//
// readline.question('Сколько километров вы проезжаете в месяц: ', (number) => {
//     userData.number = number;
//     readline.question('Расход топлива автомобиля на 100км: ', (fuelCalculation) => {
//         userData.fuelCalculation = fuelCalculation;
//
//         readline.question('Период расчёта трат: ', (periodCalculation) => {
//             userData.period = periodCalculation;
//             console.log('Собранные данные:', userData);
//             readline.close();
//         });
//     });
// });