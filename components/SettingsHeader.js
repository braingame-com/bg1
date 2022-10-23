import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useColorScheme,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { styles as s } from "../setup/styles";
import { useTheme } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export function SettingsHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  return (
    <View style={{ ...s.container }}>
      <View
        style={{
          ...s.row,
          ...s.m_horizontal,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...s.title, color: colors.text }}>Settings</Text>
        <TouchableOpacity
          style={{
            ...s.row,
            alignItems: "center",
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ ...s.m_right, ...s.info_text }}>Log in</Text>
          <Octicons name="sign-in" size={20} style={{ ...s.info_text }} />
        </TouchableOpacity>
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
              <TouchableOpacity onPress={() => console.log("Sign up")}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    ...s.subtitle,
                    ...s.rounded,
                    padding: 10,
                  }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
}
