import { useTheme } from '@react-navigation/native';
import { TaskProps } from '../../../../../setup/types';
import { Pressable, View } from 'react-native';
import { Icon } from '../../../../../design/primitives';
import { t } from '../../../../../setup/styles';
import { Text } from '../../../../../design/typography';

export const Task: React.FC<TaskProps> = ({
  removeTask,
  // checkTask,
  text,
  index,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        borderBottomWidth: 0,
        borderColor: colors.border,
        paddingVertical: t.s,
        paddingHorizontal: 0,
        marginHorizontal: t.s,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Pressable
        style={{
          width: 28,
          height: 28,
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: t.s,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        // onPress={() => checkTask(index)}
      >
        <Icon name="check" color={t.positive} />
      </Pressable>
      <Text
        style={{
          color: colors.text,
          marginVertical: 0,
          flex: 1,
          marginHorizontal: t.l,
        }}
      >
        {text}
      </Text>
      <Pressable
        style={{
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'flex-end',
          opacity: 0.5,
          position: 'relative',
          marginVertical: t.s,
        }}
        onPress={() => removeTask(index)}
      >
        <Icon name="times" />
      </Pressable>
    </View>
  );
};
