import { prop, getModelForClass } from "@typegoose/typegoose";
import {Comment} from "./Comment"

export class Post {

    @prop()
    description: string;

    @prop()
    img: string[];

    @prop({type : () => [Comment]})
    comments: Comment[];
}

const postModel = getModelForClass(Post);

export default postModel