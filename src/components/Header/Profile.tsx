import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import {
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native'

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  boarder-radius: 15px;
`

const StyledImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`

interface ProfileProps {
  img: ImageSourcePropType
  imgStyle?: StyleProp<ImageStyle>
  imgContainerStyles?: StyleProp<ViewStyle>
  onPress?: (event: GestureResponderEvent) => void | undefined
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imgContainerStyles}>
      <StyledImage style={props.imgStyle} source={props.img} />
    </StyledView>
  )
}

export default Profile
