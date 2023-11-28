import React, {useEffect, useRef, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../../API/PostService";
import MyButton from "../UI/button/myButton";
import MyModal from "../UI/MyModal/MyModal";
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import Pagination from "../UI/pagination/Pagination";
import Loader from "../UI/Loader/Loader";
import PostList from "../PostList";
import MySelect from "../UI/select/MySelect";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: 'title', query:''});
    const [visible, setVisible] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);
    const [limit, setLimit] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isPostLoading, fetchPosts, postError] = useFetching(async()=>{
        const response = await PostService.getAll(limit, currentPage);
        setPosts([...posts, ...response.data]);
        setTotalCount(response.headers.get('x-total-count'));
    })
    const lastEl = useRef();
    const observer = useRef();

    useEffect(()=>{
        fetchPosts()
    }, [currentPage, limit])

    useEffect(()=>{
        if(isPostLoading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastEl.current);
        function callback(entries, observer){
            if(entries[0].isIntersecting){
                setCurrentPage(currentPage+1)
            }
        }
    },[isPostLoading])


    function createPost(post){
        setPosts([...posts, post])
        setVisible(false)
    }

    function deletePost(post){
        setPosts(posts.filter((el)=>el.id!==post.id))
    }


    return (
        <div className="App">
            <MyButton onClick={()=>setVisible(true)}>Создать пост</MyButton>
            <MyModal visible={visible} setVisible={setVisible}><PostForm create={createPost}/></MyModal>
            <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={totalCount} limit={limit}/>
            <MySelect
                onChange={(e)=>setLimit(e.target.value)}
                title={'Number of elements on the page'}
                options={[{name:'10', value:10},
                          {name:'25', value:25},
                          {name:'50', value:50},
                          {name:'all', value:-1},
                ]}>
            </MySelect>
            {(isPostLoading)?<Loader/>:<PostList deletePost={deletePost} postList={sortedAndSearchedPosts}/>}
            {<h2>Произошла ошибка!</h2> && postError}
            {/*<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={totalCount} limit={limit}/>*/}
            <div style={{height:'1px'}} ref={lastEl}>dd</div>
        </div>
    );
}

export default Posts;