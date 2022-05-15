import fs from 'fs'
import yaml from 'js-yaml'

const spec = fs.readFileSync('#root/oas.yaml')

const jsonSchema = yaml.load(spec)

console.log(JSON.stringify(jsonSchema))
// get spec file

// validate a given schema

//export default {validate}