import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombattantNewPageRoutingModule } from './combattant-new-routing.module';

import { CombattantNewPage } from './combattant-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombattantNewPageRoutingModule
  ],
  declarations: [CombattantNewPage]
})
export class CombattantNewPageModule {}
