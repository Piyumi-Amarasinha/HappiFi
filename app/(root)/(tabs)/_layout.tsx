import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}) => (
  <View style={styles.iconContainer}>
    <Image
      source={icon}
      style={[styles.icon, { tintColor: focused ? "#0061FF" : "#666876" }]}
      resizeMode="contain"
    />
    <Text style={[styles.text, { color: focused ? "#0061FF" : "#666876" }]}>
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          height: 70,
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="mymusic"
        options={{
          title: "Music",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.headset} title="Music" />
          ),
        }}
      />

      <Tabs.Screen
        name="myfav"
        options={{
          title: "Fav",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.heart} title="Fav" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default TabsLayout;
