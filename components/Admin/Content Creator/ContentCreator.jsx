import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { HeaderWithButtons } from "../SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import ContentCreatorTable from "../Tables/ContentCreatorTableData";

export default function ContentCreator() {
    return (
        <ChakraProvider>
            <Box mx={1}>
                <SidebarWithHeader />
                <Box ml={{ base: 0, md: 60 }} p={4}>
                    <HeaderWithButtons heading={'Content Creator Management'} button1={'Export CSV'} button2={'Add User'} />
                    <SearchBar />
                    <ContentCreatorTable />
                </Box>
            </Box>
        </ChakraProvider>
    );
}