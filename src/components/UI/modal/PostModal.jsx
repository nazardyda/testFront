import React from 'react';
import classes from "./PostModal.modul.css";

const PostModal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.postModal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.postModalContent}>
                {children}
            </div>
        </div>
    );
};

export default PostModal;