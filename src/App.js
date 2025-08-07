/* eslint-disable */

import './App.css';
import { useState, useSyncExternalStore } from 'react';

function App() {
  
  const [write, setWrite] = useState([
    {
      title : '남자 코트 추천',
      detail : '코트 추천합니당',
      date : '20250806',
      like : 0
    },
    {
      title : '강남 우동 맛집',
      detail : '맛집 추천합니당',
      date : '20250806',
      like : 0
    },
    {
      title : '파이썬 독학',
      detail : '독학 추천합니당',
      date : '20250806',
      like : 0
    }
  ]);

  const [modal, setModal] = useState(true)
  const [curIndex, setCurIndex] = useState(-1);
  const [reg, setReg] = useState({});
  function upLike(index){
    let copy = [...write];
    copy[index].like += 1;
    setWrite(copy);
  }

  function deleteWrite(index){
    let copy = [...write];
    copy.splice(index, 1);
    setWrite(copy);
  }

  function saveWrite(reg){
    const now = new Date();

    let copyWrite = [...write];
    let copyReg = {...reg};
    console.log(copyWrite);
    copyReg.date = now.getFullYear()+String(now.getMonth() + 1).padStart(2, '0')+String(now.getDate()).padStart(2, '0');
    copyReg.like = 0;
    copyWrite.unshift(copyReg);
    setWrite(copyWrite);
  }

  function showModal(index){
    index === curIndex ? setModal(!modal) : setModal(false);
    setCurIndex(index);
  }

  function editReg(gubun, text){
    let copy = {...reg};
    copy[gubun] = text;
    setReg(copy);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 >ReactBlog</h4>
      </div>

      {
        write.map(function(e, index){
          return (
            <div key={index} className='list'>
              <h4 onDoubleClick={()=>{showModal(index)}} style={{display : 'flex'}}>
                { e.title } 
                <div onClick={(e)=>{e.stopPropagation(); upLike(index)} }> 👍</div> 
                { e.like } 
              </h4>
             <p>{e.date.slice(0,4)}년 {e.date.slice(4,6)}월 {e.date.slice(6,8)}일</p>
              <button onClick={()=>{deleteWrite(index)}}>삭제</button>
            </div>
          )
        })
      }

      {modal? null : <Modal write={write} curIndex={curIndex} />}

      <div>
        <div>
          제목 : <input type='text' onChange={(e)=>{ editReg('title', e.target.value)}} />
        </div>
        <div>
          내용 : <input type='text' onChange={(e)=>{ editReg('detail', e.target.value)}} />
        </div>
        <button onClick={()=>{saveWrite(reg)}}>등록</button>
      </div>

    </div>
  );
}

function Modal(props){
  const curWrite = props.write[props.curIndex];
  console.log(curWrite);

  return (
      <div className='modal'>
        <h4>{curWrite.title}</h4>
        <p>{curWrite.detail}</p>
        <p>{`${curWrite.date.slice(0,4)}년 ${curWrite.date.slice(4,6)}월 ${curWrite.date.slice(6,8)}일`}</p>
        {/* <button onClick={()=>{let copy=[...props.title]; copy[props.curIndex]='여자코트추천'; props.setTitle(copy)}}>제목변경</button> */}
      </div>
  )
}


export default App;
