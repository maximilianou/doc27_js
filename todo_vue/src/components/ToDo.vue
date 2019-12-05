<template>
  <div id='app'>
      <div class='ToDo'>
        <img class='Logo' :src='logo' alt='Vue Logo' />
        <h1 class='ToDo-Header'>Vue To Do</h1>
        <div class='ToDo-Container'>
          <ToDoItem v-for='item in list' :item='item' @delete='onDeleteItem' :key='item.id' />
        </div>
        <input type='text' v-model='todo' v-on:keyup.enter='createNewToDoItem' />
        <div class='ToDo-Add' @click='createNewToDoItem()'>+</div>
      </div>
  </div>  
</template>

<script>
import ToDoItem from './ToDoItem';
import Logo from '../assets/logo.png';
export default {
    name: 'to-do',
    components: {
        ToDoItem
    },
    data(){
      return {
          list: [{id: 1, text: 'clean the house'}, { id: 2, text: 'buy milk'}],
          todo: "",
          logo: Logo
      }
    },
    methods: {
        createNewToDoItem(){
            if(!this.todo){
              alert('Please Enter a ToDo!');
              return;
            }
            const newId = this.list.length ? Math.max.apply(null, this.list.map(t => t.id)) + 1 : 1;
            this.list.push( { id: newId, text: this.todo } );
            this.todo = '';
        },
        onDeleteItem(id){
            this.list = this.list.filter( item => item.id !== id );
        }
    } 

}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  background: linear-gradient(#dcaeff, #ff6a3d);
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Logo {
  width: 50px;
  position: relative;
  top: 50px;
}

.ToDo {
  text-align: center;
  border: 1px solid white;
  width: 80vw;
  height: auto;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
  background: #fdfdfd;
  padding-bottom: 60px;
  margin: 40px auto;
}

.ToDo-Header {
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin: 70px auto 30px;
}

.ToDo-Add {
  color: white;
  font-size: 2em;
  width: 0.5em;
  height: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background: #73ff73;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #47a947;
  margin: 20px auto 0;
}

.ToDo-Add:hover {
  box-shadow: none;
  margin-top: 21px;
  margin-left: calc(auto + 1px);
}

.ToDo-Container {
  width: 80%;
  margin: 0 auto;
}

input {
  width: 60%;
  padding: 10px;
  font-size: 1em;
  margin: 10px auto;
  box-shadow: 1px 3px 20px 0px rgba(0, 0, 0, 0.3);
}

</style>