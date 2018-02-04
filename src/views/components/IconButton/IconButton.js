import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const IconButton = (props) => {
  const { loading, name } = props
  if(loading || name === 'loading') {
    return (
      <Button 
        {...props}
        rounded
        loading
      />
    )
  }
  return (
    <Button 
      {...props}
      icon={props.name}
      rounded
    />
  )
}

IconButton.defaultProps = {
  color: null,
  flat: false,
  outline: false,
  loading: false,
  disabled: false,
}

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  flat: PropTypes.bool,
  outline: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default IconButton
