"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("./bank");
__export(require("./bank"));
function isValid(bankAccount) {
    const isValidBankAccount = bank_1.Bank.isValid(bankAccount);
    return isValidBankAccount;
}
exports.isValid = isValid;
function isBankAccountValid(bankId, bankNumber, branchNumber, accountNumber, suffix) {
    const isValidBankAccount = bank_1.Bank.isAccountNumberValid(bankId, bankNumber, branchNumber, accountNumber, suffix);
    return isValidBankAccount;
}
exports.isBankAccountValid = isBankAccountValid;
function isBankAccountNumberValid(bankId, bankNumber) {
    const isValidBankAccount = bank_1.Bank.isBankAccountNumberValid(bankId, bankNumber);
    return isValidBankAccount;
}
exports.isBankAccountNumberValid = isBankAccountNumberValid;
