import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

const CustomSearchBar = ({
  onSearch,
}: {
  onSearch: (text: string) => void;
}) => {
  const [search, setSearch] = useState("");

  const updateSearch = (searchText: string) => {
    setSearch(searchText);
    onSearch(searchText);
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputContainer: {
    backgroundColor: "#f0f0f0",
    borderColor: "pink",
    borderBottomColor: "black",
    borderWidth: 2,
    elevation: 5,
    borderRadius: 15,
    width: "95%",
    alignSelf: "center",
  },
});

export default CustomSearchBar;
