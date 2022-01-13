import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path:'tab',
    component: TabPage,
    children: [
      {
        path: 'combattants',
        loadChildren:()=> import('../combattant-list/combattant-list.module').then( m => m.CombattantListPageModule)
      },
      {
        path: 'accueil',
        loadChildren:()=> import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'apropos',
        loadChildren:()=> import('../apropos/apropos.module').then( m => m.AproposPageModule)
      },
      {
        path: 'photos',
        loadChildren:()=> import('../photos/photos.module').then( m => m.PhotosPageModule)
      },
      {
        path: 'audio',
        loadChildren: () => import('../audio/audio.module').then( m => m.AudioPageModule)
      },
    ]
  },
  {
      path: '',
      redirectTo:'/tab/accueil',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
