import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './lib/home/Home';
import TodoInput from './lib/todo/TodoInput';
import TodoList from './lib/todo/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoInput />} />
        {/* <Route path="/calendar" element={<Calendar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
