import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardModule } from 'src/app/core/standard.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, StandardModule],
})
export class DashboardModule {}
