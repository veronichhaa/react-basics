import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className="post__comment">
            <h3>{comment.name}</h3>
            <div className="comment__email">{comment.email}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export default Comment;