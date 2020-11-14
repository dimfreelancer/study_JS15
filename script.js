'use script';

/**
Урок №7
Знакомимся с объектами и массивами, методы переборов и псевдомассивы
    ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 
*/

console.log('Урок 7 Знакомимся с объектами и массивами, методы переборов и псевдомассивы');

let isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

let money;
const start = function() {
    do {
        money = prompt('Ваш месячный доход?'); //Спрашиваем у пользователя “Ваш месячный доход?”
        console.log('money: ', money);
    } 
    while (!isNumber(money));
    //проверка является ли введенное пользователем числом
}
start();




//заведем наш объект
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
};



// 2) В объект appData добавить свойство budget которое будет принимать значение money
// 3) В объект appData добавить свойства budgetDay, budgetMonth и expensesMonth, изначально равные нулю
// 4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData

// let money,
//     income = 'Фриланс', //строка с доходом
//     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Бензин, коммунальные платежи, лицензионное ПО'), //строка с перечислением дополнительных расходов через запятую 
//     deposit = confirm('Есть ли у вас депозит в банке?'), //любое булево значение
//     mission = 50000, //любое число Какую сумму хочу накопить за данный период
//     period = 3; //период достижения денежной цели;

// let expenses = []; // вместо этого записываем в массив статьи расходов




const getExpensesMonth = function() {
    let question, sum = 0;
    for (let i = 0; i < 2; i++) {
        appData.expenses[i] = prompt('Введите обязательную статью расходов?'); // !!на самом деле объект!!
        do {
            question = prompt('Во сколько это обойдется?');
            console.log('question: ', question);
        }
        while (!isNumber(question));//проверяем что ввели число
        
        sum += parseFloat(question);//суммарный расход
    }
    
    return sum; //вывод суммарного расхода в месяц
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц:', expensesAmount);

// Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function() {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth(); // == money - (amount1 + amount2) == бюджет это накопленная сумма за месяц 

// getTargetMonth Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
//число от 1 до 12 месяцев за сколько месяцев будет достигнута
const getTargetMonth = function() {
    return Math.ceil(appData.mission / accumulatedMonth);
};

let budgetDay = accumulatedMonth / 30;



// console.log(addExpenses.toLowerCase().split(', ')); //Вывод возможных расходов в виде массива (addExpenses)

appData.period = getTargetMonth();
//3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
if (appData.period > 0) {
    console.log('Цель будет достигнута', getTargetMonth(), 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}

console.log('Цель заработать ' + appData.mission + ' рублей/долларов/гривен/юани');

console.log('Бюджет на месяц:', accumulatedMonth);

console.log('Бюджет на день:', Math.floor(budgetDay)); //округляем до меньшего при выводе



//сделали ЧИСТУЮ функцию
const getStatusIncome = () => {
    if (budgetDay >= 1200) {
        return 'У вас высокий уровень дохода';
    } else if (budgetDay >= 600) {
        return 'У вас средний уровень дохода';
    } else if (budgetDay > 0) {
        return 'К сожалению у вас уровень дохода ниже среднего. ' +
                'Следует серьезно отнестись к своему планированию';
    } else {
        return 'Остается бюджет 0 или ниже';
    };
};

console.log(getStatusIncome());
