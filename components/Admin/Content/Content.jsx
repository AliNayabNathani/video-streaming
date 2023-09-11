import { Box, Button, ChakraProvider, Divider, Flex, HStack, Stack, useColorModeValue } from "@chakra-ui/react";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { PageHeading } from "../SmallReusableComponents/Heading";
import RichTextEditor from "./TextEditor";
import "./content.css";
import { ContentBar } from "../SmallReusableComponents/ContentBar";
import { useState } from "react";

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