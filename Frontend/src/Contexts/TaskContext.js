import React, { useState, createContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [taskList, setTaskList] = useState([
      {
        id: "1",
        title: "Meeting with Mr. Stark",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        schedule: "Dec. 25, 2021",
        type: "work",
        reminder: "false",
      },
    ]);

    return (
        <TaskContext.Provider value={[taskList, setTaskList]}>
            {props.children}
        </TaskContext.Provider>
    )
}