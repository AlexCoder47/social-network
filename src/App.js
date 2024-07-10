import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Main from './components/Main/Main';
// import AboutMe from './components/AboutMe/AboutMe';
// import Projects from './components/Projects/Projects';
// import Contacts from './components/Contacts/Contacts';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='main'>
          <Navbar />
          <Routes>
            {/* <Route path="*" element={<Main />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
