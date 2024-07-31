import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
  dialogs: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Egor" },
      { id: 3, name: "Anton" },
      { id: 4, name: "Stepik" },
  ],

  messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you" },
      { id: 3, message: "That`s cool" },
      { id: 3, message: "Artur Mooorgan" },
  ],

  posts: [
      {
          id: 1,
          ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
          text: "hello",
      },
      {
          id: 2,
          ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
          text: "how are you",
      },
      {
          id: 3,
          ava: "https://flomaster.top/o/uploads/posts/2024-02/1708408635_flomaster-top-p-serie-lyudi-vkontakte-risunok-4.jpg",
          text: "that`s cool",
      },
  ],
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
