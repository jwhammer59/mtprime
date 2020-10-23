import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Table Components
import { EventTableComponent } from './event-table/event-table.component';
import { VolunteerTableComponent } from './volunteer-table/volunteer-table.component';
import { FamilyIdTableComponent } from './family-id-table/family-id-table.component';

import { StandardModule } from '../../core/standard.module';

@NgModule({
  declarations: [
    EventTableComponent,
    VolunteerTableComponent,
    FamilyIdTableComponent,
  ],
  imports: [CommonModule, StandardModule],
  exports: [
    EventTableComponent,
    VolunteerTableComponent,
    FamilyIdTableComponent,
  ],
})
export class TableModule {}
