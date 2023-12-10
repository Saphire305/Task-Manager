import { useState } from 'react';
import './App.css';
import { TaskContext, taskList } from './Store/TaskContext';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import EditTask from './components/EditTask';
import { URLContext, urlCon } from './Store/URLContext';

function App() {

  const [url, setUrl] = useState(urlCon);
  const [data, setData] = useState(taskList);

  return (
    <URLContext.Provider value={{url, setUrl}}>
    <TaskContext.Provider value={{data, setData}}>
      <div className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createtask' element={<CreateTask/>}/>
          <Route path='/edittask/:id' element={<EditTask/>}/>
        </Routes>
      </div>
    </TaskContext.Provider>
    </URLContext.Provider>
  );
}

export default App;
