import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import images from "@/constants/images";
import EmptyButton from "@/components/EmptyButton";

const home = () => {
  const handleLogin = () => {
    console.log("Log-In Button Pressed");
  };

  const handlesignin = () => {
    console.log("Sign-In Button Pressed");
  };

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground
        source={images.signInImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Welcome to HappiFi!</Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.overlay}>
              <Text style={styles.titleText}>
                Enjoy your Music, {"\n"} Enjoy your Life. {"\n"}
              </Text>
              <Text style={styles.subTitleText}>
                Listen to your favorite music for free, anywhere.
              </Text>
            </View>
          </View>

          <EmptyButton onPress={handleLogin} title="Password" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    position: "relative",
  },
  container: {
    flex: 3,
    justifyContent: "space-evenly",
  },
  contentContainer: {
    flex: 0.45,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  subTitleText: {
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
    lineHeight: 35,
  },
  heading: {
    top: -30,
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
});

export default home;
