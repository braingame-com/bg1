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

export interface NewTaskProps {
  tasks: string[];
  setTasks: (newTasks: string[]) => void;
  setRemaining: (updateFunction: (prevRemaining: number) => number) => void;
}

export interface InputFieldProps {
  icon?: string;
  iconType?: string;
  placeholder?: string;
  textContentType?: 'none' | 'URL' | 'addressCity' | 'username' | 'password';
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  onKeyPress?: (e: any) => void;
  style?: any;
}

export interface TasksHeaderProps {
  tasks: string[];
  setTasks: (prevTasks: string[]) => void;
  remaining: number;
  setRemaining: (prevRemaining: number) => void;
}
