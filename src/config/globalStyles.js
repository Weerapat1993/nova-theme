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
  padding: (value) => ({
    padding: value
  }),
}

export default globalStyles