const styles = {
  container: {
    marginTop: 30,
    marginHorizontal: 15,
  },
  colorTheme: {
    height: 60,
    flexDirection: 'row',
  },
  backgroundColor: color => ({
    backgroundColor: color
  }),
  color: color => ({
    color
  }),
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  hederView: {
    marginVertical: 10,
  },
  hederViewCenter: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  child: {
    width: '31%',
    margin: '1%',
    aspectRatio: 1,
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    aspectRatio: 1,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 18,
  }
}

export default styles
