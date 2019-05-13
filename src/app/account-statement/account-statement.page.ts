import { AppStateService } from './../app-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.page.html',
  styleUrls: ['./account-statement.page.scss'],
})
export class AccountStatementPage implements OnInit {

  constructor(private appState: AppStateService) { }

  ngOnInit() {
  }

  get txns() {
    return this.appState.txns;
  }

}
