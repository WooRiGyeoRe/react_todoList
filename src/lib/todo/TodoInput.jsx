import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TodoInput = () => {
  const navigate = useNavigate();

  // 푸딩 아이콘 클릭
  const puddingIcon_Click = (e) => {
    e.preventDefault(); // 기본 동작 막기

    // window.confirm 모달창
    const isConfirmed = window.confirm('홈으로 돌아갑니다 : )');
    if (isConfirmed) {
      // 확인 => 홈으로 이동
      console.log('홈으로 이동');
      navigate('/');
    } else {
      // 취소 => 이동 X
      console.log('홈 이동 취소');
    }
  };

  // 쿠키 아이콘 클릭
  const cookieIcon_Click = (e) => {
    e.preventDefault(); 
    const isConfirmed = window.confirm('달력 페이지로 이동하시겠습니까?');
    if (isConfirmed) {
      console.log('달력 페이지로 이동');
      navigate('/calendar');
    } else {
      console.log('달력 페이지 이동 취소');
    }
  };

  return (
    /* 할일 입력창 */
    <div className="todo_container1">
      <div className="page_link1">
        <Link to="/">
          <img
            src="assets/icons/pudding.png"
            alt="puddingIcon"
            className="puddingIcon"
            onClick={(e) => puddingIcon_Click(e)}
          />
        </Link>
        <Link to="/calendar">
          <img
            src="assets/icons/cookie.png"
            alt="cookieIcon"
            className="cookieIcon"
            onClick={(e) => cookieIcon_Click(e)}
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
