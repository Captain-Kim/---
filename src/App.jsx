import { useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const addCard = (e) => {
    e.preventDefault();
    if (newTitle === '' || newBody === '') {
      setNewTitle('');
      setNewBody('');
      alert('값이 입력되지 않았습니다.');
      return;
    }
  
    setNewTitle('');
    setNewBody('');
  
    const newCard = {
      id: Date.now(),
      title: newTitle,
      body: newBody,
      isDone: false
    };

    setCards([...cards, newCard]);
  };

  const removeCard = (id) => {
    const filteredCards = cards.filter(card => card.id !== id);
    setCards(filteredCards);
  };

  const handleComplete = (id) => {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, isDone: true };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const handleCancel = (id) => {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, isDone: false };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <>
      <form onSubmit={addCard}>
        <div className="input-group">
          <span>제목</span> <input type="text" value={newTitle} className="input-title" onChange={(e) => setNewTitle(e.target.value)} placeholder="제목" />
          <span>내용</span> <input type="text" value={newBody} className="input-body" onChange={(e) => setNewBody(e.target.value)} placeholder="내용" />
          <button type="submit" className="submit-button">작성하기</button>
        </div>
      </form>
      
      <div>
        <h1>Working!</h1>
        <ul>
          {cards.filter(card => !card.isDone).map(card => (
            <li key={card.id} className="card-item">
              <h2>{card.title}</h2>
              <h3>{card.body}</h3>
              <div>
                <button className="delete-button" onClick={() => removeCard(card.id)}>삭제</button>
                <button className="done-button" onClick={() => handleComplete(card.id)}>완료</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h1>Done!</h1>
        <ul>
          {cards.filter(card => card.isDone).map(card => (
            <li key={card.id} className="card-item">
              <h2>{card.title}</h2>
              <h3>{card.body}</h3>
              <div>
                <button className="delete-button" onClick={() => removeCard(card.id)}>삭제</button>
                <button className="cancel-button" onClick={() => handleCancel(card.id)}>취소</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
