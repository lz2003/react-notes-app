import React, {useState, useEffect } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw  } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NoteEditor = ({ updateContent, selectedNote, content }) => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const handleEditorState = (newEditorState) => {
        setEditorState(newEditorState)
        const contentState = newEditorState.getCurrentContent();
        const raw = convertToRaw(contentState)
        updateContent(raw)
    }

    useEffect(() => {
        setEditorState(EditorState.createWithContent(convertFromRaw(content.state)))
    }, [selectedNote])

    return (
        <div>
        <Editor
            toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'remove'],
                list: {options: ['unordered', 'ordered']}
            }}
            editorState={editorState}
            wrapperClassName="note-wrapper"
            editorClassName="note-editor"
            onEditorStateChange={handleEditorState}
        />
        </div>
    );

}

export default NoteEditor;