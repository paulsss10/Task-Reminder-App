import React from 'react';
import '../../_Styles/_Tasks.css';
import emptyImg from '../../Resource/Empty_List.svg';

const EmptyTask_UI = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center", height: "100%"}}>
            <h4>No Tasks mate!</h4>
            <figure id="figure">
                
            </figure>
        </div>
    )
}

export default EmptyTask_UI
