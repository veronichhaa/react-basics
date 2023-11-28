import React, {useMemo, useState} from 'react';
import MyInput from "./UI/input/myInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div className='filter'>
            <MyInput value={filter.query} onChange={(e)=>{setFilter({...filter, query: e.target.value})}} placeholder='Search by title'/>
            <MySelect
                options={[{value: 'title', name: 'By title'},
                    {value: 'body', name: 'By description'}]}
                title={'Sorting'}
                onChange={(e)=>{setFilter({...filter, sort: e.target.value})}}
                value={filter.sort}/>
        </div>
    );
};

export default PostFilter;