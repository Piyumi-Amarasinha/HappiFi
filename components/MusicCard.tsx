import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

interface MusicCardProps {
  title: string;
  description: string;
  imageSource: { uri: string };
  favoritIcon: any;
  filledFavoritIcon: any;
  onFavoritePress?: () => void;
  isFavorite?: boolean;
}

export const MusicCard: React.FC<MusicCardProps> = ({
  title,
  description,
  imageSource,
  favoritIcon,
  filledFavoritIcon,
  onFavoritePress,
  isFavorite = false,
}) => {
  const [isFavorited, setIsFavorited] = useState(isFavorite);

  useEffect(() => {
    setIsFavorited(isFavorite);
  }, [isFavorite]);

  const handleFavoriteToggle = () => {
    setIsFavorited((prev) => !prev);
    onFavoritePress?.();
  };

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={imageSource}
          style={styles.cardImage}
          defaultSource={require("../assets/images/track01.jpeg")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.cardDescription} numberOfLines={1}>
            {description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleFavoriteToggle}
          style={styles.favoriteButton}
        >
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
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "transparent",
    width: 350,
    marginHorizontal: "4%",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#FFFFFF",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 10,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
  favoriteButton: {
    padding: 8,
  },
  favoritIcon: {
    width: 24,
    height: 24,
  },
});
