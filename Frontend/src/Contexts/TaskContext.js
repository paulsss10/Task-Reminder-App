import React, { useEffect, useState, createContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState([]);  

    useEffect(() => {
      const getTasks = async() => {
        const taskGikanServer = await fetchTasks()
        setTaskList(taskGikanServer)

        
      }
      getTasks()
    }, []);

    const fetchTasks = async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/tasks");
      const resData = await res.json();

      return resData.tasks
      

    };

    return (
        <TaskContext.Provider value={[taskList, setTaskList], [isLoading, setIsLoading]}>
            {props.children}
        </TaskContext.Provider>
    )
}