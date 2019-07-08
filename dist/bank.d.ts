import { BankNumber } from './bankNumber';
export declare class Bank {
  readonly bankId: number;
  readonly name: string;
  readonly bankNumbers: BankNumber[];
  static readonly values: Bank[];
  static anz: Bank;
  static readonly Asb: Bank;
  static readonly Bnz: Bank;
  static readonly Citibank: Bank;
  static readonly Hsbc: Bank;
  static readonly BankOfChina: Bank;
  static readonly Kiwibank: Bank;
  static readonly Tsb: Bank;
  static readonly Westpac: Bank;
  static readonly Other: Bank;
  static isBankNumberValid(bankId: number, bankNumber: number): boolean;
  static isBranchNumberValid(bankId: number, bankNumber: number, branchNumber: number): boolean;
  static isAccountNumberValid(
    bankId: number,
    bankNumber: number,
    branchNumber: number,
    accountNumber: number,
    suffix: number,
  ): boolean;
  static isBankAccountNumberValid(bankId: number, bankAccount: string): boolean;
  static getBank(bankId: number): Bank | undefined;
  private static getFormattedBankAccount;
  private internalBankId;
  private internalName;
  private internalBankNumbers;
  constructor(bankId: number, name: string, bankNumbers: BankNumber[]);
  private isBankNumberValid;
  private isBranchNumberValid;
  private getBankNumber;
}
