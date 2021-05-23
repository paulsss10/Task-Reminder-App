import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import TasksContainer from './Pages/Tasks/TasksContainer';
import Auth from './Pages/Auth/Auth';


function App() {

  return (
    <React.Fragment>
      <Header />

      <Auth />
      <main>
        {/* <TasksContainer /> */}
      </main>
    </React.Fragment>
  );
}

export default App;
