import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { COLORS } from "../../../../constants";
import { Avatar, Button, Card, Text } from "react-native-paper";
import createAxiosInstance from "../../../utils/api";
import * as Sharing from 'expo-sharing';
import Share from 'expo-sharing'
import CustomButton from "../../../components/atoms/CustomButton";



const UserCreatedEvents = () => {
  
  const [loading, setLoading] = useState(false);
  const [ticketsData, setTicketsData] = useState([]);
  // get data from the fake api endpoint

  const router = useRouter();

  const fetchData = async (values) => {
    setLoading(true);
    let api = await createAxiosInstance();
    let response = await api.get(`/eventTicket/getPurchasedTicketsByAccount`, {});

    if (response.status === 200) {
      setLoading(false);
      //send to login page here
      setTicketsData(response.data);
    } else {
      setLoading(false);
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const shareText = async (text) => {
    if (!await Sharing.isAvailableAsync()) {
        alert("Sharing is not available on this platform");
        return;
    }


    try {
      await Share.share({
          message: text
      });
  } catch (error) {
      console.error('Error sharing:', error);
  }
};
  

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
            {ticketsData.map((item, index) => (
              <View style={{ paddingVertical: 20 }} key={index}>
                <Card
                  theme={{ colors: { primary: "green" } }}
                >
                  <Card.Cover
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpc1Laxi8M96n8ExWbgkWYHRd8WNF64OyIc6SPFVrrA&s" }}
                  />
                  <Card.Content>
                    <Text style={{ paddingVertical: 10 }} variant="titleLarge">
                      Ticket Id : {item.purchase_ticket_id}
                    </Text>
                    <Text variant="bodyMedium">Ticket Name : {item.ticket_name}</Text>
                    <Text variant="bodyMedium">Tickets Purchased :  {item.purchase_quantity}</Text>
                    <Text variant="bodyMedium">Tickets Type :  {item.ticket_type}</Text>
                    <CustomButton onPress={()=>shareText()} title={'share'}/>
                    
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
