import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Tabs } from 'expo-router';

// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "/",
};

const Layout = () => {

const authRoute = 0

  return (
    <Stack screenOptions={{headerShown:false}}>
      {authRoute?<Stack.Screen name="(main)"/>:<Stack.Screen name="auth"/>}
    </Stack>
  )
};

export default Layout;