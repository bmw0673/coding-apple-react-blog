/* eslint-disable */

import './App.css';
import { useState, useSyncExternalStore } from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천' , '강남 우동 맛집' , '파이썬 독학']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState('hide')

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 >ReactBlog</h4>
      </div>
      <div>
        <button onClick={()=>{
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}>정렬</button>
        <button onClick={()=>{
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy);
        }}>글제목변경</button>
      </div>
      <div className='list' onClick={()=>{setModal('')}}>
        <h4>{ title[0] } <span onClick={()=>{setLike(like+1)} }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      {modal == 'hide' ? '' : <Modal />}

    </div>
  );
}

function Modal(){
  return (
      <div className='modal'>
        <h4>제목</h4>
        <p>제목</p>
        <p>상세내용</p>
        <p onClick={()=>{setModal('hide')}}>닫기</p>
      </div>
  )
}


export default App;
