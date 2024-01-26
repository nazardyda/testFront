import React from 'react';
import PostsButton from "./UI/Button/PostsButton";

const PostItem = (props) => {
    console.log(props);
    return (
            <div className="post">
                <div className="post__content">
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <PostsButton onClick = {()=>props.remove(props.post)}>
                        Удалити
                    </PostsButton>
                </div>
            </div>
    );
};

export default PostItem;