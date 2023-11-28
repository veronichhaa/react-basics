import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../UI/Loader/Loader";
import Comment from "../Comment";
import CommentsList from "../CommentsList";

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [isPostLoading, fetchPost, postError] = useFetching(async ()=>{
        setPost(await PostService.getById(params.id));
    });
    const [isCommentsLoading, fetchComments, commentsError] = useFetching(async ()=>{
        setComments(await PostService.getCommentsByPostId(params.id));
    });
    useEffect(()=>{
        fetchPost();
        fetchComments()
    },[])

    return (
        <div>
            {(isPostLoading)?<Loader/>:
            <div className="post__block">
                <h1>{post.title}</h1>
                <div>{post.body}</div>
            </div>}
            { <h2>Произошла ошибка!</h2> && postError}

            {<h2>Произошла ошибка! {commentsError}</h2> && <CommentsList comments={comments}/>}
        </div>
    );
};

export default PostPage;