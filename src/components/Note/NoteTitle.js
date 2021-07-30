import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import useStyles from '../styles';

const NoteTitle = ({ updateTitle, selectedNote, content }) => {
    const titleStyles = useStyles();

    const [title, setTitle] = useState("");
    const handleTitleChange = (newTitle) => {
        newTitle.preventDefault();
        updateTitle(newTitle.target.value);
        setTitle(newTitle.target.value)
    }

    useEffect(() => {
        setTitle(() => {
            if(content.title !== null) {
                return content.title
            }
            return ""
        })
    }, [selectedNote])


    return (
        <div className="note">
            <TextField
                className={titleStyles.title}
                placeholder = "ENTER TITLE..."
                value = {title}
                onChange = {handleTitleChange}
            ></TextField>
        </div>
    );

}

export default NoteTitle;