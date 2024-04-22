import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import AvatarImage from "../../components/atoms/AvatarImage";
import { COLORS } from "../../../constants";
import { getDataFromStorage } from "../../utils/storage";


export const unstable_settings = {
  initialRouteName: "/",
};
const user = async ()=> await getDataFromStorage("auth").then((data)=>console.log(data))
const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarHideOnKeyboard: true}}>
			<Tabs.Screen
				name="home"
				options={{
					tabBarShowLabel:false,
					tabBarStyle:{borderCurve:'circular',borderRadius:20,height:70},
					headerTitle: 'Home Screen',
					tabBarIcon:({focused, color, size}) => (
						<Ionicons name={focused ? 'home' : 'home-outline'} color={COLORS.primary} size={30} />)
					
				}}
			/>
			<Tabs.Screen
				name="CreateEvent"
				options={{
					tabBarShowLabel:false,
					tabBarStyle:{borderCurve:'circular',borderRadius:20,height:70},
					headerTitle: 'Create Event Screen',
					tabBarIcon:({focused, color, size}) => (
						<Ionicons name={focused ? 'add-outline' : 'add-circle-outline'} color={COLORS.primary} size={30} />)
					
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarShowLabel:false,
					tabBarStyle:{borderCurve:'circular',borderRadius:20,height:70},
					headerShown:false,
					headerTitle: 'My Account',
					tabBarIcon:({focused, color, size}) => (
						<AvatarImage  name={user.username} round={true} color={COLORS.primary} size={30}/>)
				}}
			/>
		</Tabs>
  )
};

export default Layout;