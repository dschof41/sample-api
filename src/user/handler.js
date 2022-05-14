import userService from '#src/user/service'
// transport the request and response
// handle http responses and other express stuff

const addUser = async (req, res, next) => {
    const user = req.body
    console.log(`User Handler:addUser: start - ${user.userId}`)
    const response = userService.addUser(user)
    console.log(`User Handler:addUser: end - ${user.userId}`)
    res.status(201).json(response)
}

const getUser = async (req, res, next) => {
    const {userId} = req.params
    console.log(`User Handler:getUser: start - ${userId}`)
    const user = userService.getUser(userId)
    console.log(`User Handler: End getting user ${userId}`)
    res.status(200).json(user)
}

export default {addUser, getUser}