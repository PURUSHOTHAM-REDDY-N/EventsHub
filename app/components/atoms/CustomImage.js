import React from 'react'
import {Image} from 'react-native';




export default function CustomImage(props) {
  return (
    <>
    {props.src?<Image style={{height:props.height,width:props.width}} source={{ uri: `https://elasticbeanstalk-eu-north-1-992382379395.s3.eu-north-1.amazonaws.com/${props.src}` }}/>:
    <Image style={{height:props.height,width:props.width}} source={{ uri: "https://i.ibb.co/2cTP70v/event-img.jpg" }}/>}
    
    </>
  )
}
