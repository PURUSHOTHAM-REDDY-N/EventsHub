import React from 'react'
import { SafeAreaView, View } from 'react-native'
import  {Stack} from 'expo-router'
import { Text } from 'react-native-paper'



export default function CreateEventTicket() {
  return (
    <SafeAreaView >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={{marginBottom:40}}>

      <Text>CreateEventTicket</Text>
        {/* ...other links */}
      </View>
    </SafeAreaView>
  )
}
