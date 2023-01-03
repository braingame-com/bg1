import { View } from "react-native";
import { t } from "../setup/styles";
import { Text } from "../components/typography";
import { Button, Dot, Row } from "../components/primitives";

let tasks = [
  "Take bins out, including recycling!",
  "Do some exercise",
  "Pay phone bill",
  "Go to Winchester",
  "Wait for all this to blow over",
];

export function UpcomingTasks() {
  return (
    <View style={{ marginTop: t.small }}>
      {tasks.map((task, i) => (
        <Row key={i}>
          <Dot contentStyle={{ fontSize: t.small }} />
          <Text style={{ paddingVertical: t.xs, marginLeft: t.small }}>
            {task}
          </Text>
        </Row>
      ))}
    </View>
  );
}
