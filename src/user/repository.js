// bring in mongoose or db client

const getUser = (userId) => {
    console.log(`Repository:getUser: ${userId}`)
    const user = {name: 'Test McTesterson', email:'test@t.com', type:'admin', userId}
    return user
}

const addUser = (user) => {
    console.log(`Repository:addUser: ${user.userId}`)
    const response = {id:123456, message: `${user.userId} has been added`}
    return response
}

export default {getUser, addUser}