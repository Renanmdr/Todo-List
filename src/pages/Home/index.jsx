import { Container, List } from "@mui/material";
import Form from "../../components/Form";
import TodoItem from "../../components/TodoItem";
import { useState } from "react";




export default function Home() {
const [lista, setLista] = useState([])

function todoHandler(todo){
  setLista((prevLista) => [...prevLista, todo])
}

function deleteList(id){
 const filtered = lista.filter((list) => list.id !== id )
 setLista(filtered)
}

function editList(id, newText){
  const copyLista = [...lista]
  copyLista.map(list => {
  if(list.id === id){
    list.texto = newText
  }

  setLista(copyLista)
})
 
  

  
}

  return (
    <Container maxWidth="xs" style={{marginTop: '1em'}}>
      <Form  todoHandler={todoHandler}/> 
      <List >
        {lista.map(((list, i) => 
        <div style={{marginTop: '1em'}} key={i}>
          <TodoItem list={list} deleteList={deleteList} editList={editList} />
        </div>)) }
      </List>
    </Container>
  )
}
