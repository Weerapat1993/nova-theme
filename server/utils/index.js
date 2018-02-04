
/**
 * Response Data
 * @param {number} code 
 * @param {*} data 
 * @return {{ data: any, code: number, status: string }}
 */
const response = (code, data) => {
  let status = ''
  switch(code) {
    case 200:
      status = 'OK'
      break
    case 400:
      status = 'Not Found'
      break
    default:
      status = 'Error'
  }
  return {
    data,
    code,
    status,
  }
}

exports.response = response