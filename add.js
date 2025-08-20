function addAndSubtract(amount, balance) {
    return {
        added: amount + balance,
        subtracted: balance - amount
    };
}
module.exports = { addAndSubtract };
