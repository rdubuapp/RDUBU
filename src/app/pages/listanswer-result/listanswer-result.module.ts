import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListanswerResultPage } from './listanswer-result.page';

const routes: Routes = [
  {
    path: '',
    component: ListanswerResultPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListanswerResultPage]
})
export class ListanswerResultPageModule {}
