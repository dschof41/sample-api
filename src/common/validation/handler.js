
const validate = (req, res, next) => (schema) =>{
    // call validate service
    console.log(`Validate: against - ${schema ? schema : 'params'}`)
    // check for params vs body
    // for each param, validate the value against the schema schema referenced in the params definition, the schema and param names should match!
    // a POST should validate against the schema arg
}