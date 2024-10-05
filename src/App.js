import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/signin';
import { Auth } from './pages/code';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Routes>
          <Route path='/' element={<Signin />}/>
          <Route path='/auth' element={<Auth />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
