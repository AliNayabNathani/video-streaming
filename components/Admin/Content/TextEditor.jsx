import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

function RichTextEditor({ dummyText }) {
  const [editorHtml, setEditorHtml] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "link",
    "image",
  ];

  useEffect(() => {
    setEditorHtml(dummyText);
  }, [dummyText]);

  return (
    <div style={{ marginTop: "5rem" }}>
      <ReactQuill
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
