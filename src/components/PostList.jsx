import React from "react";
import Post from "./Post";
function PostList({postList, deletePost}) {

    if(postList.length===0) return(
        <h1>Посты не найдены</h1>
    )
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Post List</h1>
            {postList.map((post, idx) =><Post delete={deletePost} number={idx + 1} key={post.id} post={post}/>)}

        </div>
)
}

export default PostList