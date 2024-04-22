import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AvatarImage from "../../components/atoms/AvatarImage";
import { COLORS } from "../../../constants";
import { getDataFromStorage } from "../../utils/storage";
import { useState, useEffect } from "react";

export const unstable_settings = {
  initialRouteName: "/",
};



const Layout = () => {
	const [userDetails, setUserDetails] = useState(undefined);
async function fetchUser() {
  const details = await getDataFromStorage("auth")
  console.log('details here' ,details)
  setUserDetails(details)
}
useEffect(() => {
  fetchUser();
}, []);
  return (
    <Tabs screenOptions={{ tabBarHideOnKeyboard: true }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            borderCurve: "circular",
            borderRadius: 20,
            height: 70,
          },
          headerTitle: "Home Screen",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={COLORS.primary}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CreateEvent"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            borderCurve: "circular",
            borderRadius: 20,
            height: 70,
          },
          headerTitle: "Create Event Screen",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "add-outline" : "add-circle-outline"}
              color={COLORS.primary}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            borderCurve: "circular",
            borderRadius: 20,
            height: 70,
          },
          headerShown: false,
          headerTitle: "My Account",
          tabBarIcon: ({ focused, color, size }) => (
            (<AvatarImage
			src={userDetails?.user.image}
              name={userDetails?.user.username}
              round={true}
              color={COLORS.primary}
              size={30}
            />)
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
