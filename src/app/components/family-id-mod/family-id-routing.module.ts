import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Family ID Coomponents
import { FamilyIdComponent } from './family-id/family-id.component';
import { AddFamilyIdComponent } from './family-id/add-family-id/add-family-id.component';
import { EditFamilyIdComponent } from './family-id/edit-family-id/edit-family-id.component';
import { DetailFamilyIdComponent } from './family-id/detail-family-id/detail-family-id.component';

const routes: Routes = [
  { path: '', component: FamilyIdComponent },
  { path: 'add-family-id', component: AddFamilyIdComponent },
  { path: 'edit-family-id/:id', component: EditFamilyIdComponent },
  { path: 'detail-family-id/:id', component: DetailFamilyIdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyIdRoutingModule {}
