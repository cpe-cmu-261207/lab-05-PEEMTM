import React from 'react';
import { useState } from 'react'
import Header from './components/Header';
import Todolist from './components/TodoList';
import Footer from './components/Footer';
import Task from './components/Task';

function App() {
  return (
    <div>
      {/*Header*/}
      <Header></Header>

      {/*Todo*/}
      <Todolist></Todolist>

      {/*Footer*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
