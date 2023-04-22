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
import Game from './ticket/Game';
import Player2 from './player/Player2';
import Ticket from './ticket/Ticket';


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
          <Route exact path = '/Proteam/Picher/:id' element = {<Player/>}></Route>
          <Route exact path = '/Proteam/Hitter/:id' element = {<Player2/>}></Route>
          <Route exact path = '/Ticket' element = {<Game/>}></Route>
          <Route exact path = '/Ticket/:day' element = {<Ticket/>}></Route>
        </Routes>
    <Footer/>
    </div>
  
  );
}

export default App;
