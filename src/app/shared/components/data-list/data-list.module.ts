import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [
    DataListComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    DataListComponent
  ]
})
export class DataListModule { }
