import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import {Post} from './Post'

export class User {
    @prop({required: true, trim: true })
    name: string;

    @prop({required: true, trim: true, unique: true })
    email: string;

    @prop({required: true, trim: true })
    password: string;

    @prop({default: "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png", trim: true })
    img: string;

    @prop({ ref: () => Post })
    posts: Ref<Post>[];

}

const userModel = getModelForClass(User)

export default userModel