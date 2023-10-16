export interface TagProps {
  children: any;
  icon?: string;
  position?: string;
}

export interface ColorGroup {
  [key: string]: string;
}

export interface PaletteInterface {
  [key: string]: ColorGroup | any;
}
