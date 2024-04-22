import {React,useState} from 'react'
import Avatar from 'react-avatar';
import UserAvatar from 'react-native-user-avatar';
import * as ImagePicker from 'expo-image-picker';





export default async function ImagePickerComponent(props) {
    
    
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        return result.assets[0]
}
