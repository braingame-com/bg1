import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { s } from "../setup/styles";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Button } from "../components/primitives";

export function AccountModal({ modalVisible, setModalVisible }) {
  const { colors } = useTheme();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={{
          ...s.container,
          ...s.flex,
          ...s.centered,
          backgroundColor: "rgba(0,0,0,.8)",
        }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            ...s.modalView,
            backgroundColor: colors.card,
            // borderColor: colors.border,
            // borderWidth: 1,
          }}
        >
          <View style={{ width: 230 }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Octicons
                name="person"
                size={20}
                style={{
                  color: "#fff",
                  position: "absolute",
                  left: 20,
                  zIndex: 10,
                  opacity: 0.5,
                }}
              />
              <TextInput
                style={{
                  ...s.account_input,
                  ...s.subtitle,
                }}
                placeholder="Username / Email"
              />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Octicons
                name="unlock"
                size={20}
                style={{
                  color: "#fff",
                  position: "absolute",
                  left: 20,
                  zIndex: 10,
                  opacity: 0.5,
                }}
              />
              <TextInput
                style={{
                  ...s.account_input,
                  ...s.subtitle,
                }}
                placeholder="Password"
                textContentType={"password"}
                secureTextEntry={true}
              />
            </View>
          </View>
          <Text
            style={{
              color: "white",
              opacity: 0.5,
              paddingTop: 10,
              marginTop: 20,
            }}
          >
            Don't have an account?
          </Text>
          <Button text="Sign up" style={{ ...s.m_top }} />
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
