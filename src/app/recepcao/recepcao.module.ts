import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepcaoPageRoutingModule } from './recepcao-routing.module';

import { RecepcaoPage } from './recepcao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepcaoPageRoutingModule
  ],
  declarations: [RecepcaoPage]
})
export class RecepcaoPageModule {}
