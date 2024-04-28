import { Redirect } from "expo-router";
import messaging from '@react-native-firebase/messaging';
import { Alert,PermissionsAndroid } from "react-native";
import { useEffect } from "react";

const authRoute = 0

export default function Index() {

    const requestUserPermission = async ()=> {
        

        const authStatus = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);;
        // const enabled =
        // authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        // authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
    //   if (enabled) {
        console.log('Authorization status:', authStatus);
    //   }
      }
    
      useEffect(()=>{
        if(requestUserPermission()){
          messaging().getToken.then(token=>{
              console.log('firebase messaging token ',token)
          })
      }
      else{
          console.log('permission issue')
      }
    
      // check whether initial notification is available
      messaging().getInitialNotification().then(async (remoteMessage)=>{
        if(remoteMessage){
          console.log('Notification caused app to open from quit state :',remoteMessage.notification)
        }
      })
    
      // Assume a message notification contains a type property in the data payload of screen to open
    
      messaging().onNotificationOpenedApp((remoteMessage)=>{
        if(remoteMessage){
          console.log('Notification caused app to open from Background state :',remoteMessage.notification)
        }
      })
    
      // Register background handler
      messaging().setBackgroundMessageHandler(async (remoteMessage)=>{
        if(remoteMessage){
          console.log('Mesage handled in the background :',remoteMessage.notification)
        }
      } )
    
      const unsubscribe = messaging().onMessage(async (remoteMessage)=>{
        Alert.alert("A new FCM message arrived",JSON.stringify(remoteMessage))
      })
      return unsubscribe
      },[])
    
    return authRoute?<Redirect href="screens/profile" />:<Redirect href="screens/auth" />;
}