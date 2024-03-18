import { ReactNode } from 'react';

export interface TagProps {
  children: any;
  icon?: string;
  style?: object;
  iconSize?: string | number;
}

export interface ColorGroup {
  [key: string]: string;
}

export interface ColorsInterface {
  [key: string]: ColorGroup | any;
}

export interface NewTaskInputProps {
  tasks: string[];
  setTasks: (newTasks: string[]) => void;
  setRemaining: (updateFunction: (prevRemaining: number) => number) => void;
}

export interface InputFieldProps {
  leftIcon?: string;
  leftIconType?: string;
  leftIconStyle?: any;
  rightIcon?: string;
  rightIconType?: string;
  rightIconStyle?: any;
  rightIconOnPress?: () => void;
  placeholder?: string;
  textContentType?: 'none' | 'URL' | 'addressCity' | 'username' | 'password';
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  onKeyPress?: (e: any) => void;
  style?: any;
  containerStyle?: any;
}

export interface TasksHeaderProps {
  tasks: string[];
  setTasks: (prevTasks: string[]) => void;
  remaining: number;
  setRemaining: (prevRemaining: number) => void;
}

export interface TasksListProps {
  tasks: string[];
  removeTask: (index: number) => void;
}

export interface TaskProps {
  removeTask: (index: number) => void;
  checkTask?: () => void;
  text: string;
  index: number;
}

export type CategoryCardProps = {
  title: string;
  icon: string;
  color: string[];
  description: string;
};

export type BulletIconLineProps = {
  children: ReactNode;
  icon: string;
  type?: string;
  style?: object;
};
