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
import TransactionTable from './TransactionTable';

export default function Transaction() {
    return (
        <>
            <HeaderWithButtons heading={'Transaction Report Management'} button1={'Export CSV'} />
            <SearchBar />
            <TransactionTable />
        </>
    );
}