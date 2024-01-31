import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Link } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../../constants";
import LoginForm from "../../components/molecules/LoginForm";
import CustomButton from "../../components/atoms/CustomButton";
import CustomOutlinebtn from "../../components/atoms/CustomOutlinebtn";
import { Ionicons } from "@expo/vector-icons";


const Login = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {/* Welcome Text   */}
      <View style={{ marginTop: 65 }}>
        <Text style={styles.welcomeText}>Welcome! to EventPlanner</Text>
        <Text style={styles.subText}>Login to continue</Text>
      </View>
      {/* Login Form Component */}
      <LoginForm />
      {/* divider with Text */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop:28 }}>
        <View style={{ flex: 1, height: 2, backgroundColor: COLORS.grey1 }} />
        <View>
          <Text style={styles.dividerText}>or login with</Text>
        </View>
        <View style={{ flex: 1, height: 2, backgroundColor: COLORS.grey1 }} />
      </View>
      {/* social Login */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop:28 }}>
      <CustomOutlinebtn iconLeft={<Ionicons name={"logo-google"} size={18} style={{marginRight:8}} color={COLORS.grey2} />} style={styles.customButton} title="Login Through Google" />
      </View>
      {/* signup text */}
      <View style={{marginTop:24,flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Text style={styles.signUpText}>Don’t have an account? </Text>
        <Text onPress={()=>router.push('screens/auth/signup')} style={[styles.signUpText,{textDecorationLine:"underline",color:COLORS.primary}]}>Sign up</Text>
      </View>
    </SafeAreaView>
  );
};

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
});

export default Login;
