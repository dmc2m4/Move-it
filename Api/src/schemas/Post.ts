import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import {Comment} from "./Comment"
import {User} from "./User";

export class Post {

    @prop()
    description: string;

    @prop()
    img: string[];

    @prop({type : () => [Comment]})
    comments: Comment[];

    @prop({ref: () => User})
    user: Ref<User>
}

const postModel = getModelForClass(Post);

export default postModel