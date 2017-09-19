import React from 'react'
import { Image, Dimensions } from 'react-native'
import Flex from '../Flex'

const styles = {
  imgResponsive: () => {
    const { width } = Dimensions.get('window')
    return {
      width,
      height: 200,
    }
  }
}

const ImageComponent = ({ source, style }) => (
  <Flex align='center'>
    <Image source={source} style={[styles.imgResponsive(), style]} /> 
  </Flex>
)

export default ImageComponent