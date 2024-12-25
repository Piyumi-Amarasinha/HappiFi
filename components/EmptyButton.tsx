// EmptyButton.js
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import icons from "@/constants/icons";

const EmptyButton = ({ onPress, title }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.bottomContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={title}
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity onPress={onPress}>
        <Image
          source={icons.login}
          style={styles.loginIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    shadowOpacity: 2,
    width: 280,
    height: 50,
    borderRadius: 15,
    borderColor: "pink",
    borderWidth: 2,
    elevation: 2,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
    fontStyle: "italic",
    color: "#333",
  },
  loginIcon: {
    width: 30,
    height: 30,
    alignSelf: "center",
    margin: 10,
  },
});

export default EmptyButton;
