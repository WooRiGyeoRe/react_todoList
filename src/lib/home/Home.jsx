import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../todo/TodoInput';
import TodoInput from '../todo/TodoInput';

const Home = () => {
  return (
    <div className="home_container1">
      <div className="header1">나의 소중한 일상 기록하기 ¢£†</div>
      <div className="title1">
        <Link to={'todo'} className="home_link">
          ♤ To Do List
        </Link>
      </div>
      {/* <div className="title1">
        <Link to={'calendar'} className="home_link">
          ♧ Calendar
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
