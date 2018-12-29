import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkCollectionDetailsPage } from './work-collection-details.page';

const routes: Routes = [
  {
    path: '',
    component: WorkCollectionDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkCollectionDetailsPage]
})
export class WorkCollectionDetailsPageModule {}
