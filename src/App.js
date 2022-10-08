
import './App.css';
import {BrowserRouter , Routes, Route,Navigate} from 'react-router-dom';
import HelpForm from './components/HelpForm';
import Success from './components/Success';
import Status from './components/Status';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/new-issue' element={<HelpForm />}/>
        <Route path='/ticket/:id' element={<Status />}/>
        <Route path='/success' element={<Success />}/>
        <Route path='*' element={<Navigate to='/new-issue'/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
