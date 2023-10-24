import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { ContentBar } from "../../components/Admin/SmallReusableComponents/ContentBar";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import axios from "axios";
import { server } from "../../components/server";
import { Button } from "@chakra-ui/react";

export default function Content() {
  const Quill =
    typeof document !== "undefined"
      ? dynamic(() => import("react-quill"), {
        ssr: false,
      })
      : null;

  const [SelectedButton, SetSelectedButton] = useState("Terms and Conditions");
  const [terms, setTerms] = useState();
  const [privacy, setPrivacy] = useState();
  const [aboutUs, setAboutUs] = useState();
  const [displayedText, setDisplayedText] = useState();

  console.log(displayedText);
  function RichTextEditor({ displayedText }) {
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
      setEditorHtml(displayedText);
    }, [displayedText]);

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
  console.log(displayedText);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}users/get-all-content`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        });
        const res = response.data;
        setTerms(res.termsAndConditions);
        setPrivacy(res.privacyPolicy);
        setAboutUs(res.aboutUs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // console.log("Select Button ", SelectedButton);
    if (SelectedButton === "Terms and Conditions") setDisplayedText(terms);
    else if (SelectedButton === "Privacy Policy") setDisplayedText(privacy);
    else if (SelectedButton === "About Us") setDisplayedText(aboutUs);

  }, [SelectedButton]);

  const handleChange = () => {
    axios.put(server + 'admin/terms-and-conditions', {
      headers: {
        'Content-type': 'application/json'
      },
      withCredentials: true
    })
  }
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
        <RichTextEditor displayedText={displayedText} />
      ) : null}

      <Button onClick={handleChange}>Update</Button>
    </>
  );
}
