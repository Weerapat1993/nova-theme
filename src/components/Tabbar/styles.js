import { COLOR } from '../../assets'
import Theme from '../../config/theme'

const { PRIMARY } = Theme.getColor()

export default {
  tabbarContainer: (bgColor) => ({
    width: '100%',
    height: 50,
    backgroundColor: bgColor || COLOR.WHITE,
    borderTopWidth: 1,
    borderTopColor: '#ccc', 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
    flexDirection: 'row'
  }),
  tabbarStick: (total, underlinePosition, underlineColor) => ({
    position: 'absolute',
    bottom: 0,
    left: underlinePosition,
    backgroundColor: underlineColor || PRIMARY,
    width: `${100 / total}%`,
    height: 3,
  }),
  tabbarItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgColor: (color) => ({
    backgroundColor: color || 'transparent'
  }),
  color: (color) => ({
    color
  }),
  flex: {
    flex: 1,
  },
  marginTop: (value) => ({
    marginTop: value
  })
}