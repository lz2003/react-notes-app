import React, {useEffect, useState} from 'react';
import { Box, Typography} from '@material-ui/core';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import LaunchIcon from '@material-ui/icons/Launch';
import useStyles from '../styles';

const NoteItem = ( {selectedNote, id, deleteNote, openNote, notes, title} ) => {
    const itemStyles = useStyles();

    const handleOpen = () => {
        openNote(id)
    }

    const handleDelete = () => {
        if (notes.length === 1) {
            return
        }
        deleteNote(id)
    }
    
    const [disableDelete, setDisableDelete] = useState(true);
    useEffect(() => {
        setDisableDelete(() => {
            if (notes.length === 1) {   
                return true
            }
            else {
                return false
            }
        })
    }, [notes]);

    const [disableSelect, setDisableSelect] = useState(true);
    useEffect(() => {
        setDisableSelect(() => {
            if (selectedNote === id) {   
                return true
            }
            else {
                return false
            }
        })
    }, [selectedNote]);
    
    return (
        <Box elevation={0} className={itemStyles.card}>
            <Typography className={itemStyles.sidebarTitle} variant="h6" component="h2">{title}</Typography>
            <div>
            <Button disabled={disableSelect} onClick={handleOpen} endIcon={<LaunchIcon />}>Open</Button>
            <Button disabled={disableDelete} onClick={handleDelete} endIcon={<DeleteIcon />}>Delete</Button>
            </div>
        </Box>
    );
}

export default NoteItem;