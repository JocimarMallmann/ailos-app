import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardComponent } from './info-card.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    InfoCardComponent
  ]
})
export class InfoCardModule { }
