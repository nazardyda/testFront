import React from 'react';
import classes from "./PostModal.modul.css";

const PostModal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.postModal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={classes.postModalContent} onClick={(e=>e.stopPropagation())}>
                {children}
            </div>
        </div>
    );
};

export default PostModal;