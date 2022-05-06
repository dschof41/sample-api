import userService from '#src/user/service'
// transport the request and response
// handle http responses and other express stuff

const addUser = async (req, res, next) => {
    console.log('Handler: start adding user')
    // call service
    console.log('Handler: start adding user')
}

const getUser = async (req, res, next) => {
    const {userId} = req.params
    console.log(`User Handler: Start getting user: ${userId}`)
    const user = userService.getUser(userId)
    console.log('User Handler: End getting user')
    res.status(200).json(user)
}

export default {addUser, getUser}