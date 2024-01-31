import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Link } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 0, height: 10 }}>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <View>
        <Link href="screens/auth/login">About</Link>
        {/* ...other links */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
