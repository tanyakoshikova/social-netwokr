import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo (props => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    // let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
 } );

const AddNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newPostText"} validate={[required, maxLengthCreator(10) ]} placeholder={"Post message"}/>
        </div>
        <div>
            <button className={s.addPost}>Add post</button>
        </div>
    </form>
    )
}


const AddPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

export default MyPosts;
