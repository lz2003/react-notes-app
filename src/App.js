import './App.css';
import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import Note from './components/Note/Note'
import NoteList from './components/NoteList/NoteList'
import { ContentState, convertToRaw } from "draft-js";
import AddNote from './components/AddNote';
import useStyles from './components/styles';

function App() {
  const storage = localStorage.getItem("notes-list")
  const classes = useStyles();
  const [notes, setNotes] = useState([1]);
  const [selectedNote, setSelectedNote] = useState(1);
  const [content, setContent] = useState({title:"", state:convertToRaw(ContentState.createFromText(""))});

  // Fetch from local storage on refresh to persist created notes
  useEffect(() => {
      setNotes (() => {
        if (storage !== null) {
          let data = JSON.parse(storage)
          return data.notesList
        }
        localStorage.setItem("notes-list", JSON.stringify({notesList: [1]}))
        return [1]
      })

      openNote(notes[0])
    
  }, []);
  
  const addNote = () => {
    setNotes((prev) => {
      return [...prev, prev[prev.length-1] + 1]
    })

    localStorage.setItem("notes-list", JSON.stringify({notesList: [...notes, notes[notes.length-1] + 1]}))
    localStorage.setItem(String(notes[notes.length-1]+1), JSON.stringify({title:"", state:convertToRaw(ContentState.createFromText(""))}))
  }

  const deleteNote = (id) => {
    if (!notes.includes(id)) {
      return
    }

    setNotes((prev) => prev.filter(note => note !== id))
    localStorage.removeItem(String(id))
    localStorage.setItem("notes-list", JSON.stringify({notesList: notes.filter(note => note !== id)}))

    if (id !== selectedNote) {
      return
    }

    setContent((prev) => {
      const data = localStorage.getItem(notes[0])
      if (data === "null") {return prev}
      return JSON.parse(data)
    })

    setSelectedNote(notes[0])

  }

  const updateNote = (id, title, contentState) => {
    setContent({title: title, state: contentState});
    localStorage.setItem(String(id), JSON.stringify(content))
  }

  
  const openNote = (id) => {
    if (!notes.includes(id)) {
      return
    }

    setContent((prev) => {
      const data = localStorage.getItem(id)
      if (data === null) {
        localStorage.setItem(String(id), JSON.stringify({title:"", state:convertToRaw(ContentState.createFromText(""))}))
        return prev
      }
      return JSON.parse(data)
    })

    setSelectedNote(id)

  }

  return (
    <div className="App">
      <Grid className={classes.grid} container direction="row-reverse">
      <Grid className={classes.grid1} container item xs={3} justifyContent="center">
        <Box className={classes.sidebar}>
        <AddNote addNote={addNote} />
        <div>
        <NoteList 
          selectedNote={selectedNote}
          notes={notes}
          content={content}
          deleteNote={deleteNote}
          openNote={openNote}
        />
        </div>
        </Box>
      </Grid>

      <Grid className={classes.grid2} container item xs={9} justifyContent="center">
        <Note 
          updateNote={updateNote}
          selectedNote={selectedNote}
          content={content}
        />
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
