import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='main'>
          <Navbar sidebar={props.state.sidebar} />
          <Routes>
            <Route path="/" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
            <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
