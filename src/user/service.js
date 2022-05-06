import userRepository from '#src/user/repository'
// business logic here

const getUser = (userId) => {
    //get user data
    console.log(`User Service: Starget getUser: ${userId}`)
    const user = userRepository.getUser(userId)
    console.log('User Service: End getUser')
    return user
}

const addUser = (user) => {
    console.log('Service: start process user')
    // add data
    // publish event
    // notify user
    console.log('Service: end process user')
    return
}

export default {getUser}