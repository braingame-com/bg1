import { useTheme } from '@react-navigation/native';
import { NewTaskInputProps } from '../../../../../setup/types';
import { useEffect, useState } from 'react';
import { Animated, Keyboard } from 'react-native';
import { platform } from '../../../../../setup/helpers';
import { s, t } from '../../../../../setup/styles';
import { Button, InputField } from '../../../../../design/primitives';

export const NewTaskInput: React.FC<NewTaskInputProps> = ({
  tasks,
  setTasks,
  setRemaining,
}) => {
  const { colors } = useTheme();
  const onKeyPress = ({ nativeEvent }: { nativeEvent: any }) =>
    nativeEvent.key == 'Enter' && addTask();
  const addTask = () => {
    setTasks([...(tasks as any), task] as any);
    setTask('');
    setRemaining((prevRemaining) => prevRemaining + 1);
  };
  const [task, setTask] = useState('');

  const [height] = useState(
    new Animated.Value((platform === 'ios' ? t.m * 6 : t.m * 5) + 1000)
  );
  const [buttonHeight] = useState(new Animated.Value(0));
  const [contentHeight, setContentHeight] = useState(
    platform === 'ios' ? t.m * 6 : t.m * 5
  );
  const buttonAnimatedStyle = {
    height: buttonHeight,
    opacity: buttonHeight.interpolate({
      inputRange: [0, t.s],
      outputRange: [0, 0.5],
    }),
  };
  const animateHeight = (newHeight: number, buttonNewHeight: number) => {
    Animated.timing(height, {
      toValue: newHeight + 1000,
      duration: 100,
      useNativeDriver: false,
    }).start();

    Animated.timing(buttonHeight, {
      toValue: buttonNewHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const onContentLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };
  const [_, setKeyboardIsOpen] = useState(false);
  // const [actionBarOffset, setActionBarOffset] = useState(-1000);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      platform === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setKeyboardIsOpen(true);
        animateHeight(t.m * 4 + t.s, t.s);
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      platform === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardIsOpen(false);
        animateHeight(platform === 'ios' ? t.m * 6 : t.m * 5, 0);
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, [contentHeight]);

  return (
    <Animated.View
      onLayout={onContentLayout}
      style={{
        ...s.newTaskInputBar,
        backgroundColor: colors.card,
        borderTopColor: colors.border,
        borderTopWidth: 1,
        height: height,
        // bottom: actionBarOffset,
        bottom: -1000,
      }}
    >
      <Animated.View style={[buttonAnimatedStyle]}>
        <Button
          type="Naked"
          icon="horizontal-rule"
          iconSize={t.xxxl}
          style={s.newTaskHandle}
          onPress={() => Keyboard.dismiss()}
        />
      </Animated.View>

      <InputField
        leftIcon="edit"
        // rightIcon="chevron-up"
        // rightIconStyle={{
        //   opacity: keyboardIsOpen ? 1 : 0,
        // }}
        // rightIconOnPress={() => {
        //   console.log('clicking');
        //   setActionBarOffset(0);
        // }}
        placeholder="Add a new task"
        onSubmitEditing={() => addTask()}
        onChangeText={(text) => setTask(text)}
        onKeyPress={(e: any) => {
          onKeyPress(e);
        }}
        value={task}
        containerStyle={{ backgroundColor: 'transparent' }}
      />
    </Animated.View>
  );
};
