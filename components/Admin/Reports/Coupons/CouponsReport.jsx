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
import CouponsReportTable from './CouponsReportTable';

export default function CouponsReport() {
    return (
        <ChakraProvider theme={theme}>
            <Box mx={1}>
                <SidebarWithHeader />
                <Box ml={{ base: 0, md: 60 }} p={4}>
                    <HeaderWithButtons heading={'Coupons Redemption Report'} button1={'Export CSV'} />
                    <SearchBar />
                    <CouponsReportTable />
                </Box>
            </Box>
        </ChakraProvider>
    );
}