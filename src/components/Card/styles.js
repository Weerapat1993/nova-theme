const styles = {
  flexRow: (width) => ({
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  contentStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
  },
  marginTop: (marginTop) => ({
    marginTop,
  }),
  flex: {
    flex: 1,
  },
  padding: (padding) => ({
    padding,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    flexDirection: 'row'
  }),
  cardView: {
    backgroundColor: 'white',
    marginBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  cardHeaderText: {
    padding: 10,
    color: '#666',
    fontWeight: 'bold',
  },
  collaspe: (height) => ({
    height,
    overflow: 'hidden',
  }),
  opacity: (opacity) => ({
    opacity,
    flexDirection: 'row'
  }),
}

export default styles