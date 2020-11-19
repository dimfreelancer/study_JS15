'use strict';

console.log('Урок 7 Знакомимся с объектами и массивами, методы переборов и псевдомассивы');

/**
Урок №7
Знакомимся с объектами и массивами, методы переборов и псевдомассивы
ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 
*/

let money;

const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

const start = function() {
    do {
        money = prompt('Ваш месячный доход?'); //Спрашиваем у пользователя “Ваш месячный доход?”
        console.log('money: ', money);
    } 
    while (!isNumber(money));
    //проверка является ли введенное пользователем числом
};

start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},     //доходы
    addIncome: [],
    expenses: {},   //расходы
    addExpenses: [],
    expensesMonth: 0,   //расходы в месяц
    deposit: false,
    mission: 50000,
    period: 3,
    N: 2,    //количество расходов ключей в обкте appData.expenses
    asking: function() { //функция запроса пользователя
        //расходы
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', '); //array
        appData.deposit = confirm('Есть ли у вас депозит в банке?'); //boolean
        /**
         * TODO
         * сделать проверку на ОДИНАКОВОСТЬ ключей и КОРРЕКТНОСТЬ расходов строки:числа
         * Обратите внимание Если на вопрос "Введите обязательную статью расходов?" ответить 2 раза одинаково, значения свойства просто будут перезаписаны, для проверки отвечайте всегда по разному. (очень частая ошибка)
         * Проследите чтобы тип данных значения свойств были числом!
         */
        //дополнительные расходы
        let expenseKey = '';
        let expenseValue = 0; 
        for (let i = 0; i < this.N; i++) {
            expenseKey = prompt('Введите обязательную статью расходов?'); //должна быть строка
            do {
                expenseValue = prompt('Во сколько это обойдется?'); //должно быть число
            }
            while (!isNumber(expenseValue));//проверяем что ввели число
            this.expenses[expenseKey] = expenseValue; //object
        }
    },
    one: 1,
    getExpensesMonth: function() { //функиция подсчета суммарных расходов
        let sum = 0;
/**
 * 8) Переписать метод getExpensesMonth: с помощью цикла считаем сумму всех обязательных расходов и сохраняем результат в свойство expensesMonth нашего объекта
 * для того, чтобы посчитать сумму используйте цикл for in
 */
        for (let key in this.expenses) {
            sum += +this.expenses[key];
            // console.log('appData.expenses[i]: ', key);/////
        }
        this.expensesMonth = sum;
        return sum; //вывод суммарного расхода в месяц
    },//getExpensesMonth

    getBudget: function() {
/**
 * 9) getAccumulatedMonth переименовать в getBudget. Этот метод будет высчитывать значения свойств budgetMonth и budgetDay, 
 * чтобы вычислить значения используем только свойства объекта (никаких внешних переменных)
 * */        
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
/**
 * 10) В методах getTargetMonth и getStatusIncome исправить переменные, все значения получаем от нашего объекта appData
 */
        return Math.ceil(appData.mission / appData.budgetMonth);
    },
    getStatusIncome: function() {
/**
 * 10) В методах getTargetMonth и getStatusIncome исправить переменные, все значения получаем от нашего объекта appData
 *  */        
        if (this.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (this.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (this.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего. ' +
                    'Следует серьезно отнестись к своему планированию');
        } else {
            return ('Остается бюджет 0 или ниже');
        }
    }
}; //appData

// 2) В объект appData добавить свойство budget которое будет принимать значение money
// 3) В объект appData добавить свойства budgetDay, budgetMonth и expensesMonth, изначально равные нулю
// 4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData

//////////////////////////////////////////////////

// 6) Сразу после объекта выполните вызов appData.asking();

// 7) Перенести цикл из метода getExpensesMonth в метод asking, и переписать цикл таким образом чтобы результат записывался в объект  appData.expenses
// в формате:
// expenses: {
//     “ответ на первый вопрос” : “ответ на второй вопрос”,
//     “ответ на первый вопрос” : “ответ на второй вопрос”
// }

appData.asking();
appData.getExpensesMonth();
appData.getBudget();


/**
 * TODO
 * 11) Вызвать все необходимые методы после объекта, чтобы корректно считались все данные (порядок очень важен).
 * 
 * 12) В консоль вывести : 
 *     — Расходы за месяц
 *     — За какой период будет достигнута цель (в месяцах)
 *     — Уровень дохода
 * */




appData.period = appData.getTargetMonth();

console.log('Расходы за месяц:', appData.expensesMonth);
console.log(appData.getStatusIncome());
console.log('appdata', appData);

/**
 * Все остальное почистить в программе у нас всего две переменных money и appData
И две функции start и возможно isNumber

13) Используя цикл for in для объекта (appData), вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести все свойства и значения)
 */


if (appData.getTargetMonth() > 0) {
    console.log('Твоя цель будет достигнута за ', Math.ceil(appData.getTargetMonth()), 'месяцев');
} else {
    console.log('Твоя цель кажется не будет достигнута. Отрицательный бюджет');
}


console.log(appData.getStatusIncome());

for (let key in appData) {
    console.log('Наша программа включает в себя такие данные: ', key, appData[key]);
}

