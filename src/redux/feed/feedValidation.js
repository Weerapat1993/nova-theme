import { createValidator, required } from '../../utils'

const feedValidation = createValidator({
  message: [required],
})

export { feedValidation }