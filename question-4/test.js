var currencyConverter = require('./code');

var currencies = [
    "GBP",
    "CAD",
    "CNY",
    "GHS"
];

var amount = 5; //USD

currencies.forEach(function (currency) {
    console.log(currencyConverter(amount, currency) + " " + currency);
});

