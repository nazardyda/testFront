import './styles/App.css';
import React, {useMemo, useRef, useState} from "react";
import * as events from "events";
import Counter from "./components/Counter";
import СlassCounter from "./components/СlassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostsButton from "./components/UI/Button/PostsButton";
import InputPosts from "./components/UI/input/InputPosts";
import addNewPosts from "./components/UI/Button/PostsButton";
import PostForm from "./components/PostForm";
import PostSelect from "./components/UI/Select/PostSelect";
import PostFilter from "./components/PostFilter";
import PostModal from "./components/UI/modal/PostModal";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'AJavaScript', body: 'CDescription'},
        {id: 2, title: 'BJavaScript 2', body: 'BDescription'},
        {id: 3, title: 'CJavaScript 3', body: 'ADescription'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        console.log("GET SORTED WORK")
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function fetchPosts() {

    }

    return (
        <div className="App">
            <PostsButton styles={{marginTop: 30}} onClick={()=> setModal(true)}>
                Add new Post
            </PostsButton>
            <PostModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
                <hr style={{margin: '15px'}}/>
            </PostModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts about JS'}/>
        </div>
    );
}

export default App;
