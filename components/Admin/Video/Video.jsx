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
            <ChakraProvider>
                <Box mx={1}>
                    <SidebarWithHeader />
                    <Box ml={{ base: 0, md: 60 }} p={4} >
                        <PageHeading text={'Video Management'} />
                        <SearchBar />
                        <VideoTable />
                    </Box>
                </Box>
            </ChakraProvider>
        </>
    );
}