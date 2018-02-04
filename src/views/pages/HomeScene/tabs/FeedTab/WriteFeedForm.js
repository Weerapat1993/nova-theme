//import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { View, Dimensions } from 'react-native'
import { Flex, Button, InputForm, Card, CardContent, CardFooter, Icon } from '../../../../components'
import { COLOR } from '../../../../assets'
// import { feedValidation } from '../../../../redux/feed'
import styles from './styles'


const WriteFeedForm = ({ handleSubmit, theme, pristine, submitting, handleClearData }) => {
  const { width } = Dimensions.get('window')
  return (
    <Card>
      <CardContent style={styles.contentStyles}>
        <Icon name='account-circle' size={48} color={COLOR.DISABLED}  />
        <View style={styles.flex}>
          <Field name='message' component={InputForm} placeholder='ค้นหา Repository ที่ต้องการ' themeColor={COLOR.DISABLED} isUnderline multiline />
        </View>
      </CardContent>
      <CardFooter padding={0}>
        <View style={styles.flexRow(width)}>
          <Flex size={1} align='center'>
            <Button
              icon='delete'
              title='Clear'
              underlayColor='#eee'
              color={theme.DISABLED}
              flat
              onPress={() => handleClearData()}
            />
          </Flex>
          <Flex size={1} align='center'>
            <Button
              icon='search'
              iconPosition='right'
              title='Search'
              underlayColor='#eee'
              color={theme.DISABLED}
              flat
              disabled={pristine || submitting}
              onPress={handleSubmit}
            />
          </Flex>
        </View>
      </CardFooter>
    </Card>
  )
}

WriteFeedForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleClearData: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
}

//make this component available to the app
export default reduxForm({
  form: 'writeFeed', // a unique name for this form
  // validate: feedValidation,
})(WriteFeedForm)
