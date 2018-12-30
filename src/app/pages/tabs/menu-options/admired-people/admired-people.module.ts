import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmiredPeoplePage } from './admired-people.page';

const routes: Routes = [
  {
    path: '',
    component: AdmiredPeoplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmiredPeoplePage]
})
export class AdmiredPeoplePageModule {}
