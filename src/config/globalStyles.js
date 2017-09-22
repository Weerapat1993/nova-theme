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
}

export default globalStyles