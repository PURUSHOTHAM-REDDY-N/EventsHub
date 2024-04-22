import React from 'react'
import UserAvatar from 'react-native-user-avatar';
import { Avatar } from 'react-native-paper';




export default function AvatarImage(props) {
  console.log('pops inside avatar',props.image)
  return (
    // <Avatar
    // name={props.alt}
    //   round={props.round}
    //   size={props.size}
    // />'
    <>
    {props.src?<Avatar.Image
    source={{
      uri:
      `https://elasticbeanstalk-eu-north-1-992382379395.s3.eu-north-1.amazonaws.com/${props.src}`,
    }}
    size={props.size}
    />:
    <Avatar.Text size={props.size} label={props.name} />
  
  }
    </>
  )
}
