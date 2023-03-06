import { ComponentsModule } from './../../shared/components/components.module';
import { CooperativeSearchModule } from './../../components/cooperative-search/cooperative-search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionComponent } from './admission.component';
import { AdmissionRountingModule } from './admission-rounting.module';



@NgModule({
  declarations: [
    AdmissionComponent
  ],
  imports: [
    CommonModule,
    CooperativeSearchModule,
    ComponentsModule,
    AdmissionRountingModule
  ],
  exports: [
    AdmissionComponent
  ]
})
export class AdmissionModule { }
