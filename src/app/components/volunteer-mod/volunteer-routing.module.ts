import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVolunteerComponent } from './volunteers/add-volunteer/add-volunteer.component';
import { DetailVolunteerComponent } from './volunteers/detail-volunteer/detail-volunteer.component';
import { EditVolunteerComponent } from './volunteers/edit-volunteer/edit-volunteer.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

const routes: Routes = [
  { path: '', component: VolunteersComponent },
  { path: 'add-volunteer', component: AddVolunteerComponent },
  { path: 'edit-volunteer/:id', component: EditVolunteerComponent },
  { path: 'detail-volunteer/:id', component: DetailVolunteerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerRoutingModule {}
