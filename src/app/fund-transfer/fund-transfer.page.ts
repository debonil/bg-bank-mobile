import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.page.html',
  styleUrls: ['./fund-transfer.page.scss'],
})
export class FundTransferPage implements OnInit {

  constructor(public loadingController: LoadingController, private app: AppStateService) { }

  ngOnInit() {
  }

  async transfer() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      alert('Fund transfer successful !');
    }, 500);
  }
}
