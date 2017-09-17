import { Platform } from 'react-native'

const Theme = {
  COLOR: {
    PRIMARY: '#0f9d58',
    DEFAULT: '#eee',
  },
  STATUS_BAR: {
    HEIGHT: Platform.OS === 'ios' ? 0 : 24
  }
}

export default Theme