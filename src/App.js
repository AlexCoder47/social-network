import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <div className='main'>
          <Navbar />
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer/>} />
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/users" element={<UsersContainer/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}



export default App;
