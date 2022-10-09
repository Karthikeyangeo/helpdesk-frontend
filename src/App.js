
import './App.css';
import React from 'react';
import {BrowserRouter , Routes, Route,Navigate} from 'react-router-dom';
import HelpForm from './components/HelpForm';
import Success from './components/Success';
import Status from './components/Status';
import { apiurl } from './globalData';
export const CommonContext = React.createContext();

function App() {
  return (
    <>
    <BrowserRouter>
    <CommonContext.Provider value ={{apiurl}}>
        <Routes>
          <Route path='/new-issue' element={<HelpForm />}/>
          <Route path='/ticket/:id' element={<Status />}/>
          <Route path='/success/:id' element={<Success />}/>
          <Route path='*' element={<Navigate to='/new-issue'/>} />
        </Routes>
      </CommonContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
