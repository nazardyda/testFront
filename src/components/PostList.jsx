import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    if (posts.length === 0) {
        return (
            <h1 style={{textAlign: "center"}}>
                {'NOT FOUND Posts about JS'}
            </h1>
        );
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post, index) =>
                <div>
                    <PostItem remove={remove} number={index + 1} key={post.id} post={post}/>
                </div>
            )}
        </div>
    );
};

export default PostList;