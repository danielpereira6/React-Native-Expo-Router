import { Tabs } from 'expo-router';
import { ReactNode } from "react";
import { AppStyles } from '../AppStyles';

export default function TabLayout(): ReactNode {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          margin: 0,
          fontSize: 15
        },
        tabBarActiveTintColor: AppStyles.color.tint,
        tabBarStyle: {
          backgroundColor: '#DDDDDD',
        },
        tabBarActiveBackgroundColor: '#CCCCCC',
        tabBarIconStyle: { display: "none" }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => null
        }}
      />
      <Tabs.Screen
        name="Map"
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ focused, color, size }) => null
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) => null
        }}
      />
    </Tabs>
  );
}