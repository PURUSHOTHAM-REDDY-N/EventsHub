import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { COLORS } from "../../../../constants";
import { Avatar, Button, Card, Text } from "react-native-paper";
import createAxiosInstance from "../../../utils/api";


const UserCreatedEvents = () => {
  
  const [loading, setLoading] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  // get data from the fake api endpoint

  const router = useRouter();

  const fetchData = async (values) => {
    setLoading(true);
    let api = await createAxiosInstance();
    let response = await api.get(`/events/getAllEventByUserAccount`, {});

    if (response.status === 200) {
      setLoading(false);
      //send to login page here
      setUserEvents(response.data);
    } else {
      setLoading(false);
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    // <SafeAreaView style={styles.safeareaContainer}>
    //   <Stack.Screen
    //     options={{
    //       headerShown: false,
    //     }}
    //   /> 
        
      <View
        style={{
          justifyContent: "space-between",
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <ScrollView>
          <View style={{ paddingBottom: 200 }}>
            {userEvents.map((item, index) => (
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
    // </SafeAreaView>
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

export default UserCreatedEvents;
