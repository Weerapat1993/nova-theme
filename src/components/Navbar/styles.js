import { Platform } from 'react-native'
import { COLOR } from '../../assets'
import Theme from '../../config/theme'

const { STATUS_BAR } = Theme
const { PRIMARY } = Theme.COLOR

export default {
  statusBar: {
    flex: 1,
    paddingTop: STATUS_BAR.HEIGHT,
  },
  container: {
    flex: 1
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: COLOR.WHITE,
    fontSize: 20,
  },
  navbarView: height => ({
    width: '100%',
    height,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: PRIMARY,
    flexDirection: 'row',
  }),
}