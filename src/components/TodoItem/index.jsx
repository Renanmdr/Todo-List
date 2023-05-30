import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { ListItemText, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types'
import EditTodoDialog from "../EditTodoDialog";
import { useState } from "react";

export default function TodoItem({list, deleteList, editList}) {
  const [openDialog, setOpenDialog] = useState(false)
  TodoItem.propTypes = {
    list: PropTypes.object,
    deleteList: PropTypes.func,
    editList: PropTypes.func
  }

  function handleDialog(){
    setOpenDialog(!openDialog)
  }
 
  return (
    <>
    <EditTodoDialog open={openDialog} handleDialog={handleDialog} list={list} editList={editList} />
    <Paper>
   <ListItem
            
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={() => deleteList(list.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={list.texto} onClick={handleDialog}/>
            </ListItemButton>
          </ListItem>
          </Paper>
          </>
  );
}
