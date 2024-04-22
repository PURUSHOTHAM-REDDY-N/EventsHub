import React from 'react'
import { Stack } from "expo-router";


export default function _layout() {
  return (
    <Stack initialRouteName="index">
        <Stack.Screen name='index' options={{headerTitle:"profile"}}/>
        <Stack.Screen name='settings' options={{headerTitle:"settings"}}/>
        <Stack.Screen name='EditProfile' options={{headerTitle:"EditProfile"}}/>
        <Stack.Screen name='UserCreatedEvents' options={{headerTitle:"UserCreatedEvents"}}/>
    </Stack>
  )
}
