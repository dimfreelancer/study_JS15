'use script';

/**
Урок №5
    Все Все о циклах
    ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 

1) Переписать функцию start циклом do while
2) Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос 'Во сколько это обойдется?’ в функции  getExpensesMonth
3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
4) Проверить, чтобы все работало и не было ошибок в консоли
5) Добавить папку с уроком в свой репозиторий на GitHub
*/

console.log('Это первый Урок 5 Домашка Обязательное задание Все о циклах');


let money,
    income = 'Фриланс', //строка с доходом
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Бензин, коммунальные платежи, лицензионное ПО'), //строка с перечислением дополнительных расходов через запятую 
    deposit = confirm('Есть ли у вас депозит в банке?'), //любое булево значение
    mission = 50000, //любое число Какую сумму хочу накопить за данный период
    period = 3; //период достижения денежной цели



const start = function() {
    do {
        money = prompt('Ваш месячный доход?'); //Спрашиваем у пользователя “Ваш месячный доход?”
    } 
    //while ( isNaN(parseFloat(money)) ); //проверка является ли введенное пользователем числом
    while ( isNaN(money) || money.trim === '' || money === null )
}

start();

const showTypeOf = (data) => console.log(data, typeof data);
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1, expenses2;
let amount1, amount2;


const getExpensesMonth = function() {
    let sum = 0;

    //сначала просто организуем ввод 2 варианта расходов
    //i = 0, 1.
    for (let i = 0; i < 2; i++) {
        // МОЖНО ОРГАНИЗОВАТЬ МАССИВ
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?', 'Покупка стиральной машины');
        } else if (i === 1) {
            expenses2 = prompt('Еще раз Введите обязательную статью расходов?', 'Оплата обучения');
        };

        //суммируем
        sum += +prompt('Во сколько это обойдется?', 13700);
    };

    return sum; //вывод суммарного расхода в месяц
};

let expensesAmount = getExpensesMonth();


// Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function() {
    return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth(); // == money - (amount1 + amount2) == бюджет это накопленная сумма за месяц 

// getTargetMonth Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
//число от 1 до 12 месяцев за сколько месяцев будет достигнута
const getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth);
}

let budgetDay = accumulatedMonth / 30;


console.log('Расходы за месяц составляют:', expensesAmount);

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
