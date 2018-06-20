# Form-maker
[![Tymly Package](https://img.shields.io/badge/tymly-package-blue.svg)](https://tymly.io/)
[![npm (scoped)](https://img.shields.io/npm/v/@wmfs/form-maker.svg)](https://www.npmjs.com/package/@wmfs/form-maker)
[![Build Status](https://travis-ci.org/wmfs/form-maker.svg?branch=master)](https://travis-ci.org/wmfs/form-maker)
[![codecov](https://codecov.io/gh/wmfs/form-maker/branch/master/graph/badge.svg)](https://codecov.io/gh/wmfs/form-maker)
[![CodeFactor](https://www.codefactor.io/repository/github/wmfs/form-maker/badge)](https://www.codefactor.io/repository/github/wmfs/form-maker)
[![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wmfs/tymly/blob/master/packages/pg-concat/LICENSE)

> Generates a form and state machine in JSON format based on a given yaml.

## <a name="tests"></a>Tests
```bash
$ npm test
```

## <a name="usage"></a>Usage

```javascript
const formMaker = require('form-maker')

formMaker (
  {
    namespace: 'test', // the namespace of the model you want to save form data to
    formName: 'peopleForm', // name of the form
    modelName: 'peopleModel', // name of the model that you want to save form data to
    yamlPath: 'path/to/yaml/file'
  },
  function (err, result) {
    // result.form - holds the generated form object
    // result.stateMachine - holds the generated state machine object
  }
)
```

## <a name="license"></a>License
[MIT](https://github.com/wmfs/tymly-runner/blob/master/LICENSE)
