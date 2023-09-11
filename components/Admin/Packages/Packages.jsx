import { Box, Button, ChakraProvider, Flex, FormLabel, HStack, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { PageHeading } from "../SmallReusableComponents/Heading";
import PackageTable from "./PackageTable";

const ColumnSearch = () => (
    <HStack width={'100%'} justifyContent={'flex-end'} >
        <Flex >
            <FormLabel>
                Search All Columns
            </FormLabel>
            <Input />
            <Button ml={3} colorScheme="teal">Apply</Button>
            <Button ml={3} colorScheme="teal">Clear</Button>
        </Flex>
    </HStack>
);

export default function Packages() {
    return (
        <>
            <ChakraProvider>
                <Box mx={1}>
                    <SidebarWithHeader />
                    <Box ml={{ base: 0, md: 60 }} p={4} >
                        <PageHeading text={'Packages'} />
                        <ColumnSearch />
                        <PackageTable />
                    </Box>
                </Box>
            </ChakraProvider>
        </>
    );
}