import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({title, options, ...props}) => {
    return (
        <div className={classes.container}>
            <select
                {...props}
                className={classes.mySelect}>
                <option disabled>{title}</option>
                {options.map((option)=>
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.name}
                    </option>)}
            </select>
        </div>
    );
};

export default MySelect;