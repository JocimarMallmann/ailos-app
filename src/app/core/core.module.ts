import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { IconsModule } from './../icons/icons.module';

const MODULES = [ IconsModule, HeaderModule ]

@NgModule({
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class CoreModule { }
