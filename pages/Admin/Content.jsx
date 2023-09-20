import { useEffect, useState } from "react";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { ContentBar } from "../../components/Admin/SmallReusableComponents/ContentBar";
import RichTextEditor from "../../components/Admin/Content/TextEditor";

export default function Content() {
  const [SelectedButton, SetSelectedButton] = useState("Terms and Conditions");

  const [dummyText, setDummyText] = useState("");

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
      <RichTextEditor dummyText={dummyText} />
    </>
  );
}
