import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill stylesheet

function RichTextEditor() {
    const [editorHtml, setEditorHtml] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'align',
        'link', 'image',
    ];

    return (
        <div style={{ marginTop: '5rem' }}>
            <ReactQuill
                theme="snow"
                value={editorHtml}
                onChange={setEditorHtml}
                modules={modules}
                formats={formats}
                placeholder="Write something..."
            />
        </div>
    );
}

export default RichTextEditor;