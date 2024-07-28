import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadPAFile from './components/UploadPAFile';
import ViewPAFile from './components/ViewPAFile';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/UploadPAFile' element={<UploadPAFile/>} />
      <Route path='/ViewPAFile' element={<ViewPAFile/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
