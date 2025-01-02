import React from 'react';
import { Link } from 'react-router-dom';

const TodoInput = () => {
  const puddingIcon_Click = () => {
    alert('홈으로 돌아갑니다 : )');
  };

  return (
    /* 할일 입력창 */
    <div className="todo_container1">
      <div>
        <Link to="/">
          <img
            src="assets/icons/pudding.png"
            alt="puddingIcon"
            className="puddingIcon"
            onClick={() => {
              puddingIcon_Click();
            }}
          />
        </Link>
      </div>
      <div className="header2">To Do List</div>
      <div className="rectangleBox"></div>
      <div className="todo_container2">
        <input
          type="text"
          className="todo_inputForm"
          placeholder="할 일을 입력하고, 냥젤리를 눌러주세요 : )"
        />
        <img
          src="assets/icons/cat_jelly1.png"
          alt="cat_jelly1_Icon"
          className="cat_jelly1_Icon"
          onClick={() => {
            console.log('입력 완료!');
          }}
        />
      </div>
      {/* 할일 목록 */}
    </div>
  );
};

export default TodoInput;
