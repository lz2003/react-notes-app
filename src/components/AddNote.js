import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { styled } from '@material-ui/core/styles';

const AddButton = styled(Button)({
    borderRadius: 0,
    height: 60,
});


function AddNote({addNote}) {
  
  return (
    <AddButton
        variant="contained"
        color="primary"
        fullWidth
        onClick={addNote}
        endIcon={<AddIcon />}
    >Add Note</AddButton>
  );
}

export default AddNote;