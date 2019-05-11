import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  balance: number;

  constructor() {
    let b = localStorage['balance'];
    if (b) {
      this.balance = parseInt(b, 10);
    } else {
      this.balance = 50000;
      localStorage['balance'] = this.balance;
    }
  }

  getBalance(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.balance);
      }, 500);
    });
  }
  transfer(amt: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let r = 'Insufficient Balance!!';
        if (amt < this.balance) {
          r = 'Fund transfer successful !';
          this.balance = this.balance - amt;

          localStorage['balance'] = this.balance;
        }
        resolve(r);
      }, 500);
    });
  }
}
