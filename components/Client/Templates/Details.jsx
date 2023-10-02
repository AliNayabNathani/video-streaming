import React, { createContext, useState } from 'react';
import {
    Box,
    ChakraProvider,
    Container,
    theme,
    useColorModeValue,
} from '@chakra-ui/react';
import Nav from '../Bars/DetailsNavbar';
import Footer from '../Bars/Footer';
import Sidebar from '../Bars/DetailsSidebar';
import { DetailText } from '../Details/DetailText';
import { useDetailContext } from '../Context/context';
import { LinkItems } from '../Details/Data';

export default function Details() {
    const { title } = useDetailContext();
    return (
        <ProtectedRoute>
            <Box
                display="flex"
                flexDirection="column"
                minHeight="100vh" >
                <Nav />
                <Box display={'flex'} overflow="hidden" flex='1'>
                    <Sidebar />
                    <Box ml={{ base: 0, md: '25%' }} overflowY={'scroll'} p={4}>
                        <DetailText text={title} />
                    </Box>
                </Box>
                <Footer />
            </Box >
        </ProtectedRoute>
    );
}