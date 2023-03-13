import { IconName, IconPrefix, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface RoundButton {
  iconPrefix?: IconPrefix;
  iconName?: IconName;
  iconColor?: string;
  iconSize?: SizeProp;
  label?: string;
}
