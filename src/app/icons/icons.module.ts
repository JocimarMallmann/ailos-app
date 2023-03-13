import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Icons imports
import {
  faCircleCheck,
  faCoffee,
  faMagnifyingGlass,
  faSpinner,
  faUser,
  faBars,
  faSearch,
  faStar,
  faCommentDots,
  faSliders,
  faBuildingColumns
} from '@fortawesome/free-solid-svg-icons';


const ICON: IconDefinition[] = [
  faCoffee,
  faMagnifyingGlass,
  faSpinner,
  faUser,
  faCircleCheck,
  faBars,
  faSearch,
  faStar,
  faCommentDots,
  faSliders,
  faBuildingColumns
];


@NgModule({
  exports: [
    FontAwesomeModule
  ]
})
export class IconsModule {

  constructor(library: FaIconLibrary) {
    // Add an icon to the library
    library.addIcons(...ICON);
  }

}
