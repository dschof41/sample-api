import fs from 'fs'
import yaml from 'js-yaml'

const spec = fs.readFileSync('./oas.yaml')

const jsonSchema = yaml.load(spec)

const validate = (schema) => {
    console.log(`Looking for ${schema} schema`)
    console.log(JSON.stringify(jsonSchema))
}

export default { validate }
// get spec file

// validate a given schema

//export default {validate}