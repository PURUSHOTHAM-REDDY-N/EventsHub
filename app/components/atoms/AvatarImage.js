import React from 'react'
import Avatar from 'react-avatar';
import UserAvatar from 'react-native-user-avatar';




export default function AvatarImage(props) {
  return (
    // <Avatar
    // name={props.alt}
    //   round={props.round}
    //   size={props.size}
    // />'
    <>
      <UserAvatar src={`https://elasticbeanstalk-eu-north-1-992382379395.s3.eu-north-1.amazonaws.com/1713707128363.jpg`}  size={props.size} name={props.name} />
    </>
  )
}
