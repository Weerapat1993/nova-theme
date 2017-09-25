import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'

export const getNotifiaionTitle = (error) => {
  switch (error) {
    case 'Network Error':
      return 'การเชื่อมต่อล้มเหลว กรุณาเชื่อมต่ออินเตอร์เน็ต'
    case 'Request failed with status code 404':
      return 'การเชื่อมต่อล้มเหลว กรุณาเชื่อมต่ออินเตอร์เน็ต'
    case 'Request failed with status code 422':
      return 'email หรือ password ไม่ถูกต้อง'
    default: 
      return error
  }
}

class AlertDialog extends Component {
  componentDidMount() {
    const { title, message, actionButtons } = this.props
    Alert.alert(
      title || 'การแจ้งเตือน',
      getNotifiaionTitle(message),
      actionButtons,
      { cancelable: false }
    )
  }

  render = () => null
}

AlertDialog.defaultProps = {
  title: 'การแจ้งเตือน',
  message: null,
  actionButtons: [{ text: 'ตกลง', onPress: null}]
}

AlertDialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  actionButtons: PropTypes.array,
}

export default AlertDialog
