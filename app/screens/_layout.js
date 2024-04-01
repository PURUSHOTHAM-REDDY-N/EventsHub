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

const authRoute = 1


  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="auth"/>
      <Stack.Screen name="events"/>
    </Stack>
  )
};

export default Layout;