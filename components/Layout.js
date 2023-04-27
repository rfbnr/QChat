import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = ({ children }) => {
  const [fontsLoaded] = useFonts({
    black: require("../assets/fonts/Mulish-Black.ttf"),
    regular: require("../assets/fonts/Mulish-Regular.ttf"),
    bold: require("../assets/fonts/Mulish-Bold.ttf"),
    medium: require("../assets/fonts/Mulish-Medium.ttf"),
    mediumItalic: require("../assets/fonts/Mulish-MediumItalic.ttf"),
    semiBold: require("../assets/fonts/Mulish-SemiBold.ttf"),
    semiBoldItalic: require("../assets/fonts/Mulish-SemiBoldItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>{children}</SafeAreaProvider>
  );
};

export default Layout;
