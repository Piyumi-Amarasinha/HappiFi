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
import { Link } from "expo-router";

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
        <View style={styles.maincontainer}>
          <View style={{ flex: 1, backgroundColor: "" }}>
            <Link href="/sign-in" style={styles.links}>
              Sign In
            </Link>
          </View>

          <View style={{ flex: 1, backgroundColor: "" }}>
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
            <View
              style={{
                flex: 1,
                bottom: -60,
                justifyContent: "space-evenly",
              }}
            >
              <EmptyButton onPress={handleLogin} title="Password" />
            </View>
          </View>
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
  maincontainer: {
    flex: 1,
    justifyContent: "space-evenly",
    // backgroundColor: "blue",
  },
  contentContainer: {
    flex: 6,
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "white",
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
    color: "#021526",
    textAlign: "center",
    justifyContent: "flex-start",
    fontWeight: "bold",
    lineHeight: 35,
  },
  heading: {
    color: "#021526",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
  links: {
    fontWeight: "500",
    textAlign: "right",
    margin: 25,
  },
});

export default home;
