import { useState } from "react";
import RichTextEditor from "../components/Admin/Content/TextEditor";
import { ContentBar } from "../components/Admin/SmallReusableComponents/ContentBar";
import { PageHeading } from "../components/Admin/SmallReusableComponents/Heading";

export default function Content() {
    const [SelectedButton, SetSelectedButton] = useState();
    return (
        <>
            <PageHeading text={'Content Management'} />
            <ContentBar Text_1={'Terms and Conditions'} Text_2={'Privacy Policy'} Text_3={'About Us'} SetSelectedButton={SetSelectedButton} />
            <RichTextEditor />
        </>
    );
}