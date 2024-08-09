import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='main'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Profile/>} />
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/users" element={<UsersContainer/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
