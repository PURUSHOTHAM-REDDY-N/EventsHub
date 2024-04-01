import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Link } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <SafeAreaView >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={{marginBottom:40}}>

        <Link href="/profile/settings">About</Link>
        {/* ...other links */}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
