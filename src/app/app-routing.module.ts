import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'account-info', loadChildren: './account-info/account-info.module#AccountInfoPageModule' },
  { path: 'fund-transfer', loadChildren: './fund-transfer/fund-transfer.module#FundTransferPageModule' },
  { path: 'account-statement', loadChildren: './account-statement/account-statement.module#AccountStatementPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
