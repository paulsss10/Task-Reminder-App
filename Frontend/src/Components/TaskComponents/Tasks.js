import React, { useState, useContext } from 'react'
import {TaskContext} from '../../Contexts/TaskContext';

const Tasks = ({ id, title, description }) => {
    const [isLoading, setIsLoading] = useContext(TaskContext);

    return (
        <div key={id}>
           <h5>{title}</h5> 
           <small>{description}</small>
           
        </div>
    )
}

export default Tasks
