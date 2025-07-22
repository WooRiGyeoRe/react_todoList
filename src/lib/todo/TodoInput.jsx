import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TodoList from './TodoList';

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
  // const cookieIcon_Click = (e) => {
  //   e.preventDefault();
  //   const isConfirmed = window.confirm('달력 페이지로 이동하시겠습니까?');
  //   if (isConfirmed) {
  //     console.log('달력 페이지로 이동');
  //     navigate('/calendar');
  //   } else {
  //     console.log('달력 페이지 이동 취소');
  //   }
  // };

  // 할일 입력창
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  //const

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
        {/* <Link to="/calendar">
          <img
            src="assets/icons/cookie.png"
            alt="cookieIcon"
            className="cookieIcon"
            onClick={(e) => cookieIcon_Click(e)}
          />
        </Link> */}
      </div>
      <div className="header2">To Do List</div>
      <div className="rectangleBox"></div>
      <div className="todo_container2">
        <input
          value={inputValue}
          type="text"
          // maxLength={25} /* 글자수 제한 */
          className="todo_inputForm"
          placeholder="할 일을 입력하고, 냥젤리를 눌러주세요 : )"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <img
          src="assets/icons/cat_jelly1.png"
          alt="cat_jelly1_Icon"
          className="cat_jelly1_Icon"
          onClick={() => {
            // console.log('입력 완료!')
            if (!inputValue) {
              // falsy
              // ''
              // '' === false
              console.log('내용을 입력하세요!');
              return;
            }
            if (inputValue.length < 3) {
              console.log('세글자 이상 입력하세요!');
              return;
            }
            setTodoList((prev) => {
              const arr = [...prev];
              const todo = {
                id: arr.length + 1,
                content: inputValue,
                done: false,
              };
              arr.push(todo);
              return arr;
            });
            setInputValue('');
          }}
        />
      </div>
      {/* 할일 목록 */}
      {/* <TodoList /> */}
      <div className="todo_list">
        {
          // 배열을 반복하면서 가공해서 새 배열을 반환.
          todoList.map((el, index) => {
            return (
              <div id={el.id} key={index}>
                <span>{el.content}</span>
                <span
                  onClick={() => {
                    const content = prompt('수정할 내용');
                    if (content === null) return; // 취소 누르면 아무 작업도 안 함
                    setTodoList((prev) => {
                      const t = prev.find((target) => target.id === el.id);
                      const newContent = {
                        ...t,
                        content,
                      };
                      return prev.map((t) => {
                        return t.id === el.id ? newContent : t;
                      });
                    });
                  }}
                >
                  {' '}
                  <span>
                    <img
                      src="assets/icons/edit.png"
                      alt="수정"
                      width="20"
                      height="20"
                    />
                  </span>{' '}
                </span>
                <span
                  onClick={() => {
                    setTodoList((prev) => {
                      const arr = [...prev].filter(
                        (target) => target.id !== el.id,
                      );
                      return arr;
                    });
                  }}
                >
                  {' '}
                  <span>
                    <img
                      src="assets/icons/delete.png"
                      alt="삭제"
                      width="20"
                      height="20"
                    />
                  </span>{' '}
                </span>

                <span
                  onClick={() => {
                    const target = todoList.find((t) => t.id === el.id);
                    const newContent = {
                      ...target,
                      done: !target.done,
                    };
                    const newArr = todoList.map((t) =>
                      t.id === el.id ? newContent : t,
                    );
                    setTodoList(newArr);
                  }}
                >
                  {/* {el.done ? '-- ✅ --' : '-- ❎ --'}  */}
                  <span>
                    {el.done ? (
                      <img
                        src="assets/icons/no.png"
                        alt="완료"
                        width="20"
                        height="20"
                      />
                    ) : (
                      <img
                        src="assets/icons/ok.png"
                        alt="미완료"
                        width="20"
                        height="20"
                      />
                    )}
                  </span>
                </span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default TodoInput;
