import React, { createContext, useState } from 'react';
import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import { useDetailContext } from '../../components/Client/Context/context';
import Footer from '../../components/Client/Bars/Footer';
import Sidebar from '../../components/Client/Bars/MainSidebar';
import Nav from '../../components/Client/Bars/MainNavbar';

export default function Main() {
    const { title } = useDetailContext();
    return (

        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh" >
            <Nav />
            <Box maxH={'100%'} display={['block', 'flex']} flex={1}>
                <Sidebar />
                <Box overflowY={'auto'} p={4}>

                </Box>
            </Box>
            <Footer />
        </Box >

    );
}