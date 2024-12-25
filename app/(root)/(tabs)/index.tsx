import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to HappiFi!</Text>
      <Link href="/sign-in" style={styles.link}>
        Sign In
      </Link>
      <Link href="/log-in" style={styles.link}>
        Log In
      </Link>
      <Link href="/homePage" style={styles.link}>
        Home Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    marginVertical: 5,
  },
});
