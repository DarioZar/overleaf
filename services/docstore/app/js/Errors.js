// import Errors from object-persistor to pass instanceof checks
const OError = require('@overleaf/o-error')
const { Errors } = require('@overleaf/object-persistor')

class Md5MismatchError extends OError {}

class DocModifiedError extends OError {}

class DocRevValueError extends OError {}

class DocVersionDecrementedError extends OError {}

class DocWithoutLinesError extends OError {}

module.exports = {
  Md5MismatchError,
  DocModifiedError,
  DocRevValueError,
  DocVersionDecrementedError,
  DocWithoutLinesError,
  ...Errors,
}
