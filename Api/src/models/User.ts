import { prop,getModelForClass } from "@typegoose/typegoose"

class User {
    @prop()
    name: string

    @prop()
    email:string

    @prop()
    password:string

    @prop()
    img: string

}

const userModel = getModelForClass(User)

export default userModel