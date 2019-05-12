import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.page.html',
  styleUrls: ['./fund-transfer.page.scss'],
})
export class FundTransferPage implements OnInit {

  transferAmount: number;
  acno: number;
  cacno: number;

  constructor(public loadingController: LoadingController, private app: AppStateService,
    private alert: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async presentAlert(msg) {
    const alert = await this.alert.create({
      header: 'Alert',
      /// subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  validate(): boolean {
    if (!this.acno) {
      this.presentAlert('Please enter account number > 1');
      return false;
    }
    if (!this.cacno) {
      this.presentAlert('Please enter confirm account number > 1');
      return false;
    }
    if (!this.transferAmount) {
      this.presentAlert('Please enter transfer amount more than one rupees.');
      return false;
    }
    if (this.acno !== this.cacno) {
      this.presentAlert('Benefitiary account number and confirm benefitiary account number must be same!!');
      return false;
    }
    return true;
  }
  async transfer() {
    if (this.validate()) {

      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
      this.app.transfer(this.transferAmount).then(
        r => {
          loading.dismiss();
          this.presentAlert(r).then(
            () => {
              this.navCtrl.navigateRoot('/home');
            }
          );
        }
      );
    }
  }

}
