import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import images from "@/constants/images";

const signIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.signInImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Welcome to HappiFi</Text>
          <Text style={styles.titleText}>
            Let's Get You Closer to {"\n"}
            Your favourite songs!
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.25)", // Semi-transparent overlay for readability
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default signIn;
