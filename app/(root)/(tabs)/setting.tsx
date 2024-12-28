import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import SettingCard from "../../../components/SettingCard";

const setting = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Settings</Text>
      </View>

      <View>
        <SettingCard
          title="sound"
          icon={require("../../../assets/icons/sound.png")}
        />
        <SettingCard
          title="Theme"
          icon={require("../../../assets/icons/theme.png")}
        />
        <SettingCard
          title="Logout"
          icon={require("../../../assets/icons/logout.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    color: "#021526",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default setting;
