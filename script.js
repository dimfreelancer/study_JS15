'use script';

/**
Урок №4
    Все о функциях, callback - функции
    ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 
*/

console.log('Это первый Урок 4 Домашка Обязательное задание');


let money,  //доход в месяц
    income = 'Фриланс', //строка с доходом
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Бензин, коммунальные платежи, лицензионное ПО'), //строка с перечислением дополнительных расходов через запятую 
    deposit = confirm('Есть ли у вас депозит в банке?'), //любое булево значение
    mission = 120000, //любое число Какую сумму хочу накопить за данный период
    period; //период достижения денежной цели

const start = function() {

    money = prompt('Ваш месячный доход?', 60000); //Спрашиваем у пользователя “Ваш месячный доход?”
}

start();

const showTypeOf = (data) => console.log(data, typeof data);


//////ВОЗМОЖНО ЦИКЛ ВВОДА ДАННЫХ расходов - перенести в функцию и оформить в виде цикла
let expenses1 = prompt('Введите обязательную статью расходов?', 'Покупка стиральной машины');
let amount1 = +prompt('Во сколько это обойдется?', 20000);

let expenses2 = prompt('Еще раз Введите обязательную статью расходов?', 'Оплата обучения');
let amount2 = +prompt('Еще раз Во сколько это обойдется?', 13700);
/////////////////////////////////////////


//Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = function() {
    return amount2 + amount2;
}

// Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function() {
    return money - getExpensesMonth();
}

let accumulatedMonth = getAccumulatedMonth(); // == money - (amount1 + amount2) == бюджет это накопленная сумма за месяц 

//Объявить функцию getTargetMonth. 
//Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
//число от 1 до 12 месяцев за сколько месяцев будет достигнута
const getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth);
}


let budgetDay = accumulatedMonth / 30;
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log('Расходы за месяц составляют:', getExpensesMonth());

console.log(addExpenses.toLowerCase().split(', ')); //Вывод возможных расходов в виде массива (addExpenses)

console.log('Срок достижения цели равен', getTargetMonth(), 'месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

console.log('Бюджет на месяц:', accumulatedMonth);

console.log('Бюджет на день:', Math.floor(budgetDay)); //округляем до меньшего при выводе


//сделали ЧИСТУЮ функцию
const getStatusIncome = () => {
    if (budgetDay >= 1200) {
        return 'У вас высокий уровень дохода';
    } else if (budgetDay >= 600) {
        return 'У вас средний уровень дохода';
    } else if (budgetDay > 0) {
        return 'К сожалению у вас уровень дохода ниже среднего. ' 
                + 'Следует серьезно отнестись к своему планированию';
    } else {
        return 'Остается бюджет 0 или ниже';
    };
};

console.log(getStatusIncome());
