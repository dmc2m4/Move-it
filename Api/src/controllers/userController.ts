import User from '../models/User'

const newUser = async (value:{
    name:string,
    email:string,
    password: string,
    img:string
}) => {
    const user = new User({
        name: value.name,
        email: value.email,
        password: value.password,
        img: value.img
    });

    await user.save()
}

const allUsers = async () => {
    const users = await User.find();
    return users
}

const findUserByEmail = async (value: {
    email: string
}) => {
    const user = await User.findOne({email: value.email})
    return user
}

const updateUser = async (value:{
    name: string,
    email:string,
    password: string,
    img:string
}) => {
    const user = await User.findOneAndUpdate ({email:value.email},
        {name: value.name,
        email:value.email,
        password: value.password,
        img:value.img})

    return user
}

const deleteUser = async (value: {
    email: string
}) => {
    await User.findOneAndDelete({email:value.email})
}

export default {
    newUser,
    allUsers,
    findUserByEmail,
    updateUser,
    deleteUser
}