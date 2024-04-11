import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Link } from "expo-router";
import CreateEventForm from "../../components/molecules/CreateEventForm";

const Create = () => {
  const router = useRouter();
  return (
    <SafeAreaView >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView keyboardShouldPersistTaps='handled'>

      <View style={{marginHorizontal:20}}>
        
        <CreateEventForm/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
