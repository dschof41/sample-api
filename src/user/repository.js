const getUser = (userId) => {
    console.log(`Repository: get user: ${userId}`)
    const user = {name: 'Test McTesterson', email:'test@t.com', type:'admin', userId}
    return user
}

export default {getUser}