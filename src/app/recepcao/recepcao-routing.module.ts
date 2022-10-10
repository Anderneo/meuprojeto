import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepcaoPage } from './recepcao.page';

const routes: Routes = [
  {
    path: '',
    component: RecepcaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepcaoPageRoutingModule {}
