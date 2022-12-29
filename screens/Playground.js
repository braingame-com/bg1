import { useState, createContext, useContext } from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles as s } from "../setup/styles";
import { Button } from "../components/primitives";

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
);

const Container = () => (
  <View
    style={{
      padding: 10,
      borderColor: "magenta",
      borderWidth: 1,
      borderRadius: 20,
    }}
  >
    <AddOneButton />
  </View>
);

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext);
  return (
    <Button
      text="More"
      icon="plus"
      onPress={() => setCounter((v) => v + 1)}
    ></Button>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return (
    <Text style={{ ...s.heading, color: "white", ...s.m_bottom_2 }}>
      Counter: {counter}
    </Text>
  );
};

export function Playground({ route }) {
  const { colors } = useTheme();
  const [counter, setCounter] = useState(0);
  return (
    <CounterContextProvider>
      <View style={{ flex: 1, ...s.centered }}>
        <Counter />
        <Container />
      </View>
    </CounterContextProvider>
  );
}
