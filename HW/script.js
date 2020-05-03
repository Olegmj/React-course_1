'use strict'
let money, time

function start () {
    money = + prompt("Какой у вас бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""); 

    while(isNaN(money) || money == "" || money == null) {
        money = + prompt("Какой у вас бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    incom: [],
    timeData: time,
    incom: [],
    saving: true

};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется", "");
    
        if ((typeof(a))==="string" && typeof(a)!= null && (typeof(b))!= null
            && a != '' && b != '' && a.length < 50 ) {
                console.log ("done");
                appData.expenses[a] = b;
        } else {
                console.log("Плохой результат");
                i--; 
                // i = i - 1;
        }
        
    }
}
chooseExpenses();



// используем цикл while 
// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется", ""); 
//     if ((typeof(a))==="string" && typeof(a)!= null && (typeof(b))!= null
//         && a != '' && b != '' && a.length < 50 ) {
//             console.log ("done");
//             appData.expenses[a] = b;
//     } else {
//             console.log("Плохой результат");
//             i--;
//     }
//     i++
// };

// используем цикл DO 

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется", "");

//     if ((typeof(a))==="string" && typeof(a)!= null && (typeof(b))!= null
//         && a != '' && b != '' && a.length < 50 ) {
//             console.log ("done");
//             appData.expenses[a] = b;
//     } else {
//             console.log("Плохой результат");
//             i--;
//     }

//     i++

// }
// while (i < 2)


function detectDayBudjet () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay + "USD");

}

detectDayBudjet ();

function detectLevel () {
    if (appData.moneyPerDay < 100 ) {
        console.log ("Минимальный уровень достатка")
    }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Средний уровень достатка");   
    }   else if (appData.moneyPerDay > 2000) {
            console.log ("Высокий уровень остатка");
    }   else {
            console.log ("Произошла ошибка")
        
    }
}

detectLevel();


function checkSaving() {
    if (appData.saving == true) {
        let save = +prompt ("Какова сумма накоплений?"),
            percent = +prompt ("Под какой процент?");

            
        appData.monthIncome = (save/100/12*percent).toFixed(1);
        alert("Доход в месяц с депозита:" + appData.monthIncome);

    }
    
}

checkSaving();

function chooseOtpExpenses () {

    for (let i = 0; i <= 3; i++) {
        let questionOptEcpenses = +prompt ("Статья не обязательных расходов", '');
        appData.optionalExpenses = questionOptEcpenses;
    
    }
        
}
chooseOtpExpenses ();






 











