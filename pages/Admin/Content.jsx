"use client"

import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { ContentBar } from "../../components/Admin/SmallReusableComponents/ContentBar";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

export default function Content() {

  const Quill = (typeof document !== "undefined" ? dynamic(() => import("react-quill"), {
    ssr: false,
  }) : null);

  const [SelectedButton, SetSelectedButton] = useState("Terms and Conditions");

  const [dummyText, setDummyText] = useState("");


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
        <Quill
          value={editorHtml}
          onChange={setEditorHtml}
          modules={modules}
          formats={formats}
          placeholder="Write something..."
        />
      </div>
    );
  }

  const dummyTextMap = {
    "Terms and Conditions":
      "This is the Terms and Conditions text. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dignissimos molestiae quibusdam reiciendis enim at magni ut nisi perferendis? Tempora distinctio est maxime nisi unde hic sunt deserunt molestias eos.",
    "Privacy Policy": "This is the Privacy Policy text.",
    "About Us": "This is the About Us text.",
  };

  useEffect(() => {
    // console.log("Select Button ", SelectedButton);
    setDummyText(dummyTextMap[SelectedButton] || "");
  }, [SelectedButton]);

  return (
    <>
      <PageHeading text={"Content Management"} />
      <ContentBar
        Text_1={"Terms and Conditions"}
        Text_2={"Privacy Policy"}
        Text_3={"About Us"}
        SetSelectedButton={SetSelectedButton}
        SelectedButton={SelectedButton}
      />

      {typeof document !== "undefined" ? (
        <RichTextEditor dummyText={dummyText} />
      ) : null}
    </>
  );
}
