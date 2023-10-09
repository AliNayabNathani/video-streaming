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
import LiveVideoTable from './LiveVideoTable';


export default function LiveVideoReport() {
    return (
        <>
            <HeaderWithButtons heading={'Live Video Payments Reports'} button1={'Export CSV'} />
            <SearchBar />
            <LiveVideoTable />
        </>
    );
}