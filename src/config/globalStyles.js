const globalStyles = {
  flex: {
    flex: 1,
  },
  bgColor: (color) => ({
    backgroundColor: color || 'transparent'
  }),
  color: (color) => ({
    color
  }),
  fontSize: (size) => ({
    fontSize: size || 16
  }),
  paddingHorizontal: (value) => ({
    paddingHorizontal: value
  }),
  paddingVertical: (value) => ({
    paddingVertical: value
  }),
  margin: (value) => ({
    margin: value
  }),
  marginLeft: (value) => ({
    marginLeft: value
  }),
  marginTop: (value) => ({
    marginTop: value
  }),
  marginRight: (value) => ({
    marginRight: value
  }),
  marginBottom: (value) => ({
    marginBottom: value
  }),
  padding: (value) => ({
    padding: value
  }),
  size: (value) => ({
    width: value,
    height: value,
  })
}

export default globalStyles