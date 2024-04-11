import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { COLORS } from "../../../constants";
import AvatarImage from "../../components/atoms/AvatarImage";
import SearchBar from "../../components/atoms/SearchBar";
import List from "../../components/atoms/List";
import { Avatar, Button, Card, Text } from "react-native-paper";
import createAxiosInstance from "../../utils/api";
import  {getDataFromStorage}  from "../../utils/storage";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState();
  // get data from the fake api endpoint

  const router = useRouter();

  const fetchData = async (values) => {
    setLoading(true);
    let api = await createAxiosInstance();
    let response = await api.get(`/events/getAllEvents`, {});

    if (response.status === 200) {
      setLoading(false);
      //send to login page here
      setEvents(response.data);
    } else {
      setLoading(false);
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  };

  const fetchUserDetails = async () => {
    const user = await getDataFromStorage("auth");
    setUserDetails(user.user)
    console.log('user here ',user)
  };

  useEffect(() => {
    fetchUserDetails()
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          paddingHorizontal: 10,
        }}
      >
        {userDetails && (
          <>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.lightText}>Hello,</Text>
          

          <Text style={styles.darkAndBold}>Hi {userDetails.username}</Text>
         
        </View>
        <View style={{ flexDirection: "column" }}>
          <Link href={"/screens/profile"}>
            <AvatarImage
              onPress={() => router.push("/profile")}
              size={40}
              name={userDetails.username}
            ></AvatarImage>
          </Link>
        </View>
        </>

      )}
      </View>
        
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          // paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <ScrollView>
          <View style={{ paddingBottom: 200 }}>
            {events.map((item, index) => (
              <View style={{ paddingVertical: 20 }} key={index}>
                <Card
                  onPress={() =>
                    router.push({
                      pathname: `/screens/EventDetails/${item.event_id}`,
                    })
                  }
                  theme={{ colors: { primary: "green" } }}
                >
                  <Card.Cover
                    source={{ uri: "https://i.ibb.co/2cTP70v/event-img.jpg" }}
                  />
                  <Card.Content>
                    <Text style={{ paddingVertical: 10 }} variant="titleLarge">
                      {item.title}
                    </Text>
                    <Text variant="bodyMedium">{item.description}</Text>
                    <Text variant="bodyMedium">
                      Event Starting on{" "}
                      {new Date(item.start_date).toDateString()}
                    </Text>
                    {item.event_location_type === "OFFLINE" ? (
                      <>
                        <Text>Event Location : {item.event_location}</Text>
                      </>
                    ) : (
                      <Text>Location : OFFLINE</Text>
                    )}
                    {/* <Text variant="bodyMedium">Published On : {new Date(item.created_at).toDateString()}</Text> */}
                  </Card.Content>
                </Card>
              </View>
            ))}
          </View>
        </ScrollView>
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
  lightText: {
    color: COLORS.grey1,
  },
  darkAndBold: {
    color: COLORS.black,
    fontWeight: "500",
    fontSize: 18,
  },
});

export default Home;
