import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimeModule } from '../prime/prime.module';
import { HeaderComponent } from '../components/common/header/header.component';
import { PhonePipe } from '../pipes/phone-pipe';

@NgModule({
  declarations: [HeaderComponent, PhonePipe],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PrimeModule],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    PrimeModule,
    PhonePipe,
  ],
})
export class StandardModule {}
