/**
 * Converts currency
 * @param {number} amount 
 * @param {string} currencyCode 
 */
function currencyConverter(amount, currencyCode) {
    var rates = {
        "GBP": 0.76,
        "CAD": 1.24,
        "CNY": 6.75,
        "GHS": 4.42
    };

    return rates[currencyCode] ? (rates[currencyCode] * amount).toFixed(2) : amount;
}

module.exports = currencyConverter;