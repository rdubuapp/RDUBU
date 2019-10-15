import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListanswerAdminPage } from './listanswer-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ListanswerAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListanswerAdminPage]
})
export class ListanswerAdminPageModule {}
