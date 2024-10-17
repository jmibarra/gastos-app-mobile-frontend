import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoginScreen from "@/screens/LoginScreen";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function TabLayout() {
  const { user } = useContext(AuthContext)!;

  if (!user) {
    // Si no hay usuario autenticado, mostrar la pantalla de login
    return <LoginScreen />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Periodo",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="investments"
        options={{
          title: "Inversiones",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
