import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { getAuthMeTC } from './redux/auth-reducer';
import { compose } from 'redux';
import { initialize } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.initial) {
      return <Preloader/>
    }
    return (
      <div className="App">
        <BrowserRouter>
          <HeaderContainer />
          <div className='main'>
            <Navbar />
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initial: state.app.initial
})

export default compose(
  connect(mapStateToProps, {initialize})(App)
)

