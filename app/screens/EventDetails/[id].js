import {  React,useEffect,useState } from "react";
import { SafeAreaView, View,Image,ToastAndroid, ScrollView } from "react-native";
import { useLocalSearchParams,useRouter } from "expo-router";
import { Text } from "react-native-paper";
import  createAxiosInstance  from "../../utils/api";
import CustomButton from "../../components/atoms/CustomButton";
import CustomImage from "../../components/atoms/CustomImage";

export default function CreateEventTicket() {

  const [data, setData] = useState({});

  const router = useRouter();


  
  const id = useLocalSearchParams().id;

  const fetchData = async (id) => {
    let api = await createAxiosInstance();
    const queryParams = {
      event_id: `${id}` // Replace '123' with the actual event ID you want to retrieve
    };
    let response = await api.get(`/events/getEventDetailsbyEventId`,queryParams);
    
    if (response.status === 200) {
      console.log("inside api call")
      //send to login page here
      setData(response.data);
    } else {
      setLoading(false);
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  };

useEffect(() => {
  fetchData(id);
},[])



  console.log(id);
  return (
    // <SafeAreaView>
    //   <Stack.Screen
    //     options={{
    //       headerShown: false,
    //     }}
    //   />
      <ScrollView style={{maxHeight:"2000"}}>
        <View>
        <CustomImage  height={300} width={'100%'} src={data.image} />
        </View>
        <View style={{marginHorizontal:20,flex:1,flexDirection: 'colummn'}} >
                  <Text style={{ paddingVertical: 10 }} variant="titleLarge">
                    {data.title}
                  </Text>
                  <Text style={{ paddingVertical: 5 }} variant="bodyMedium">Event Description : {data.description}{process.env.EXPO_PUBLIC_IMAGE_URL}</Text>
                  <Text style={{ paddingVertical: 5 }} variant="bodyMedium">
                    Event Starting on {new Date(data.start_date).toDateString()} from {new Date(data.start_time).toLocaleTimeString()} to {new Date(data.end_time).toLocaleTimeString()}
                  </Text>
                  {data.event_location_type === "OFFLINE" ? (
                    <>
                      <Text style={{ paddingVertical: 5 }}>Event Location : {data.event_location}</Text>
                    </>
                  ) : (
                    <Text style={{ paddingVertical: 5 }}>Location : OFFLINE</Text>
                  )}
                  <Text style={{ paddingVertical: 5 }} variant="bodyMedium">
                    Event Type : {data.event_type}
                  </Text>
                  <Text style={{ paddingVertical: 5 }} variant="bodyMedium">Event Status : {data.event_status}</Text>
                  {/* <Text variant="bodyMedium">Published On : {new Date(item.created_at).toDateString()}</Text> */}
                  <View style={{marginTop:100}}>
          <CustomButton onPress={()=>router.push({pathname:`/screens/TicketDetails/${data.event_id}`})} title={'Book Event'}/>
        </View>
        </View>

        
      </ScrollView>
        
    //   <View style={{ marginBottom: 40 }}></View>
    // </SafeAreaView>
  );
}
