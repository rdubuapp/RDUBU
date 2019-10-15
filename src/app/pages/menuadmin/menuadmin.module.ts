import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuadminPage } from './menuadmin.page';

const routes: Routes = [
  { path: '', redirectTo: '/menuadmin/admin', pathMatch: 'full' },
  {
    path: '',
    component: MenuadminPage,
    children: [
      { path: 'admin', loadChildren: '../admin/admin.module#AdminPageModule' },
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' }
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuadminPage]
})
export class MenuadminPageModule { }
