import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

// Define the type for the props
interface MusicCardProps {
  title: string;
  description: string;
  imageSource: any;
  favoritIcon: any;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  description,
  imageSource,
  favoritIcon,
}) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Image source={imageSource} style={styles.cardImage} />

        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>

        <Image source={favoritIcon} style={styles.favoritIcon} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 15,
    elevation: 5,
    borderColor: "pink",
    width: "100%",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardImage: {
    width: 75,
    height: 75,
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  textContainer: {
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#021526",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
  favoritIcon: {
    width: 20,
    height: 20,
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
});

export default MusicCard;
