import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  balance: string;
  constructor(public loadingController: LoadingController, private app: AppStateService) { }

  ngOnInit() {
  }

  async getBalance1() {
    const loading = await this.loadingController.create({
      message: 'loading...',
      duration: 2000
    });
    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.balance = 'Rs 50000';
    }, 500);
  }

  async getBalance() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.app.getBalance().then(
      r => {
        loading.dismiss();
        this.balance = 'Rs ' + r;
      }
    );
  }
}
