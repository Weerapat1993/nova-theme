import { COLOR } from '../../assets'
import Theme from '../../config/theme'

const { PRIMARY } = Theme.getColor()

export default {
  tabbarContainer: {
    width: '100%',
    height: 50,
    backgroundColor: COLOR.WHITE,
    borderBottomWidth: 3,
    borderBottomColor: PRIMARY,
    flexDirection: 'row'
  },
  tabbarItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: (color) => ({
    color
  }) 
}