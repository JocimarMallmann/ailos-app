import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  declarations: [
    NavListComponent
  ],
  exports: [
    NavListComponent
  ]
})
export class NavListModule { }
