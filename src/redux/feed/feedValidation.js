import { createValidator, required } from '../../utils'

export const feedValidation = createValidator({
  message: [required],
})
