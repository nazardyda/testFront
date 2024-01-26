import React from 'react';
import InputPosts from "./UI/input/InputPosts";
import PostSelect from "./UI/Select/PostSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <InputPosts
                value={filter.query}
                placeholder="Search"
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <PostSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort By"
                options={[
                    {value: 'title', name: "Title"},
                    {value: 'body', name: "Description"}
                ]}
            />
        </div>
    );
};

export default PostFilter;