import { prop,getModelForClass } from "@typegoose/typegoose"

class User {
    @prop({required: true, trim:true})
    name: string

    @prop({required: true, trim:true})
    email:string

    @prop({required: true, trim:true})
    password:string

    @prop({default:"https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png", trim:true})
    img: string

}

const userModel = getModelForClass(User)

export default userModel