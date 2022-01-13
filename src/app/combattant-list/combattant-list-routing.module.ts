import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombattantListPage } from './combattant-list.page';

const routes: Routes = [
  {
    path: '',
    component: CombattantListPage
  },
  {
    path: 'nouveau',
    loadChildren: () => import('./combattant-new/combattant-new.module').then( m => m.CombattantNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./combattant/combattant.module').then( m => m.CombattantPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombattantListPageRoutingModule {}
