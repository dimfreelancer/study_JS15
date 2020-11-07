'use script';

/**
Урок №3
Динамическая типизация данных в Javascript.Все об условиях
ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ: 
1) Весь функционал что был ранее оставляем, если что то необходимо удалить, об этом будет написано в задании
2) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
3) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит")
4) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
    “Введите обязательную статью расходов?” (например expenses1, expenses2)
    “Во сколько это обойдется?” (например amount1, amount2)
    в итоге 4 вопроса и 4 разные переменных
6) Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль
7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону 
9) Написать конструкцию условий (расчеты приведены в рублях)	
    Если budgetDay больше 1200, то “У вас высокий уровень дохода”
    Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
    Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
    Если отрицательное значение то вывести “Что-то пошло не так”
    Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
10) Проверить, чтобы все работало и не было ошибок в консоли
11) Добавить папку с третьим уроком в свой репозиторий на GitHub
Примерный результат в консоли:

let money = 57000; //любое число “Доход за месяц”
let income = 'Фриланс, Офисная работа'; //строка с дополнительными доходом
//строка с перечислением дополнительных расходов через запятую 
let addExpenses = 'ИтерНет, Такси, коМуналка, ПИТАНИЕ, Транспортные расходы'; 
let deposit = true; //любое булево значение
let mission = 60000; //любое число Какую сумму хочу накопить за данный период
let period = 2; //число от 1 до 12 месяцев
*/

console.log('Это первый Урок 3 Домашка Обязательное задание');


let money = +prompt('Ваш месячный доход?', 100000); //Спрашиваем у пользователя “Ваш месячный доход?”
// console.log('money: ', money);
let income = 'Фриланс, Офисная работа, Подработки, Системное администрирование'; //строка с доходом
// console.log('income: ', income);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит'); //строка с перечислением дополнительных расходов через запятую 
// console.log('addExpenses: ', addExpenses);
let deposit = confirm('Есть ли у вас депозит в банке?'); //любое булево значение
// console.log('deposit: ', deposit);


//////ВОЗМОЖНО ЦИКЛ ВВОДА ДАННЫХ
let expenses1 = prompt('Введите обязательную статью расходов?', 'Покупка стиральной машины');
let amount1 = +prompt('Во сколько это обойдется?', 20000);
// console.log(`${expenses1} обойдется в ${amount1} рублей в этом месяце`);

let expenses2 = prompt('Еще раз Введите обязательную статью расходов?', 'Оплата обучения');
let amount2 = +prompt('Еще раз Во сколько это обойдется?', 30000);
// console.log(`${expenses2} обойдется в ${amount2} рублей в этом месяце`);


//вычисляем бюджет исходя из наших расходов
let budgetMonth = money - (amount1 + amount2);
let mission = 60000; //любое число Какую сумму хочу накопить за данный период
let period = Math.ceil(mission / budgetMonth); //число от 1 до 12 месяцев за сколько месяцев будет достигнута


console.log('Месячный доход money:', money, '- typeof money:', typeof money);
console.log('Виды дохода income:', income, '- typeof income:', typeof income);
console.log('Наличие депозита deposit:', deposit, '- typeof deposit:', typeof deposit);
console.log('addExpenses.length = ', addExpenses.length);
console.log(`Наша цель заработать ${mission} рублей/долларов/гривен/юани может быть достигнута за ${period} месяцев`);
console.log('addExpenses:', addExpenses.toLowerCase().split(', '));
console.log('Бюджет на месяц budgetMonth:', budgetMonth);

// let budgetDay = money / 30;
let budgetDay = budgetMonth / 30; // вычисляем бюджет на день из бюджета на месяц
console.log('Бюджет на день budgetDay: ', Math.floor(budgetDay)); //округляем до меньшего при выводе

// 9) Написать конструкцию условий (расчеты приведены в рублях)	
//     Если budgetDay больше 1200, то “У вас высокий уровень дохода”
//     Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
//     Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
//     Если отрицательное значение то вывести “Что-то пошло не так”
//     Учесть варианты 0, 600 и 1200 (к какому уровню не важно)

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
    console.log('Следует серьезно отнестись к своему планированию');
} else {
    console.log('Ой... Что-то пошло не так');
}

