'use script';

/**
Урок №4
Все о функциях, callback - функции
ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 

1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
5) Удалить из кода переменную budgetMonth
6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
7) Почистить консоль логи и добавить недостающие, должны остаться:
- вызовы функции showTypeOf
- Расходы за месяц вызов getExpensesMonth
- Вывод возможных расходов в виде массива (addExpenses)
- Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
- Бюджет на день (budgetDay)
- вызов функции getStatusIncome
8) Проверить, чтобы все работало и не было ошибок в консоли
9) Добавить папку с четвертым уроком в свой репозиторий на GitHub
*/

console.log('Это первый Урок 4 Домашка Обязательное задание');


let money,  //доход в месяц
    income = 'Фриланс', //строка с доходом
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Бензин, коммунальные платежи, лицензионное ПО'), //строка с перечислением дополнительных расходов через запятую 
    deposit = confirm('Есть ли у вас депозит в банке?'), //любое булево значение
    mission = 120000, //любое число Какую сумму хочу накопить за данный период
    period; //период достижения денежной цели
    // period = getTargetMonth();


const start = function() {

    money = +prompt('Ваш месячный доход?', 60000); //Спрашиваем у пользователя “Ваш месячный доход?”
}

start();


const showTypeOf = (variable) => {
    console.log(typeof variable);
}



//////ВОЗМОЖНО ЦИКЛ ВВОДА ДАННЫХ
let expenses1 = prompt('Введите обязательную статью расходов?', 'Покупка стиральной машины');
let amount1 = +prompt('Во сколько это обойдется?', 20000);
// console.log(`${expenses1} обойдется в ${amount1} рублей в этом месяце`);

let expenses2 = prompt('Еще раз Введите обязательную статью расходов?', 'Оплата обучения');
let amount2 = +prompt('Еще раз Во сколько это обойдется?', 13700);
// console.log(`${expenses2} обойдется в ${amount2} рублей в этом месяце`);



//1) Объявить функцию getExpensesMonth Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = function() {
    return amount2 + amount2;
}

//2) Объявить функцию getAccumulatedMonth Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function() {
    // return money - (amount1 + amount2);
    return money - getExpensesMonth();
}

//3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth(); // == money - (amount1 + amount2);

/** TODO */
//4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат


const getTargetMonth = function() {
    //число от 1 до 12 месяцев за сколько месяцев будет достигнута
    return Math.ceil(mission / accumulatedMonth);
}



//5) Удалить из кода переменную budgetMonth
let budgetDay = accumulatedMonth / 30;

// console.log('Месячный доход money:', money, '- typeof money:', typeof money);
showTypeOf(money);
// console.log('Виды дохода income:', income, '- typeof income:', typeof income);
showTypeOf(income);
// console.log('Наличие депозита deposit:', deposit, '- typeof deposit:', typeof deposit);
showTypeOf(deposit);

console.log('Расходы за месяц составляют:', getExpensesMonth()); //длина строки

// console.log('addExpenses.length = ', addExpenses.length); //длина строки

console.log('Возможные рассходы', addExpenses.toLowerCase().split(', '));

console.log('Период равен', getTargetMonth(), 'месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');


console.log('Бюджет на день budgetDay: ', Math.floor(budgetDay)); //округляем до меньшего при выводе


const getStatusIncome = () => {
    if (budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay > 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
        console.log('Следует серьезно отнестись к своему планированию');
    } else {
        console.log('Остается бюджет 0 или ниже');
    };
}

getStatusIncome();
