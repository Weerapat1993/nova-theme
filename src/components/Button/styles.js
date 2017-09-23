const COLOR = {
  BLACK: '#333',
  WHITE: '#fff',
  GREY: '#666',
  GREEN: '#0f9d58'
}

const { 
  BLACK,
  WHITE,
  GREY,
} = COLOR

export default {
  buttonView: (color, rounded, flat, outline, padding) => ({
    padding,
    backgroundColor: (flat || outline) ? 'transparent' : color,
    borderRadius: rounded ? 50 : 0,
    borderWidth: outline ? 2 : 0,
    borderColor: outline ? color : BLACK,
  }),
  buttonText: (color, flat, outline) => ({
    color: (flat || outline) ? color : WHITE
  }),
  buttonDisableText: (outline) => ({
    color: outline ? 'rgba(255,255,255,0.5)' : GREY,
  }),
  buttonTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginRight: (value) => ({
    marginRight: value
  }),
  marginLeft: (value) => ({
    marginLeft: value
  }),
  marginHorizontal: (value) => ({
    marginHorizontal: value
  }),
}