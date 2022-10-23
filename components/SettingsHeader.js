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
          <Octicons name="sign-in" size={20} style={{ ...s.info_text }} />
          <Text style={{ ...s.m_left, ...s.info_text }}>Log in</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              ...s.container,
              ...s.flex,
              ...s.centered,
              // backgroundColor: "rgba(0,0,0,.5)",
            }}
          >
            <View
              style={{
                ...s.modalView,
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
              }}
            >
              <TouchableOpacity
                style={{
                  ...s.row,
                  alignItems: "center",
                  padding: 10,
                  position: "absolute",
                  top: 10,
                  right: 10,
                  opacity: 0.5,
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Octicons name="x" size={20} style={{ color: "#777777" }} />
              </TouchableOpacity>
              <View style={s.account_input}>
                <Text>Some notification here</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
