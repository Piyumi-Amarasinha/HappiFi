import { View, Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import SettingCard from "../../../components/SettingCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const router = useRouter();

  const handleLogout = async () => {
    Alert.alert("Are you sure?", "You will be logged out.", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          try {
            // Clear stored credentials
            await AsyncStorage.multiRemove(["username", "password"]);

            // Clear global temp variable if it exists
            if (global.tempUser) {
              delete global.tempUser;
            }

            // Navigate to home
            router.push("/home");
          } catch (error) {
            console.error("Error during logout:", error);
            Alert.alert("Error", "Failed to logout. Please try again.");
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Settings</Text>
      </View>

      <View>
        <SettingCard
          title="sound"
          icon={require("../../../assets/icons/sound.png")}
          onPress={() => Alert.alert("ok")}
        />
        <SettingCard
          title="Theme"
          icon={require("../../../assets/icons/theme.png")}
          onPress={() => Alert.alert("ok")}
        />
        <SettingCard
          title="Logout"
          icon={require("../../../assets/icons/logout.png")}
          onPress={handleLogout}
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

export default Setting;
