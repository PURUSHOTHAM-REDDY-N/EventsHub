import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Stack } from 'expo-router';
import { COLORS } from '../../../constants';
import React from 'react'



export default function verification() {
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {/* Welcome Text   */}
      <View style={{ marginTop: 65 }}>
        <Text style={styles.welcomeText}>Verification Code</Text>
        <Text style={styles.subText}>Enter 6 digit verification code sent to your email or phone number</Text>
      </View>
      {/* Login Form Component */}
      {/* <LoginForm /> */}
      {/* divider with Text */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop:28 }}>
        <View style={{ flex: 1, height: 2, backgroundColor: COLORS.grey1 }} />
        <View>
          <Text style={styles.dividerText}>or login with</Text>
        </View>
        <View style={{ flex: 1, height: 2, backgroundColor: COLORS.grey1 }} />
      </View>
      
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    safeareaContainer: {
      flex: 1,
      height: 10,
      backgroundColor: "white",
      paddingHorizontal: 18,
    },
    welcomeText: {
      color: COLORS.black,
      fontSize: 24,
      fontWeight: "500",
      textAlign: "center"
    },
    subText: {
      marginTop: 4,
      fontSize: 16,
      textAlign: "center",
      color: COLORS.grey1,
    },
    dividerText:{
      fontSize:14,
      fontWeight:"500",
      color:COLORS.black,
      width: 100, textAlign: "center"
    },
    customButton:{
      backgroundColor:"white",
      color:COLORS.black,
      borderColor:"black"
    },
    signUpText:{
      fontWeight:"500",
      fontSize:14,
      color:COLORS.grey1
      
    }
  });
  
  