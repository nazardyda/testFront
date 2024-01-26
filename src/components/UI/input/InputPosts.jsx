import React from 'react';
import classes from "./InputPosts.module.css";

const InputPosts = ((props, ref) => {
    return (
        <input className={classes.inputPosts} {...props}/>
    );
});

export default InputPosts;