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
        backgroundColor: colors.card,
        paddingHorizontal: t.s,
        paddingVertical: t.l,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        borderRadius: t.l,
      }}
    >
      <Pressable
        style={{
          width: 70,
          height: 70,
          backgroundColor: t.positiveFaded,
          borderRadius: t.l,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: -t.s,
          marginVertical: -t.l,
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
          width: 70,
          height: 70,
          backgroundColor: t.negativeFaded,
          borderRadius: t.l,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.5,
          position: 'relative',
          marginHorizontal: -t.s,
          marginVertical: -t.l,
        }}
        onPress={() => removeTask(index)}
      >
        <Icon name="times" color={t.negative} />
      </Pressable>
    </View>
  );
};
