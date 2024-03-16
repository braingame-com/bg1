import { useState } from 'react';
import { TasksWrapper } from './tasks-components/TasksWrapper';
import { TasksList } from './tasks-components/TasksList';
import { NewTaskInput } from './tasks-components/NewTaskInput';

export const TasksScreen: React.FC<{
  setRemaining: any;
}> = ({ setRemaining }) => {
  const [tasks, setTasks] = useState<string[]>([
    'go mums',
    'kill phil',
    'get liz',
    'go winchester',
    'wait for all this to blow over',
    'go mums',
    'kill phil',
    'get liz',
    'go winchester',
    'wait for all this to blow over',
    'go mums',
    'kill phil',
    'get liz',
    'go winchester',
    'wait for all this to blow over',
  ]);
  // const checkTask = (index: number) => {
  //   console.log('check @ index: ' + index);
  // };
  const removeTask = (index: number) => {
    let tasksCopy = [...(tasks as any)];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy as any);
    setRemaining((prevRemaining: any) => prevRemaining - 1);
  };

  return (
    <TasksWrapper>
      <TasksList tasks={tasks} removeTask={removeTask} />

      <NewTaskInput
        tasks={tasks}
        setTasks={setTasks}
        setRemaining={setRemaining}
      />
    </TasksWrapper>
  );
};
