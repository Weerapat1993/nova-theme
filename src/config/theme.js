import { Platform } from 'react-native'

export const initalTheme = {
  COLOR: {
    PRIMARY: '#39C',
    DEFAULT: '#eee',
    WHITE: '#fff',
    BLACK: '#333',
    DISABLED: '#666',
    SUCCESS: '#0A0',
    DANGER: '#F00',
    WARNING: '#FC0',
    INFO: '#3CF',
  },
  STATUS_BAR: {
    HEIGHT: Platform.OS === 'ios' ? 0 : 24
  }
}

class Theme {
  constructor(initalTheme) {
    this.COLOR = initalTheme.COLOR
    this.STATUS_BAR = initalTheme.STATUS_BAR
  }

  setColorPrimary(color) {
    this.COLOR.PRIMARY = color
  } 

  getColor() {
    return this.COLOR
  }
}

export default new Theme(initalTheme)