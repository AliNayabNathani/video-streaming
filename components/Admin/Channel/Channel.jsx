import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import SidebarWithHeader from "../Sidebar/sidebartest";
import ChannelTable from "./ChannelTable";
import { PageHeading } from "../SmallReusableComponents/Heading";

export default function Channel() {
    return (
        <>
            <Box mx={1}>
                <SidebarWithHeader />
                <Box ml={{ base: 0, md: 60 }} p={4} >
                    <PageHeading text={'Channel Management'} />
                    <SearchBar />
                    <ChannelTable />
                </Box>
            </Box>
        </>
    );
}