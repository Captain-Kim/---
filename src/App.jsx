import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);

  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // 빈 문자열을 초기값으로 state 값 초기화
  // 각각 name, age라는 변수명으로 만들고 상태를 변경하는 함수로 set-으로 만듦.

  function handleChangeName(e) {
    setName(e.target.value);
  } // 입력값이 변경되면 그 입력값으로 name state를 변경시킴

  function handleChangeAge(e) {
    setAge(e.target.value);
  } // 입력값이 변경되면 그 입력값으로 name state를 변경시킴

  const addUser = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if (name === '' || age === '') { // 논리합연사자(||)는 조건식에 쓰이면 둘 중 하나만 참이어도 true 반환.
      alert('이름과 나이를 모두 입력해주세요.');
      return; // return으로 함수 실행 종료.
    }
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
    const newUser = {
      id: Date.now(),
      name: name,
      age: age
    };

    setUsers([...users, newUser]); // initialState의 상태를 변경함.
    // 초기값을 펼쳐서 집어 넣고 그런 다음 newUser 객체를 추가함.
  };

  const removeUser = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    const filteredUsers = users.filter(user => user.id !== id); // 삭제할 id를 제외한 나머지 사용자를 새로운 배열로 반환
    // 즉 삭제할 id는 뺀다는 의미임.
    setUsers(filteredUsers); // 이렇게 새로운 배열로 반환된 값으로 user state를 변경시킴.
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input type="text" value={name} onChange={handleChangeName} placeholder="이름" /> {/* onchange의 함수는 위에서 선언함 */}
        <input type="number" value={age} onChange={handleChangeAge} placeholder="나이" />
        <button type="submit">사용자 추가</button>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
        {users.map(user => (
          <li key={user.id} className="user-item">
            이름: {user.name}, 나이: {user.age}
            <button onClick={() => removeUser(user.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
