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
    width: "90%",
    height: 70,
    borderRadius: 10,
    elevation: 5,
    borderColor: "pink",
    backgroundColor: "white",
    justifyContent: "center",
    borderWidth: 1,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,

    backgroundColor: "blue",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 400,
    color: "#021526",
    flexShrink: 1,
    // backgroundColor: "blue",
    height: 30,
    width: 100,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
});

export default SettingCard;
