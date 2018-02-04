const styles = {
  flexRow: (width) => ({
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  flex: {
    flex: 1
  },
  contentStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
  },
  marginTop: (marginTop) => ({
    marginTop,
  }),
  opacity: (opacity) => ({
    opacity,
  })
}

export default styles