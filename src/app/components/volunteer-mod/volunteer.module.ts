import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardModule } from 'src/app/core/standard.module';
import { VolunteerRoutingModule } from './volunteer-routing.module';

// Volunteers Components
import { VolunteersComponent } from './volunteers/volunteers.component';
import { AddVolunteerComponent } from './volunteers/add-volunteer/add-volunteer.component';
import { EditVolunteerComponent } from './volunteers/edit-volunteer/edit-volunteer.component';
import { DeleteVolunteerComponent } from './volunteers/delete-volunteer/delete-volunteer.component';
import { DetailVolunteerComponent } from './volunteers/detail-volunteer/detail-volunteer.component';

import { TableModule } from 'src/app/components/table-mod/table.module';

@NgModule({
  declarations: [
    VolunteersComponent,
    AddVolunteerComponent,
    EditVolunteerComponent,
    DeleteVolunteerComponent,
    DetailVolunteerComponent,
  ],
  imports: [CommonModule, VolunteerRoutingModule, StandardModule, TableModule],
})
export class VolunteerModule {}
