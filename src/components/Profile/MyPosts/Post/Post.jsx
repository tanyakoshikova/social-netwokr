import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
                <div className={s.item}>
                    <img src='https://www.maxpixel.net/static/photo/640/Jacket-Avatar-The-Dummy-Head-Foot-User-Man-Tie-659651.png' alt={"photo users"}/>
                    {props.message}
                    <div>
                        <span>like: {props.likesCount}</span>
                    </div>
                </div>
    )
}

export default Post;
