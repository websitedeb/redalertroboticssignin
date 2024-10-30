import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/signin';
import { Auth } from './pages/code';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Signin />}/>
          <Route path='/auth' element={<Auth />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
