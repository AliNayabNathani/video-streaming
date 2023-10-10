import React, { createContext, useState } from 'react';
import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import { useDetailContext } from '../../components/Client/Context/context';
import Nav from '../../components/Client/Bars/DetailsNavbar';
import Sidebar from '../../components/Client/Bars/DetailsSidebar';
import { DetailText } from '../../components/Client/Details/DetailText';
import Footer from '../../components/Client/Bars/Footer';

export default function Details() {
    const { title } = useDetailContext();
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh" >
            <Nav />
            <Box maxH={'100%'} display={['block', 'flex']} flex='1'>
                <Sidebar />
                <Box overflowY={'auto'} p={4}>
                    <DetailText text={title} />
                </Box>
            </Box>
            <Footer />
        </Box >
    );
}