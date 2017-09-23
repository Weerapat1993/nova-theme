import { Platform } from 'react-native'

export const initalTheme = {
  COLOR: {
    PRIMARY: '#39C',
    DEFAULT: '#eee',
    WHITE: '#fff',
    BLACK: '#333',
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