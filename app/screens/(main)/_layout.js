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
//   const [fontsLoaded] = useFonts({
//     DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
//     DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
//     DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }
  return (
    <Tabs>
			<Tabs.Screen
				name="home"
				options={{
					tabBarLabel: 'Home',
					headerTitle: 'Home Screen',
					
				}}
			/>
			{/* <Tabs.Screen
				name="auth"
				options={{
					tabBarLabel: 'Login',
					headerTitle: 'My Account',
				}}
			/> */}
			<Tabs.Screen
				name="profile"
				options={{
					headerShown:false,
					tabBarLabel: 'Account',
					headerTitle: 'My Account',
				}}
			/>
		</Tabs>
    // <Stack initialRouteName="home">
    // <Stack.Screen name="home" />
    // </Stack>
  )
};

export default Layout;