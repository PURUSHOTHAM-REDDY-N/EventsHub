import { Stack } from "expo-router";
import { useFonts } from "expo-font";

// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "/",
};

const Layout = () => {
//   const [fontsLoaded] = useFonts({
//     DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
//     DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
//     DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }
const authRoute = 1

  return (
    <Stack initialRouteName="onboarding">
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="login" />
      <Stack.Screen name="Verification" />
      <Stack.Screen name="Signup" />
      {/* <Stack.Screen name="onboarding" /> */}
    </Stack>
  )
};

export default Layout;