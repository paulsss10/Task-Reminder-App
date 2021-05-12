import React, { useState } from 'react'
import { TaskForm } from '../../Components/Forms/Forms';

const Tasks = ({ id, title, description }) => {
  
    return (
        <div>
           <h5>{title}</h5> 
           <small>{description}</small>
           
        </div>
    )
}

export default Tasks
