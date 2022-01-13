import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombattantListPageRoutingModule } from './combattant-list-routing.module';

import { CombattantListPage } from './combattant-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombattantListPageRoutingModule
  ],
  declarations: [CombattantListPage]
})
export class CombattantListPageModule {}
