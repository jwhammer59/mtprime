import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardModule } from 'src/app/core/standard.module';
import { FamilyIdRoutingModule } from './family-id-routing.module';
import { FamilyIdComponent } from './family-id/family-id.component';
import { AddFamilyIdComponent } from './family-id/add-family-id/add-family-id.component';
import { EditFamilyIdComponent } from './family-id/edit-family-id/edit-family-id.component';
import { DeleteFamilyIdComponent } from './family-id/delete-family-id/delete-family-id.component';
import { DetailFamilyIdComponent } from './family-id/detail-family-id/detail-family-id.component';

import { TableModule } from '../table-mod/table.module';

@NgModule({
  declarations: [
    FamilyIdComponent,
    AddFamilyIdComponent,
    EditFamilyIdComponent,
    DeleteFamilyIdComponent,
    DetailFamilyIdComponent,
  ],
  imports: [CommonModule, FamilyIdRoutingModule, StandardModule, TableModule],
})
export class FamilyIdModule {}
