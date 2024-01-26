import React, {useState} from 'react';
import InputPosts from "./UI/input/InputPosts";
import PostsButton from "./UI/Button/PostsButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
    }
    return (
        <div>
            <form>
                <InputPosts
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder={"Name of posts"}
                />
                <InputPosts
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder={"Description of posts"}
                />
                <PostsButton onClick={addNewPost}>Add</PostsButton>
            </form>
        </div>
    );
};

export default PostForm;