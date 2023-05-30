import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types'

export default function Form({todoHandler}){
      const [texto, setTexto] = useState('')
      const [id, setId] = useState(0)

 Form.propTypes = {
    todoHandler: PropTypes.func
 }

 function todoCreate(texto){
    const obj = {texto, id}
    setId((id) => id + 1)
    todoHandler(obj)
    setTexto('')
 }
 
 


    return(
        <Paper style={{padding: '1em'}}>
         <div style={{display: 'flex', justifyContent: 'center'}}>
            <TextField id="outlined-basic" 
            label="Tarefa" variant="outlined" 
            fullWidth value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <Button variant="text" onClick={() => todoCreate(texto)}>Add</Button>
        </div>
        </Paper>
    )
}