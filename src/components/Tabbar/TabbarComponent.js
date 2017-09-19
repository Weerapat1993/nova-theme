import React from 'react'
import PropTypes from 'prop-types'

const TabbarComponent = (props) => {
  const Component = props.component
  return (
    <Component {...props} />
  )
}

TabbarComponent.propTypes = {
  component: PropTypes.func.isRequired,
}

export default TabbarComponent