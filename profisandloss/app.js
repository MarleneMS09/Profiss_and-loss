//Income
var income = prompt ("¿How much is the income?"); //400
//Cost
var costs = prompt ("¿How much is the cost?"); //65
//Percent of taxation
var taxPercent= prompt ("¿How much is the tax rate ?"); 18
var grossProfit = income-costs; //gross profit
//Obteined amount of tax
var tax = grossProfit*taxPercent/100; //60.3
//Net income
var netIncome =grossProfit-tax;
//Showing Net Income
document.write ("Your net income is $" + netIncome); 