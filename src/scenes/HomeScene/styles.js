import { COLOR } from '../../assets'

export default {
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  column: {
    flexDirection: 'column',
    margin: 10,
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
  })
}