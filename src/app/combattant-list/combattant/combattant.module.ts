import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombattantPageRoutingModule } from './combattant-routing.module';

import { CombattantPage } from './combattant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombattantPageRoutingModule
  ],
  declarations: [CombattantPage]
})
export class CombattantPageModule {}
