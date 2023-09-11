import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { SearchBar } from "../SmallReusableComponents/SearchBar";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { PageHeading } from "../SmallReusableComponents/Heading";
import { ContentApprovalTable } from "./ContentApprovalTable";

export default function ContentApproval() {
    return (
        <>
            <ChakraProvider>
                <Box mx={1}>
                    <SidebarWithHeader />
                    <Box ml={{ base: 0, md: 60 }} p={4} >
                        <PageHeading text={'Content Approval Management'} />
                        <SearchBar />
                        <ContentApprovalTable />
                    </Box>
                </Box>
            </ChakraProvider>
        </>
    );
}