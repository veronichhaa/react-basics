import React from 'react';
import cl from './MyModal.module.css'
const MyModal = ({children, visible, setVisible}) => {

   let rootClasses =[cl.modal]
    if(visible) rootClasses.push(cl.active)
    return (
        <div onClick={()=>{setVisible(false)}} className={rootClasses.join(' ')}>
            <div className={cl.modal__content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;