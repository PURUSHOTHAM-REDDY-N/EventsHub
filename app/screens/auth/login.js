import { SafeAreaView, ScrollView, View, Text, StyleSheet,ScrolView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Link } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../../constants";
import LoginForm from "../../components/molecules/LoginForm";
import CustomOutlinebtn from "../../components/atoms/CustomOutlinebtn";


const Login = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>

      {/* Welcome Text   */}
      <View style={{ marginTop: 65 }}>
        <Text style={styles.welcomeText}>Welcome! to EventsHub</Text>
        <Text style={styles.subText}>Login to continue</Text>
      </View>
      {/* Login Form Component */}
      <LoginForm />
      {/* divider with Text */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop:28 }}>
        <View style={{ flex: 1, height: 2, backgroundColor: COLORS.grey1 }} />
        <View>
          <Text style={styles.dividerText}>or</Text>
        </View>
        <View style={{ flex: 1, height: 2, backgroundColor: COLORS.grey1 }} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop:28 }}>
      <CustomOutlinebtn onPress={()=>router.push('screens/auth/Signup')} style={styles.customButton} title="Sign Up" />
      </View>
      
      </ScrollView>
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
