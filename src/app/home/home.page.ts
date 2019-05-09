import { Component } from '@angular/core';
import { AppConstants } from '../app-constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public appPages = AppConstants.appPages;
}
