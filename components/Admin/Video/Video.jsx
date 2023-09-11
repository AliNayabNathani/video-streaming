import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { PageHeading } from "../SmallReusableComponents/Heading";
import VideoTable from "./VideoTable";
import VideoJS from "../SmallReusableComponents/Video";
import React from "react";
import videojs from "video.js";

export default function Video() {
    return (
        <>
            <PageHeading text={'Video Management'} />
            <SearchBar />
            <VideoTable />

        </>
    );
}