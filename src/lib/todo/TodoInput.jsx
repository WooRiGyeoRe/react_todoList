import React from 'react';

const TodoInput = () => {
  // const [writeInput, setWriteInput] = useState

  return (
    /* 할일 입력창 */
    <div className="todo_container">
      <div className="header2">To Do List</div>
      <div className="rectangleBox"></div>
      <div className="todo_container2">
        <input
          type="text Todo"
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
