import {prop, getModelForClass, modelOptions, Ref} from "@typegoose/typegoose";
import {User} from "./User"

@modelOptions ({
    schemaOptions:{
        timestamps: true,
        _id:false
    }
})
export class Comment {

    @prop()
    text: string;

    @prop({ref: () => User})
    user: Ref<User>
}

const commentModel = getModelForClass(Comment);

export default commentModel