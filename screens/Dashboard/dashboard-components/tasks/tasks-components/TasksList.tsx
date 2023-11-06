import { FlatList } from 'react-native';
import { TasksListProps } from '../../../../../setup/types';
import { Column } from '../../../../../design/primitives';
import { Heading } from '../../../../../design/typography';
import { t, c } from '../../../../../setup/styles';
import { Task } from './Tasks';

export const TasksList: React.FC<TasksListProps> = ({ tasks, removeTask }) => {
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <Task removeTask={removeTask} index={index} key={index} text={item} />
  );

  const EmptyState = () => (
    <Column style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Heading style={{ textAlign: 'center', padding: t.xl, opacity: 0.2 }}>
        Your task list is empty
      </Heading>
    </Column>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      ListEmptyComponent={EmptyState}
      contentContainerStyle={{
        flexGrow: 1,
        marginBottom: c.ACTION_BAR_HEIGHT,
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};
