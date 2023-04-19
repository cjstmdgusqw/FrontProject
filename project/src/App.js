import './App.css';
import Main from './Main/main';
import Nav from './component/Nav';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom';
import Logo from './component/Logo';
import Submain from './player/Submain';

function App() {
  return (
    <div className='App'>
    <Nav/>
    <Logo/>
        <Routes>
          <Route exact path = '/' element = {<Main/>}></Route>
          <Route exact path = '/Proteam' element = {<Submain/>}></Route>
        </Routes>
    <Footer/>
    </div>
  
  );
}

export default App;
