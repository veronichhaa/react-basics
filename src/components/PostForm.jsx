import React, {useState} from 'react';
import MyInput from "./UI/input/myInput";
import MyButton from "./UI/button/myButton";

const PostForm = ({create}) => {

    let [post, setPost] = useState({title: '', description: ''})

    function addPost(e){
        e.preventDefault();
        setPost({title: '', description: ''})
        create({...post, id: Date.now()})
    }


    return (
        <form className='form'>
            <MyInput onChange={(e)=>{setPost({...post, title: e.target.value})}} value={post.title} placeholder='Post title'></MyInput>
            <MyInput onChange={(e)=>{setPost({...post, description: e.target.value})}} value={post.description} placeholder='Post description'></MyInput>
            <div><MyButton onClick={addPost}>Add post</MyButton></div>
        </form>
    );
};

export default PostForm;