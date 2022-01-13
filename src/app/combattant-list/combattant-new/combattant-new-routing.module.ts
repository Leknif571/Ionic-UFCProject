import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombattantNewPage } from './combattant-new.page';

const routes: Routes = [
  {
    path: '',
    component: CombattantNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombattantNewPageRoutingModule {}
