import React from 'react'
import { Stack } from "expo-router";


export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerTitle:"profile"}}/>
        <Stack.Screen name='settings' options={{headerTitle:"settings"}}/>
    </Stack>
  )
}
