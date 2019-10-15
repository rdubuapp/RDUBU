import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListanswerDetailPage } from './listanswer-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ListanswerDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListanswerDetailPage]
})
export class ListanswerDetailPageModule {}
