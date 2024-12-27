import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

interface SettingCardProps {
  title: string;
  icon: any;
}

const SettingCard: React.FC<SettingCardProps> = ({ title, icon }) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Image source={icon} style={styles.icon} />

        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "90%",
    height: "100%",
    borderRadius: 10,
    elevation: 5,
    flexDirection: "row",
    borderColor: "pink",
    backgroundColor: "white",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    gap: 15,
    // backgroundColor: "blue",
  },

  textContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#021526",
  },

  icon: {
    width: 20,
    height: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default SettingCard;
