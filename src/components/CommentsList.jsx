import React from 'react';
import Comment from "./Comment";

const CommentsList = ({comments}) => {
    return (
        <div className="post__comments">
            {comments.map((comm) => <Comment key={comm.id} comment={comm}/>)}
        </div>
    );
};

export default CommentsList;