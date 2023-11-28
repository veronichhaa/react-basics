import React from "react";
import MyButton from "./UI/button/myButton";
import {useNavigate} from "react-router-dom";

function Post({...props}){

    const router = useNavigate();
    function deletePost(){
        props.delete(props.post)
    }
    function changePage(){
       router(`/posts/${props.post.id}`)
    }

    return(
        <div className="post">
            <h2>{props.number}. {props.post.title}</h2>
            <div>{props.post.body}</div>
            <div className="post__btns">
                <MyButton onClick={deletePost}>Delete</MyButton>
                <MyButton onClick={changePage}>More</MyButton>
            </div>
        </div>
    )
}

export default Post;