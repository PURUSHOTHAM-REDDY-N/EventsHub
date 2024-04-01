import React from 'react'
import { Stack } from "expo-router";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "/",
  };
  
export default function _layout() {
    
  return (
    <Stack initialRouteName="CreateEventTicket">
        <Stack.Screen name='CreateEventTicket' options={{headerTitle:"",headerShown:false}}/>
    </Stack>
  )
}
