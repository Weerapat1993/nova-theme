//import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { View } from 'react-native'
import { Flex, Button, InputForm } from '../../components'
import { authValidation } from '../../../redux/auth'
import Theme from '../../../config/theme'

const COLOR = Theme.getColor()

const styles = {
  marginTop: (margin) => ({
    margin
  }),
}

const LoginForm = ({ handleSubmit, theme, pristine, submitting }) => (
  <Flex bgColor={theme.PRIMARY}>
    <Field name='email' component={InputForm} label='อีเมล์' themeColor={COLOR.WHITE} />
    <Field name='password' secureTextEntry component={InputForm} label='รหัสผ่าน' themeColor={COLOR.WHITE} />
    <View style={styles.marginTop(20)}>
      <Button
        onPress={handleSubmit}
        color={theme.WHITE}
        rounded
        outline
        icon='lock'
        disabled={pristine || submitting}
        title='เข้าสู่ระบบ'
        style={styles.marginTop(20)}
      />
    </View>
  </Flex>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
}

//make this component available to the app
export default reduxForm({
  form: 'auth', // a unique name for this form
  validate: authValidation,
})(LoginForm)
