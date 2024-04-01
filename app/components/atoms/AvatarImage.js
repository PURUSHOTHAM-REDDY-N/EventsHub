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
      <UserAvatar  size={props.size} name={props.name} />
    </>
  )
}
