import { prop, getModelForClass } from "@typegoose/typegoose";

class Post {

    @prop()
    description: string

    @prop()
    img: string[];
}

const postModel = getModelForClass(Post);

export default postModel