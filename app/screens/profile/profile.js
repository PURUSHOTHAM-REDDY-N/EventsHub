import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

const Profile = () => {
    const router = useRouter()
    return (
        <SafeAreaView style={{ flex: 0 ,height:10 }}>
            

<Stack.Screen
        options={{
          headerShown:false
        }}
      />
    



        </SafeAreaView>
    )
}


export default Profile;