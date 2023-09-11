import React from 'react';
import {
    ChakraProvider,
    theme,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';

import SidebarWithHeader from '../Sidebar/sidebartest';
import "react-datepicker/dist/react-datepicker.css";
import { User_Tables } from '../Tables/Table';
import { SearchBar } from '../SmallReusableComponents/SearchBar';
import { HeaderWithButtons } from '../SmallReusableComponents/HeaderWithButtons';

export default function User() {
    return (
        <ChakraProvider theme={theme}>
            <Box mx={1}>
                <SidebarWithHeader />
                <Box ml={{ base: 0, md: 60 }} p={4}>
                    <HeaderWithButtons heading={'User Management'} button1={'Export CSV'} button2={'Add User'} />
                    <SearchBar />
                    <User_Tables />
                </Box>
            </Box>
        </ChakraProvider>
    );
}