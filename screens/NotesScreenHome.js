import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function NotesScreenHome() {
  const navigation = useNavigation();
  const [text] = useState("");

  // refer to PCMOB3 slide 179 for button

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.label}>Welcome</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.button, styles.todoButton]}
        >
          <Text style={styles.buttonText}>Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.button, styles.busButton]}
        >
          <Text style={styles.buttonText}>Bus</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ marginTop: 40, color: "grey" }}>
        This is what you typed:
      </Text>
      <Text style={{ color: "#333", marginTop: 10 }}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 30,
  },
  textInput: {
    margin: 20,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    padding: 15,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  todoButton: {
    backgroundColor: "orange",
    borderRadius: 15,
    width: "30%",
  },
  busButton: {
    backgroundColor: "red",
    borderRadius: 15,
    width: "30%",
  },
});
