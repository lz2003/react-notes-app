import React from 'react';
import { List } from '@material-ui/core';
import NoteItem from './NoteItem'

const NoteList = ({selectedNote, notes, content, deleteNote, openNote}) => {

    const getTitle = (id) => {
        let data = ""

        if (id === selectedNote) data = content.title
        else {
            data = localStorage.getItem(id)
            if (data !== null) data = JSON.parse(data).title
        }

        if (data !== "") {
            if (data.length < 17) return data
            else return `${data.substring(0, 17)}...`
        }
        return "Untitled Note"
    }
    return (
        <List>
            {
                notes.map((id, index) => {
                    return (
                        <div key={`note_${id}`}>
                        <NoteItem 
                            selectedNote={selectedNote}
                            id={id}
                            deleteNote={deleteNote}
                            openNote={openNote}
                            notes={notes}
                            title={getTitle(id)}
                        />
                        </div>
                    )
                })
            }
        </List>
    )
}

export default NoteList;