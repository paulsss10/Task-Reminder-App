import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import TasksContainer from './Pages/Tasks/TasksContainer';
import { TaskProvider } from './Contexts/TaskContext';


function App() {

  return (
    <TaskProvider>
      <React.Fragment>
        <Header />

        <main>
          <TasksContainer />
        </main>
      </React.Fragment>
    </TaskProvider>
  );
}

export default App;
