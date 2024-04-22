import { View, Text , SafeAreaView , StyleSheet , ScrollView } from 'react-native'
import { Stack, useRouter,router } from "expo-router";
import React from 'react'
import { COLORS } from '../../../constants'
import CustomButton from '../../components/atoms/CustomButton';
import CustomOutlinebtn from '../../components/atoms/CustomOutlinebtn';
import { Ionicons } from "@expo/vector-icons";
import SignUpForm from '../../components/forms/SignUpForm';



export default function signup() {
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView keyboardShouldPersistTaps='handled'>

    {/* Welcome Text   */}
    <View style={{ marginTop: 65 }}>
        <Text style={styles.welcomeText}>Welcome! to EventsHub</Text>
        <Text style={styles.subText}>Sign up to create account</Text>
    </View>
    {/* SignUp Form Component */}
    <SignUpForm/>
      {/* divider with Text */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop:28 }}>
        <View style={{ flex: 1, height: 2, backgroundColor: COLORS.grey1 }} />
        <View>
          <Text style={styles.dividerText}>or</Text>
        </View>
        <View style={{ flex: 1, height: 2, backgroundColor: COLORS.grey1 }} />
      </View>
      {/* social Login */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop:28 }}>
      <CustomOutlinebtn onPress={()=>router.push('screens/auth/login')} style={styles.customButton} title="Login" />
      </View>
      {/* Login text */}
      {/* <View style={{marginTop:24,flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Text style={styles.signUpText}>Already have an account? </Text>
        <Text onPress={()=>router.back()} style={[styles.signUpText,{textDecorationLine:"underline",color:COLORS.primary}]}>Login</Text>
      </View> */}
</ScrollView>
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
      },
      subText: {
        marginTop: 4,
        fontSize: 16,
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
})