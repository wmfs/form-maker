'use strict'

const yaml = require('js-yaml')
const fs = require('fs')

module.exports = function yamlToJs (yamlPath) {
  // js-yaml 4+ removed safeLoad; load is now safe by default
  return yaml.load(fs.readFileSync(yamlPath, 'utf8'))
}
