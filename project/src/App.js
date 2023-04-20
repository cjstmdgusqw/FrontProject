import './App.css';
import Main from './Main/main';
import Nav from './component/Nav';
import Footer from './component/Footer';
import {Routes, Route} from 'react-router-dom';
import Logo from './component/Logo';
import Submain from './player/Submain';
import Picher from './player/Picher';
import Catcher from './player/Catcher';
import Infilder from './player/Infielder';
import Outfilder from './player/Outfilder';
import Player from './player/Player';

function App() {
  return (
    <div className='App'>
    <Nav/>
    <Logo/>
        <Routes>
          <Route exact path = '/' element = {<Main/>}></Route>
          <Route exact path = '/Proteam' element = {<Submain/>}></Route>
          <Route exact path = '/Proteam/Picher' element = {<Picher/>}></Route>
          <Route exact path = '/Proteam/Catcher' element = {<Catcher/>}></Route>
          <Route exact path = '/Proteam/Infielder' element = {<Infilder/>}></Route>
          <Route exact path = '/Proteam/Outfielder' element = {<Outfilder/>}></Route>
          <Route exact path = '/Proteam/id' element = {<Player/>}></Route>
        </Routes>
    <Footer/>
    </div>
  
  );
}

export default App;
