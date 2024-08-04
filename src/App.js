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
          <Navbar navbar={props.state.navbar} />
          <Routes>
            <Route path="/" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>} />
            <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} updateMessageText={props.updateMessageText}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
