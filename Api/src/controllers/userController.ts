import User from '../models/User'

const newUser = async (value:any) => {
    const user = new User({
        name: value.name,
        email: value.email,
        password: value.password,
        img: value.img
    });

    await user.save()
}

export default {
    newUser
}