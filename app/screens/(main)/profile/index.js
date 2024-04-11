import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter,useNavigation } from "expo-router";
import { Link } from "expo-router";
import AvatarImage from "../../../components/atoms/AvatarImage";
import { COLORS } from "../../../../constants";
import CustomButton from "../../../components/atoms/CustomButton";
import { Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import DangerButton from "../../../components/atoms/DangerButton";
import { useState, useEffect } from "react";
import createAxiosInstance from "../../../utils/api";
import { storeDataInStorage } from "../../../utils/storage";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();


  const navigator = useNavigation();


  const fetchData = async (values) => {
    setLoading(true);
    let api = await createAxiosInstance();
    let response = await api.get(`/auth/getAccountDetailsByAccountId`, {});
    if (response.status === 200) {
      setLoading(false);
      setUserDetails(response.data);
      console.log("here", userDetails);
    } else {
      setLoading(false);
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  };

  const logOutUser = async () => {
    await storeDataInStorage("auth", {});
    router.replace("screens/auth")
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView style={{ marginTop: 40, paddingHorizontal: 20 }}>
        {userDetails && (
          <>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AvatarImage
                
                size={100}
                name={userDetails.user.username}
              ></AvatarImage>
              <Text
                style={{ color: COLORS.black, fontSize: 32, fontWeight: 500 }}
              >
                {userDetails?.user.username}
              </Text>
              <Text style={{ color: COLORS.grey1, fontSize: 18 }}>
                {userDetails?.user.email}
              </Text>
              
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
            <Text style={{ color: COLORS.grey1, fontSize: 18 }}>
                Date Of Birth : {new Date(userDetails?.user.dob).toDateString() || 'No Data Available'}
              </Text>
              <Text style={{ color: COLORS.grey1, fontSize: 18 }}>
                Country : {userDetails?.user.country || 'No Data Available'}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <CustomButton onPress={()=>router.push("screens/(main)/profile/EditProfile")} title={"Edit"} />
            </View>
            <View
              style={{
                marginTop: 50,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ marginVertical: 10, fontWeight: 500, fontSize: 18 }}
              >
                Created Events
              </Text>
              <Ionicons
                name={"arrow-forward-outline"}
                size={18}
                color={COLORS.primary}
              />
            </View>
            <Divider />
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ marginVertical: 10, fontWeight: 500, fontSize: 18 }}
              >
                Purchased Tickets
              </Text>
              <Ionicons
                name={"arrow-forward-outline"}
                size={18}
                color={COLORS.primary}
              />
            </View>
            <Divider />
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ marginVertical: 10, fontWeight: 500, fontSize: 18 }}
              >
                Events Attending
              </Text>
              <Ionicons
                name={"arrow-forward-outline"}
                size={18}
                color={COLORS.primary}
              />
            </View>
            <Divider />
            <View
              style={{
                marginTop: 50,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <DangerButton
              onPress={logOutUser}
                iconLeft={
                  <Ionicons
                    name={"power-outline"}
                    size={25}
                    color={COLORS.white}
                  />
                }
                title={"LogOut"}
              />
            </View>
            <Divider />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
