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
          <Navbar />
          <Routes>
            <Route path="/" element={<Profile state={props.state}/>} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
