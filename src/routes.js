import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, IconButton } from './components'
import { COLOR } from './assets'


const styles = StyleSheet.create({
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
  }
});

const App = () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
    <View style={styles.row}>
      <Button 
        title='Button'
        color='#0f9d58'
        onPress={() => alert('Button')}
      />
      <Button 
        title='Flat'
        color='#0f9d58'
        onPress={() => alert('Button')}
        flat
        rounded
      />
      <Button 
        title='Outline'
        color='#0f9d58'
        onPress={() => alert('Button')}
        outline
        rounded
      />
    </View> 
    <View style={styles.row}>
      <Button 
        title='Disabled'
        color='#0f9d58'
        onPress={() => alert('Button')}
        disabled
        rounded
      />
      <Button 
        title='Loading'
        color='#0f9d58'
        onPress={() => alert('Loading')}
        loading
        rounded
      />
      <Button 
        icon='done'
        title='Icon'
        color='#0f9d58'
        onPress={() => alert('Icon Button')}
        rounded
      />      
    </View>   
    <View style={styles.row}>
      <Button 
        icon='done'
        iconPosition='left'
        title='Icon Left'
        color='#0f9d58'
        onPress={() => alert('Icon Button')}
        rounded
        flat
      />
      <IconButton 
        name='done'
        color='#0f9d58'
        onPress={() => alert('Icon Button')}
      />
      <IconButton 
        name='done'
        color='#0f9d58'
        onPress={() => alert('Icon Button')}
        flat
      />
      <IconButton
        name='loading'
        onPress={() => alert('Icon Button')}
        disabled
      />
      <Button 
        icon='done'
        iconPosition='right'
        title='Icon Right'
        color='#0f9d58'
        onPress={() => alert('Icon Button')}
        rounded
        disabled
      />
    </View>
  </View>
)

export default App
