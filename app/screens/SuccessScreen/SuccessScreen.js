import React from 'react'
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import CustomButton from '../../components/atoms/CustomButton';

export default function SuccessScreen() {

    const router = useRouter();

  return (
    <>
    <LottieView
        style={{ width: "200", height: 500, justifyContent: 'center', alignItems: 'center', }}
          source={require("../../../assets/animations/success.json")}
          autoPlay
          loop
        />
    <View style={{paddingHorizontal:10}}>

    <CustomButton onPress={()=>router.dismissAll()} title={'Go Home'}/>
    </View>
    </>
  )
}
