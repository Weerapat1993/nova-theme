import { COLOR } from '../../assets'

export default {
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  column: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  colorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  backgroundColor: (color) => ({
    backgroundColor: color
  }),
  color: (color) => ({
    color
  }),
  fontSize: (size) => ({
    fontSize: size || 16
  }),
}