import { useTheme } from '@react-navigation/native';
import { NewTaskInputProps } from '../../../../../setup/types';
import { useEffect, useState } from 'react';
import { Animated, Keyboard } from 'react-native';
import { platform } from '../../../../../setup/helpers';
import { t } from '../../../../../setup/styles';
import { Button, InputField } from '../../../../../design/primitives';

export const NewTaskInput: React.FC<NewTaskInputProps> = ({
  tasks,
  setTasks,
  setRemaining,
}) => {
  const { colors } = useTheme();
  const onKeyPress = (e: any) => {
    let key = e.nativeEvent.key;

    if (key == 'Enter') addTask();

    console.log('You pressed a key: ' + key);
  };
  const addTask = () => {
    setTasks([...(tasks as any), task] as any);
    setTask('');
    setRemaining((prevRemaining) => prevRemaining + 1);
  };
  const [task, setTask] = useState('');

  const [height] = useState(
    new Animated.Value((platform === 'ios' ? t.m * 6 : t.m * 5) + 100)
  );
  const [contentHeight, setContentHeight] = useState(
    platform === 'ios' ? t.m * 6 : t.m * 5
  );
  const onContentLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setContentHeight(height);
  };
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      platform === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setKeyboardIsOpen(true);
        animateHeight(t.m * 4 + t.s);
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      platform === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardIsOpen(false);
        animateHeight(platform === 'ios' ? t.m * 6 : t.m * 5);
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, [contentHeight]);

  const animateHeight = (newHeight: number) => {
    Animated.timing(height, {
      toValue: newHeight + 100,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      onLayout={onContentLayout}
      style={{
        position: 'absolute',
        bottom: -100,
        left: 0,
        right: 0,
        backgroundColor: colors.card,
        height: height,
        // height: keyboardIsOpen
        //   ? 'auto'
        //   : platform === 'ios'
        //   ? t.m * 6
        //   : t.m * 5,
        padding: t.xs,
        marginHorizontal: -t.s,
        borderTopRightRadius: t.s,
        borderTopLeftRadius: t.s,
      }}
    >
      <Button
        type="Naked"
        icon="horizontal-rule"
        iconSize={t.xxxl}
        style={{
          alignSelf: 'center',
          height: keyboardIsOpen ? t.s : 0,
          backgroundColor: 'green',
          opacity: 0.5,
        }}
        onPress={() => Keyboard.dismiss()}
      />

      <InputField
        leftIcon="edit"
        leftIconStyle={{
          opacity: keyboardIsOpen ? 1 : 0.8,
        }}
        rightIcon="chevron-up"
        rightIconStyle={{
          opacity: keyboardIsOpen ? 1 : 0.8,
        }}
        rightIconOnPress={() => Keyboard.dismiss()}
        placeholder="Add a new task"
        onSubmitEditing={() => addTask()}
        onChangeText={(text) => setTask(text)}
        onKeyPress={(e: any) => {
          onKeyPress(e);
        }}
        value={task}
      />
    </Animated.View>
  );
};
