
import React, { createContext, useContext, useState } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    Drawer,
    DrawerContent,
    useDisclosure,
    Stack,
} from '@chakra-ui/react';
import {
    FiMenu,
} from 'react-icons/fi';
import { useDetailContext } from '../Context/context';
import { MainItems } from '../Details/Data';
import { useRouter } from 'next/router';

export default function Sidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { title } = useDetailContext();

    return (
        <>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobileSubnav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        </>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    const router = useRouter();

    const handleRoute = (to) => {
        console.log(to);
        router.push(to);
    }
    return (
        <Box
            transition="3s ease"
            borderRight={'1px solid #232323'}
            w={{ base: 'full', md: '20%' }}
            overflowY={'auto'}
            borderY={'none'}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '12px', // Adjust the width of the scrollbar
                    bg: 'rgba(0, 0, 0, 0.48)'
                },
                '&::-webkit-scrollbar-thumb': {
                    bg: 'rgba(0, 0, 0, 0.48)', // Color of the scrollbar thumb
                    borderRadius: '8px', // Radius of the scrollbar thumb
                },
                // You can add more styles for different states (hover, etc.) as needed
            }}
            {...rest}

        >
            <Flex display={{ base: 'flex', md: 'none' }} h="20" alignItems="center" mx="8" justifyContent="space-between">
                <CloseButton onClick={onClose} />
            </Flex>
            <Box color={'whiteAlpha.600'}>
                {MainItems.map((link, index) => (
                    <Stack direction={'column'} key={index} onClick={() => handleRoute(link.to)}>
                        <NavItem icon={link.Icon}>
                            {link.name}
                        </NavItem>
                    </Stack>
                ))}
            </Box>
        </Box>
    );
};

const NavItem = ({ icon, children, ...rest }) => {
    const { updateTitle } = useDetailContext();
    return (
        <Box
            as="a"
            href="#"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none', color: '#55DF01' }}
        >
            <Flex
                border={'1px solid black'}
                align="center"
                px="4"
                py="3"
                role="group"
                cursor="pointer"
                fontSize={'1rem'}
                {...rest}

            >
                <Icon as={icon} mr="2" boxSize={5} />
                {children}
            </Flex>
        </Box>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: '25%' }}
            px={{ base: 4, md: 24 }}
            alignItems="center"
            borderBottomWidth="1px"
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
        </Flex>
    );
};
