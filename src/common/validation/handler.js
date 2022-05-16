import validateRequest from '#src/common/validation/service'

const validate = (req, res, next) => (schema) =>{
    // call validate service
    console.log(`Validate: start - ${schema ? schema : 'params'}`)
    const errors = validateRequest(schema ? req.body : req.params)
    if (errors) res.status(400).json(errors)
    console.log(`Validate: end`)
    next()
    // check for params vs body
    // for each param, validate the value against the schema schema referenced in the params definition, the schema and param names should match!
    // a POST should validate against the schema arg
}

export default {validate}