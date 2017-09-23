import { createValidator, required, email, minLength } from '../../utils'

export const authValidation = createValidator({
  email: [required, email, minLength(6)],
  password: [required, minLength(6)],
})
