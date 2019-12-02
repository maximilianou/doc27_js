import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import ToDoItem from './ToDoItem';
import './ToDo.css';
import { listenerCount } from 'cluster';

const ToDo = () => {

    const [list, setList] = useState([
        { id: 1, text: 'clean the house'},
        { id: 2, text: 'buy milk'}
    ]);
    const [toDo, setToDo] = useState("");

    const generateId = () => {
      if(list && list.length > 0){
        return( Math.max( ...list.map( (t) => t.id ) ) + 1 );
      }else{
        return 1;
      }
    };
    const createNewToDoItem = () => {
      if( !toDo ){
        alert('Please enter a todo!');
        return;
      }
      const newId = generateId();
      const newToDo = { id: newId, text: toDo };
      setList( [...list, newToDo] );
      setToDo("");
    };
    const handleKeyPress = (e) => {
      if( e.key === "Enter"){
        createNewToDoItem();
      }
    };
    const handleInput = (e) => {
      setToDo( e.target.value );
    };
    const deleteItem = () => {
      setList( list.filter( (item) => item.id !== id ) );
    };
    return (
        <div className='ToDo'>
          <img className='Logo' src={Logo} alt='React Logo' />
          <h1 className='ToDo-Header'> React To Do</h1>
          <div className='ToDo-Container'>
            <div className='ToDo-Content'>
              { list.map( (item) => {
                <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
              })}
            </div>
            <div className='ToDo-Input'>
               <input type='text' value={toDo} onChange={handleInput} onKeyPress={handleKeyPress}  />
               <button className='ToDo-Add' onClick={createNewToDoItem}>+</button>
            </div>
          </div>
        </div>
    );

}

export default ToDo;