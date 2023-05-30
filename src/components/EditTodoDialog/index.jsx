import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types'
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({open, handleDialog, list, editList}) {
  const [editText, setEditText] = React.useState(list.texto)

  function textHandler(){
    editList(list.id, editText)
    handleDialog()
  }

    EditTodoDialog.propTypes = {
        open: PropTypes.bool,
        handleDialog: PropTypes.func,
        list: PropTypes.object,
        editList: PropTypes.func

    }


  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialog}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editar tarefa?"}</DialogTitle>
        <DialogContent>
          <TextField defaultValue={editText} fullWidth onChange={(e) => setEditText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog} >Disagree</Button>
          <Button onClick={textHandler}>Agree</Button>
        </DialogActions>
      </Dialog>
  );
}
