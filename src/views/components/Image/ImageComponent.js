import React from 'react'
import PropTypes from 'prop-types'
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

const ImageComponent = (props) => (
  <Flex align='center'>
    <Image {...props} style={[styles.imgResponsive(), props.style]} /> 
  </Flex>
)

ImageComponent.defaultProps = {
  style: {},
}

ImageComponent.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  style: PropTypes.object,
}

export default ImageComponent