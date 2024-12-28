import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

// Define the type for the props
interface MusicCardProps {
  title: string;
  description: string;
  imageSource: any;
  favoritIcon: any;
  filledFavoritIcon: any;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  description,
  imageSource,
  favoritIcon,
  filledFavoritIcon,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Image source={imageSource} style={styles.cardImage} />

        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
        <TouchableOpacity onPress={handleFavoriteToggle}>
          <Image
            source={isFavorited ? filledFavoritIcon : favoritIcon}
            style={styles.favoritIcon}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 15,
    elevation: 5,
    borderColor: "pink",
    width: "100%",
    paddingVertical: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
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
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});

export default MusicCard;
