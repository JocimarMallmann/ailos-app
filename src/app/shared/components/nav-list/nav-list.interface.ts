import { IconPrefix, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface NavList {
  iconPrefix?: IconPrefix;
  iconName?: IconName;
  iconColor?: string;
  iconSize?: SizeProp;
  routerLink?: string;
  label: string;

}
