import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { COLORS } from "@/components/app-ui";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "web" ? 10 : Math.max(insets.bottom, 8);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.navy,
        tabBarInactiveTintColor: COLORS.secondaryText,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          paddingTop: 6,
          paddingBottom: bottomPadding,
          height: 62 + bottomPadding,
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: { fontFamily: "IBMPlexSans_600SemiBold", fontSize: 12 },
        tabBarItemStyle: { minHeight: 55 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Forside", tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} /> }} />
      <Tabs.Screen name="guides" options={{ title: "Guides", tabBarIcon: ({ color }) => <MaterialIcons name="menu-book" size={24} color={color} /> }} />
      <Tabs.Screen name="favorites" options={{ title: "Favoritter", tabBarIcon: ({ color }) => <MaterialIcons name="bookmark-border" size={24} color={color} /> }} />
      <Tabs.Screen name="help" options={{ title: "Hjælp", tabBarIcon: ({ color }) => <MaterialIcons name="help-outline" size={24} color={color} /> }} />
    </Tabs>
  );
}
