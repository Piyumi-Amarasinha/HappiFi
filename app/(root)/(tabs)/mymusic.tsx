import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MusicCard from "../../../components/MusicCard";
import CustomSearchBar from "../../../components/CustomSearchBar";

const AllMusic = () => (
  <ScrollView contentContainerStyle={styles.scene}>
    <MusicCard
      title="Friend"
      description="Ann Marie"
      imageSource={require("../../../assets/images/track01.jpeg")}
      favoritIcon={require("../../../assets/icons/heart1.png")}
    />
    <MusicCard
      title="Feuior"
      description="Will Stock"
      imageSource={require("../../../assets/images/track02.jpeg")}
      favoritIcon={require("../../../assets/icons/heart1.png")}
    />
    <MusicCard
      title="Mariana"
      description="Jewish Ann"
      imageSource={require("../../../assets/images/track03.jpeg")}
      favoritIcon={require("../../../assets/icons/heart1.png")}
    />
    <MusicCard
      title="Budapesht"
      description="Kaula Pant"
      imageSource={require("../../../assets/images/track04.jpeg")}
      favoritIcon={require("../../../assets/icons/heart1.png")}
    />
    <MusicCard
      title="New York"
      description="Lady Gaga"
      imageSource={require("../../../assets/images/track05.jpeg")}
      favoritIcon={require("../../../assets/icons/heart1.png")}
    />
    <MusicCard
      title="Move Move"
      description="Likush Shie"
      imageSource={require("../../../assets/images/track06.jpeg")}
      favoritIcon={require("../../../assets/icons/heart1.png")}
    />
  </ScrollView>
);

const FavoriteMusic = () => (
  <ScrollView contentContainerStyle={styles.scene}>
    <MusicCard
      title="Friend"
      description="Ann Marie"
      imageSource={require("../../../assets/images/track01.jpeg")}
      favoritIcon={require("../../../assets/icons/play.png")}
    />
    <MusicCard
      title="Feuior"
      description="Will Stock"
      imageSource={require("../../../assets/images/track02.jpeg")}
      favoritIcon={require("../../../assets/icons/play.png")}
    />
    <MusicCard
      title="Mariana"
      description="Jewish Ann"
      imageSource={require("../../../assets/images/track03.jpeg")}
      favoritIcon={require("../../../assets/icons/play.png")}
    />
  </ScrollView>
);

const MyMusic = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "favorite", title: "Favorite" },
  ]);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (text: string) => {
    setSearchText(text);
    console.log("Search Text:", text);
  };

  const renderScene = SceneMap({
    all: AllMusic,
    favorite: FavoriteMusic,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>My Music</Text>
      <CustomSearchBar onSearch={handleSearch} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.tabView}
        tabBarPosition="top"
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.tabIndicator}
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
            activeColor="#121481"
            inactiveColor="#121481"
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    color: "#021526",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  tabView: {
    marginTop: 10,
    borderRadius: 15,
    width: "90%",
    alignSelf: "center",
    // backgroundColor: "blue",
  },
  tabBar: {
    backgroundColor: "pink",
  },
  tabIndicator: {
    backgroundColor: "#FF4E88",
  },
  tabLabel: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default MyMusic;
