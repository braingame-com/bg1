import { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { t } from '../../../../../setup/styles';

export const TasksWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const headerHeight = useHeaderHeight();
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}
      style={{
        flex: 1,
        paddingHorizontal: t.s,
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          padding: 0,
          flex: 1,
          justifyContent: 'flex-start',
        }}
      >
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};
