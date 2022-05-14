import userRepository from '#src/user/repository'
// business logic here

const getUser = (userId) => {
    //get user data
    console.log(`User Service:getUser: start - ${userId}`)
    const user = userRepository.getUser(userId)
    console.log(`User Service:getUser: start - ${userId}`)
    return user
}

const addUser = (user) => {
    console.log('User Service:addUser: start')
    // add data
    const response = userRepository.addUser(user)
    // publish event
    // notify user
    console.log('User Service:addUser: end')
    return response
}

export default {getUser, addUser}