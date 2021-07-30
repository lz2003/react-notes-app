import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import NoteEditor from "./NoteEditor";
import NoteTitle from "./NoteTitle";

const Note = ({ updateNote, selectedNote, content }) => {

    
    const updateTitle = (newTitle) => {
        //console.log(EditorState.createWithContent(convertFromRaw(content.state)))
        updateNote(selectedNote, newTitle, content.state);
    }

    const updateContent = (rawContent) => {
        updateNote(selectedNote, content.title, rawContent)
    }

    return (
        <div className="note">
            <NoteTitle 
                updateTitle={updateTitle}
                selectedNote={selectedNote}
                content={content}
            />

            <div>
            <NoteEditor
                updateContent={updateContent}
                selectedNote={selectedNote}
                content={content}
            />
            </div>

        </div>
    );

}

/*  OLD NOTE COMPONENT CODE
    const Note = ({ updateNote, selectedNote, content }) => {

    
    const handleTitleChange = (newTitle) => {
        //console.log(EditorState.createWithContent(convertFromRaw(content.state)))
        updateNote(selectedNote, newTitle.target.value, content.state);
    }

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const handleEditorState = (newEditorState) => {
        setEditorState(newEditorState)
        const contentState = newEditorState.getCurrentContent();
        const raw = convertToRaw(contentState)
        updateNote(selectedNote, content.title, raw)
    }

    useEffect(() => {
        setEditorState(EditorState.createWithContent(convertFromRaw(content.state)))
    }, [selectedNote])

    return (
        <div className="note">
            <TextField
                required 
                className="note-title"
                placeholder = "Enter title..."
                value = {content.title}
                onChange = {handleTitleChange}
            ></TextField>

            <div>
            <Editor
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', 'emoji', 'remove'],
                    list: {options: ['unordered', 'ordered']}
                }}
                editorState={editorState}
                wrapperClassName="note-wrapper"
                editorClassName="note-editor"
                onEditorStateChange={handleEditorState}
            />
            </div>

        </div>
    );

}*/

export default Note;