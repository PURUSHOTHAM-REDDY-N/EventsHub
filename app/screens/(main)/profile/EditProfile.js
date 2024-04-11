import React from 'react'
import { Text, View,SafeAreaView,ScrollView } from 'react-native'
import EditProfileForm from '../../../components/molecules/EditProfileForm'
import {Stack} from 'expo-router'

export default function EditProfile() {
  return (
    // <SafeAreaView>
    //   <Stack.Screen
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
      <ScrollView >

      
    <View>
        <EditProfileForm/>
    </View>
    </ScrollView>
    //   </SafeAreaView>
  )
}
