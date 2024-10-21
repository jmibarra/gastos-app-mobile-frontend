// RootLayout.tsx
import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { AuthProvider } from "../context/AuthContext";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);
  // Si el usuario está autenticado, mostrar las tabs y el contenido principal
  return (
    <GluestackUIProvider mode="light"><AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="light" />
      </AuthProvider></GluestackUIProvider>
  );
}
