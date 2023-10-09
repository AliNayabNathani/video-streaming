import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import SidebarWithHeader from "../Sidebar/sidebartest";
import ChannelTable from "./ChannelTable";
import { PageHeading } from "../SmallReusableComponents/Heading";

export default function Channel() {
    return (
        <>
            <PageHeading text={'Channel Management'} />
            <SearchBar />
            <ChannelTable />
        </>
    );
}