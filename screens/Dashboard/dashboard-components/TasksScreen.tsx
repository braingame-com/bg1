import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { s, t } from '../../../setup/styles';
import { Button, Icon, InputField } from '../../../design/primitives';
import { Text } from '../../../design/typography';
import { NewTaskProps, TasksHeaderProps } from '../../../setup/types';
import { platform } from '../../../setup/helpers';

export const TasksScreen = () => {
  const headerHeight = useHeaderHeight();
  const { colors } = useTheme();
  const [tasks, setTasks] = useState<string[]>([]);
  const [remaining, setRemaining] = useState(0);
  const checkTask = (index: number) => {
    console.log('check @ index: ' + index);
  };
  const removeTask = (index: number) => {
    let tasksCopy = [...(tasks as any)];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy as any);
    setRemaining((prevRemaining) => prevRemaining - 1);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}
      style={{
        flex: 1,
        padding: t.s,
        backgroundColor: colors.background,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            padding: 0,
            flex: 1,
            justifyContent: 'flex-start',
          }}
        >
          <TasksHeader
            tasks={tasks}
            setTasks={setTasks}
            remaining={remaining}
            setRemaining={setRemaining}
          />

          <TaskList tasks={tasks} removeTask={removeTask} />

          <NewTaskInput
            tasks={tasks}
            setTasks={setTasks}
            setRemaining={setRemaining}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const TasksHeader: React.FC<TasksHeaderProps> = ({
  tasks,
  setTasks,
  remaining,
  setRemaining,
}) => {
  const { colors } = useTheme();
  const showHideChecked = () => {
    console.log('show/hide');
  };
  const clearChecked = () => {
    setTasks([]);
    setRemaining((tasks as any).length);
    console.log('clear');
  };

  return (
    <View
      style={{
        paddingHorizontal: t.s,
        paddingVertical: t.l,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flex: 1, marginHorizontal: t.s }}>
        <Text
          style={{
            ...s.pill,
            ...s.info,
            alignSelf: 'center',
          }}
        >
          0 / {remaining}
        </Text>
      </View>
      <Pressable
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: t.s,
          padding: t.l,
          borderColor: colors.border,
          borderWidth: 1,
        }}
        onPress={() => showHideChecked()}
      >
        <Icon name="eye-slash" size="secondary" />
      </Pressable>
      <Pressable
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: t.s,
          padding: t.l,
          borderColor: colors.border,
          borderWidth: 1,
        }}
        onPress={() => clearChecked()}
      >
        <Icon name="times" size="secondary" />
      </Pressable>
    </View>
  );
};

const Task: React.FC<{
  removeTask: (index: number) => void;
  checkTask?: () => void;
  text: string;
  index: number;
}> = ({ removeTask, checkTask, text, index }) => {
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

const TaskList: React.FC<{
  tasks: string[];
  removeTask: (index: number) => void;
}> = ({ tasks, removeTask }) => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <Text
        style={{
          textAlign: 'center',
          padding: t.xl,
          display: tasks?.length === 0 ? 'flex' : 'none',
        }}
      >
        Your task list is empty
      </Text>
      {tasks.map((text: string, index: number) => {
        let hIndex = index + 1;
        let isChecked = 'false';
        return (
          <Task
            removeTask={removeTask}
            // number={hIndex}
            index={index}
            key={index}
            text={text}
            // isChecked={isChecked}
          />
        );
      })}
    </ScrollView>
  );
};

const NewTaskInput: React.FC<NewTaskProps> = ({
  tasks,
  setTasks,
  setRemaining,
}) => {
  const { colors } = useTheme();
  const onKeyPress = (e: any) => {
    let key = e.nativeEvent.key;
    if (key == 'Enter') {
      addTask();
    }
    console.log('You pressed a key: ' + key);
  };
  const addTask = () => {
    setTasks([...(tasks as any), task] as any);
    setTask('');
    setRemaining((prevRemaining) => prevRemaining + 1);
  };
  const [task, setTask] = useState('');

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.card,
        height: platform === 'ios' ? t.m * 6 : t.m * 5,
        padding: t.xs,
        marginHorizontal: -t.s,
        borderTopRightRadius: t.s,
        borderTopLeftRadius: t.s,
      }}
    >
      <InputField
        icon="edit"
        placeholder="Add a new task"
        onSubmitEditing={() => addTask()}
        onChangeText={(text) => setTask(text)}
        onKeyPress={(e: any) => {
          onKeyPress(e);
        }}
        value={task}
      />
    </View>
  );
};
