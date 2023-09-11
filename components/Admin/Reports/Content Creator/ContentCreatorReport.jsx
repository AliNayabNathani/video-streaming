import React from 'react';
import {
    ChakraProvider,
    theme,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import SidebarWithHeader from '../../Sidebar/sidebartest';
import { HeaderWithButtons } from '../../SmallReusableComponents/HeaderWithButtons';
import { SearchBar } from '../../SmallReusableComponents/SearchBar';
import ContentCreatorReportTable from './ContentCreatorReportTable';

export default function ContentCreatorReport() {
    return (
        <ChakraProvider theme={theme}>
            <Box mx={1}>
                <SidebarWithHeader />
                <Box ml={{ base: 0, md: 60 }} p={4}>
                    <HeaderWithButtons heading={'Conent Creator Account Payment Report'} button1={'Export CSV'} />
                    <SearchBar />
                    <ContentCreatorReportTable />
                </Box>
            </Box>
        </ChakraProvider>
    );
}