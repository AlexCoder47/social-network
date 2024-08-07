import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='main'>
          <Navbar sidebar={props.store.getState().sidebar} />
          <Routes>
            <Route path="/" element={<Profile store={props.store}/>} />
            <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
