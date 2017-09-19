import React from 'react'
import { ScrollView, Text } from 'react-native'
import styles from '../styles'
import { COLOR } from '../../../assets'
import { Paragraph, TextHeader } from '../../../components'

const FontTab = ({ theme }) => (
  <ScrollView style={styles.backgroundColor(COLOR.WHITE)}>
    <Paragraph>
      <Text>Font Tab</Text>
    </Paragraph>
    <Paragraph>
      <TextHeader title={'Text Header'} size={36} color={theme.PRIMARY} bold />  
      <TextHeader title={'Text Header'} size={32} color={theme.PRIMARY} bold />  
      <TextHeader title={'Text Header'} size={24} color={theme.PRIMARY} bold />  
      <TextHeader title={'Text Header'} size={20} color={theme.PRIMARY} bold />  
      <TextHeader title={'Text Header'} size={18} color={theme.PRIMARY} bold />  
      <TextHeader title={'Text Header'} size={16} color={theme.PRIMARY} />  
    </Paragraph>
  </ScrollView>
)

export default FontTab