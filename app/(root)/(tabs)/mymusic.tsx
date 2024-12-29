import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  ViewToken,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MusicCard } from "../../../components/MusicCard";
import CustomSearchBar from "../../../components/CustomSearchBar";
import { useClickStore } from "@/components/ClickStore";

interface Track {
  _id: string;
  name?: string;
  uNm?: string;
  img?: string;
}

interface ProcessedTrack {
  id: string;
  title: string;
  description: string;
  imageSource: { uri: string };
}

const MyMusic: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "favorite", title: "Favorite" },
  ]);

  const [searchText, setSearchText] = useState<string>("");
  const [originalMusicData, setOriginalMusicData] = useState<ProcessedTrack[]>(
    []
  );
  const [musicData, setMusicData] = useState<ProcessedTrack[]>([]);
  const [favoriteData, setFavoriteData] = useState<ProcessedTrack[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const allMusicListRef = useRef<FlatList>(null);
  const favoriteMusicListRef = useRef<FlatList>(null);
  const currentVisibleItemIndex = useRef<number>(0);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        currentVisibleItemIndex.current = viewableItems[0].index || 0;
      }
    },
    []
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  const fetchMusicData = async () => {
    try {
      const response = await fetch(
        "https://openwhyd.org/hot?format=json&limit=10"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data.tracks)) {
        throw new Error("Invalid data format received from API");
      }

      const processedData: ProcessedTrack[] = data.tracks.map(
        (item: Track) => ({
          id: item._id || Math.random().toString(),
          title: item.name || "Unknown Title",
          description: item.uNm || "Unknown Artist",
          imageSource: { uri: item.img || "https://via.placeholder.com/70" },
        })
      );

      setOriginalMusicData(processedData);
      setMusicData(processedData);
      setFavoriteData([]);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
      setOriginalMusicData([]);
      setMusicData([]);
      setFavoriteData([]);
    } finally {
      setLoading(false);
    }
  };

  const { clickCount, increment } = useClickStore();

  useEffect(() => {
    fetchMusicData();
  }, []);

  useEffect(() => {
    // Restore scroll position after state updates
    const timeoutId = setTimeout(() => {
      if (allMusicListRef.current && currentVisibleItemIndex.current > 0) {
        allMusicListRef.current.scrollToIndex({
          index: currentVisibleItemIndex.current,
          animated: false,
        });
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [musicData, favoriteData]);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim() === "") {
      setMusicData(originalMusicData);
      return;
    }

    const filtered = originalMusicData.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase())
    );
    setMusicData(filtered);
  };

  const handleFavoriteToggle = useCallback(
    (track: ProcessedTrack) => {
      increment();
      setFavoriteData((prev) => {
        const isAlreadyFavorite = prev.some((item) => item.id === track.id);
        if (isAlreadyFavorite) {
          return prev.filter((item) => item.id !== track.id);
        }
        return [...prev, track];
      });
    },
    [increment]
  );

  const renderItem = useCallback(
    ({ item }: { item: ProcessedTrack }) => (
      <MusicCard
        key={item.id}
        title={item.title}
        description={item.description}
        imageSource={item.imageSource}
        favoritIcon={require("../../../assets/icons/heart1.png")}
        filledFavoritIcon={require("../../../assets/icons/pink heart-30.png")}
        onFavoritePress={() => handleFavoriteToggle(item)}
        isFavorite={favoriteData.some((favItem) => favItem.id === item.id)}
      />
    ),
    [favoriteData, handleFavoriteToggle]
  );

  const AllMusic = () => (
    <View style={styles.musicContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#FF4E88" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : musicData.length === 0 ? (
        <Text style={styles.noDataText}>No music found</Text>
      ) : (
        <FlatList
          ref={allMusicListRef}
          data={musicData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          windowSize={5}
          updateCellsBatchingPeriod={30}
          onScrollToIndexFailed={() => {}}
        />
      )}
    </View>
  );

  const FavoriteMusic = () => (
    <View style={styles.musicContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#FF4E88" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : favoriteData.length === 0 ? (
        <Text style={styles.noDataText}>No favorites yet</Text>
      ) : (
        <FlatList
          ref={favoriteMusicListRef}
          data={favoriteData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          windowSize={5}
          updateCellsBatchingPeriod={30}
        />
      )}
    </View>
  );

  const renderScene = SceneMap({
    all: AllMusic,
    favorite: FavoriteMusic,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabIndicator}
      style={styles.tabBar}
      labelStyle={styles.tabLabel}
      activeColor="#121481"
      inactiveColor="#121481"
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>My Music</Text>
        <CustomSearchBar onSearch={handleSearch} />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={styles.tabView}
        renderTabBar={renderTabBar}
      />
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>Clicks: {clickCount}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... existing styles remain the same
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 75,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  scrollContent: {
    width: "100%",
    flexGrow: 1,
    paddingVertical: 10,
  },
  musicContainer: {
    width: "100%",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    color: "#021526",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "pink",
    marginHorizontal: 16,
    borderRadius: 15,
    marginVertical: 10,
  },
  tabIndicator: {
    backgroundColor: "#FF4E88",
  },
  tabLabel: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
  },
  noDataText: {
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    color: "#666",
  },
  floatingButton: {
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "#FF4E88",
    borderRadius: 30,
    width: 120,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  floatingButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyMusic;
