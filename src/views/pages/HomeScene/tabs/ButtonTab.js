import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../styles'
import globalStyles from '../../../../config/globalStyles'
import { COLOR } from '../../../assets'
import { Paragraph, Button, IconButton, FloatingButton, Flex } from '../../../components'

const ButtonTab = ({ theme }) => (
  <Flex size={1}>
    <ScrollView style={globalStyles.bgColor(COLOR.WHITE)}>
      <Paragraph>
        <Text>Button Tab</Text>
      </Paragraph>
      <Paragraph>
        <View style={styles.row}>
          <Button 
            title='Button'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Button')}
          />
          <Button 
            title='Flat'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Button')}
            flat
            rounded
          />
          <Button 
            title='Outline'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Button')}
            outline
            rounded
          />
        </View> 
        <View style={styles.row}>
          <Button 
            title='Disabled'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Button')}
            disabled
            rounded
          />
          <Button 
            title='Loading'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Loading')}
            loading
            rounded
          />
          <Button 
            icon='done'
            title='Icon'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Icon Button')}
            rounded
          />      
        </View>   
        <View style={styles.row}>
          <Button 
            icon='done'
            iconPosition='left'
            title='Icon Left'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Icon Button')}
            rounded
            flat
          />
          <IconButton 
            name='done'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Icon Button')}
          />
          <IconButton 
            name='done'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Icon Button')}
            flat
          />
          <IconButton
            name='loading'
            underlayColor='#eee'
            onPress={() => alert('Icon Button')}
            disabled
          />
          <Button 
            icon='done'
            iconPosition='right'
            title='Icon Right'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => alert('Icon Button')}
            rounded
            disabled
          />
        </View>
        <View style={styles.row}>
          <Button 
            title='Go to TabExample'
            color={theme.PRIMARY}
            underlayColor='#eee'
            onPress={() => Actions.tabExample()}
          />
        </View>
        
      </Paragraph>
    </ScrollView>
    <FloatingButton 
      name='contacts'
      color={theme.PRIMARY}
      onPress={() => alert('Floating Button')}
    />
  </Flex>
)

export default ButtonTab