import {  React,useEffect,useState } from "react";
import { SafeAreaView, View,Image,ToastAndroid, ScrollView } from "react-native";
import { useLocalSearchParams,useRouter } from "expo-router";
import { Text } from "react-native-paper";
import  createAxiosInstance  from "../../utils/api";
import CustomButton from "../../components/atoms/CustomButton";
// import { BarcodeCreatorView,BarcodeFormat } from "react-native-barcode-creator";
import LottieView from "lottie-react-native";


export default function TicketDetails() {

  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false)

  const router = useRouter();


  
  const id = useLocalSearchParams().id;

  const fetchData = async (id) => {
    let api = await createAxiosInstance();
    const queryParams = {
      event_id: `${id}` 
    };
    let response = await api.get(`/eventTicket/getEventTicketsByEventId`,queryParams);
    
    if (response.status === 200) {
      console.log("inside api call")
      //send to login page here
      console.log(response.data)
      setData(response.data);
    } else {
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  };

  const buyTicket = async (item)=>{

    setLoading(true)

    const value ={
      ticket_id:item.ticket_id,
      available_quantity:item.available_quantity,
      purchase_quantity:"1",
      ticket_name:item.ticket_name,
      ticket_type:item.ticket_type

    }

    console.log("values here",value)

    let api = await createAxiosInstance();
    let response = await api.post(`/eventTicket/purchaseEventTicketByTicketId`,value);
    
    if (response.status === 200) {
      console.log("inside api call")
      ToastAndroid.show("Ticket Purchase Successfull", ToastAndroid.LONG);
      router.push({pathname:`/screens/SuccessScreen/SuccessScreen`})
    } else {
      setLoading(false);
      ToastAndroid.show("backend issue", ToastAndroid.LONG);
    }
  }

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
        {data.map((item, index) => (
          <View key={index}>

          {/* <BarcodeCreatorView
  value={'Hello World'}
  background={'#FFFFFF'}
  foregroundColor={'#000000'}
  format={BarcodeFormat.AZTEC}
  // style={styles.box}
/> */}
{item.ticket_type==='PAID'?<>
<LottieView
        style={{ width: "100", height: 200, justifyContent: 'center', alignItems: 'center', }}
          source={require("../../../assets/animations/paid-ticket.json")}
          autoPlay
          loop
        />
</>:<>
<LottieView
        style={{ width: "100", height: 200, justifyContent: 'center', alignItems: 'center', }}
          source={require("../../../assets/animations/free-ticket.json")}
          autoPlay
          loop
        />
{/* <Image style={{height:200,width:"100"}}  source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpc1Laxi8M96n8ExWbgkWYHRd8WNF64OyIc6SPFVrrA&s" }}/> */}
</>}


        <View style={{marginHorizontal:20,flex:1,flexDirection: 'colummn'}} >
                  <Text style={{ paddingVertical: 10 }} variant="titleLarge">
                  Tiket Name :  {item.ticket_name}
                  </Text>
                  {item.ticket_type==='PAID'?<>
                  <Text style={{ paddingVertical: 5 }} variant="bodyMedium">Ticket Price : ₹{item.ticket_price}</Text>
                  </>:""}
                  
                  <Text style={{ paddingVertical: 5 }} variant="bodyMedium">
                    Ticket Type : {item.ticket_type}
                  </Text>
                  <Text style={{ paddingVertical: 5 }} variant="bodyMedium">Tickets Available : {item.available_quantity}</Text>
                  {/* <Text variant="bodyMedium">Published On : {new Date(item.created_at).toDateString()}</Text> */}
                  <View style={{marginTop:20}}>
                  {item.ticket_type==='FREE'?<>
                  {/* router.push({pathname:`/screens/SuccessScreen/SuccessScreen`}) */}
                  <CustomButton loading={loading} onPress={()=>buyTicket(item)} title={'Get Free Ticket'}/>
                  </>:""}
                  {item.ticket_type==='PAID'?<>
                  <CustomButton loading={loading} onPress={()=>buyTicket(item)} title={'Buy Ticket'}/>
                  </>:""}
          
        </View>
                  
        </View>
          </View>
        ))}
        

        
      </ScrollView>
        
    //   <View style={{ marginBottom: 40 }}></View>
    // </SafeAreaView>
  );
}
