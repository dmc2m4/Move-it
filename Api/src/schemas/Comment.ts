import {prop, getModelForClass, modelOptions} from "@typegoose/typegoose";

@modelOptions ({
    schemaOptions:{
        timestamps: true,
        _id:false
    }
})
export class Comment {

    @prop()
    text: string;
}

const commentModel = getModelForClass(Comment);

export default commentModel