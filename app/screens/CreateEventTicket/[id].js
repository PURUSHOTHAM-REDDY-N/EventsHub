import React from "react";
import { SafeAreaView, View,ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import CreateEventTicketForm from "../../components/molecules/CreateEventTicketForm";

export default function CreateEventTicket() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const // The route parameter
    id = useLocalSearchParams(); // An optional search parameter.
  console.log(id);
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>
        <View >
          <CreateEventTicketForm event_id={id.id}/>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 40 }}></View>
    </SafeAreaView>
  );
}
