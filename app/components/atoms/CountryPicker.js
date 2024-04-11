import {CountryPicker,CountryButton} from "react-native-country-codes-picker";
import {TouchableOpacity,View,Text,Keyboard} from "react-native"
import { useState } from "react";

export default function CountryPickerComponent({initialState,valueChanged}) {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [country, setCountry] = useState('');
  
    const handlePickerPress = item => {
        setCountryCode(item.flag);
        console.log(item)
        setCountry(item.name.en)
        setShow(false);
        valueChanged(item.name.en)
        Keyboard.dismiss();
        };
    return (
      <View style={{height:'100px'}}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
              width: '80%',
              height: 60,
              backgroundColor: 'white',
              padding: 10,
          }}
        >
          {countryCode===''?<>
            <Text style={{
              color: 'black',
              fontSize: 20
          }}>
              ----- Select Country ---
          </Text>
          </>:''}
          <Text style={{
              color: 'black',
              fontSize: 20
          }}>
              {countryCode} {country}
          </Text>
        
        </TouchableOpacity>
  
        <CountryPicker
            searchMessage={'Search here'}
            show={show}
            style={{
              // Styles for whole modal [View]
              modal: {
                height: 425,
                //backgroundColor: 'red',
              },
              // Styles for modal backdrop [View]
              backdrop: {
                backgroundColor: 'transparent',
              },

              textInput: {
                height: 45,
                //borderRadius: 20,
                color: '#1b1212',
              },
              countryName: {
                color: '#1b1212',
                lineHeight: 16,
                fontSize: 14,
              },
              dialCode: {
                color: '#1b1212',
                lineHeight: 16,
                fontSize: 14,
              },
              countryButtonStyles: {
                height: 50,
                //backgroundColor:'#f3f3f3'
              },
            }}
            initialState={initialState}
            pickerButtonOnPress={handlePickerPress}
            onRequestClose={() => {
              setShow(false);
            }}
     />
      </View>
    );
}
