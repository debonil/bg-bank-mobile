import { Injectable } from '@angular/core';
export interface Transaction {
  srNo: number;
  time: Date;
  type: boolean;
  amount: number;
  msg: string;
}


@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  balance: number;
  txns: Transaction[] = [];

  constructor() {
    const b = localStorage.balance;
    if (b) {
      this.balance = parseInt(b, 10);
      this.txns = JSON.parse(localStorage.txns);
    } else {
      this.balance = 50000;
      localStorage.balance = this.balance;
      this.txns = [
        {
          srNo: 1,
          time: new Date('05-10-2019'),
          msg: 'Cash Deposite',
          type: true,
          amount: 50000
        },
        {
          srNo: 2,
          time: new Date('05-11-2019'),
          msg: 'Cash Withdrawal',
          type: false,
          amount: 500
        },
        {
          srNo: 3,
          time: new Date('05-11-2019'),
          msg: 'Cash Deposite',
          type: true,
          amount: 500
        },
      ];
      localStorage.txns = JSON.stringify(this.txns);
    }
  }

  getBalance(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.balance);
      }, 500);
    });
  }
  balanceTransfer(acno: number, amt: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let r = 'Insufficient Balance!!';
        if (amt < this.balance) {
          r = 'Fund transfer successful !';
          this.balance = this.balance - amt;

          localStorage.balance = this.balance;

          this.txns.push(
            {
              srNo: this.txns.length + 1,
              time: new Date(),
              msg: 'Transfer to ' + acno,
              type: false,
              amount: amt
            });
          localStorage.txns = this.txns;
        }
        resolve(r);
      }, 500);
    });
  }
}
