import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import CreateEventTicketForm from "../../components/forms/CreateEventTicketForm";

export default function CreateEventTicket() {
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
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View>
          <CreateEventTicketForm event_id={id.id} />
        </View>
      </ScrollView>
      <View style={{ marginBottom: 40 }}></View>
    </SafeAreaView>
  );
}
