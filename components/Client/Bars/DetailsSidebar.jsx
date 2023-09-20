import React, { createContext, useContext, useState } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Collapse,
    UnorderedList,
    ListItem,
    HStack,
} from '@chakra-ui/react';
import {
    FiMenu,
} from 'react-icons/fi';
import { useDetailContext } from '../Context/context';
import { LinkItems } from '../Details/Data';
import { BsChevronDown } from 'react-icons/bs';

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
            <MobileSubNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        </>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    const [openItem, setOpenItem] = useState(null);

    const handleItemClick = (index, e) => {
        if (openItem === index) {
            setOpenItem(null);
        } else {
            setOpenItem(index);
        }
    };
    return (
        <Box
            transition="3s ease"
            borderRight="1px"
            w={{ base: 'full', md: '60%' }}
            overflowY={'auto'}
            border={'2px solid black'}
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
                {LinkItems.map((link, index) => (
                    <Box key={index}>
                        <NavItem
                            cursor="pointer"
                            onClick={() => handleItemClick(index)}
                        >
                            <div>
                                <Icon as={link.Icon} mr="2" boxSize={5} />
                                {link.name}
                            </div>
                            <Icon as={BsChevronDown} textAlign={'end'} />
                        </NavItem>
                        {link.subItems &&
                            <Collapse in={openItem === index}>
                                <UnorderedList>
                                    {link.subItems.map((subItem, subIndex) => (
                                        <ListItem p={1} listStyleType={'none'} key={subIndex}>
                                            <HStack>
                                                <Box _focus={{ boxShadow: 'none', border: '1px solid #DD6B20' }} borderRadius={'20px'} border={'1px solid black'} color={'white'} p={'4px'}></Box>
                                                <NavSubItem>
                                                    {subItem.name}
                                                </NavSubItem>
                                            </HStack>
                                        </ListItem>
                                    ))}
                                </UnorderedList>
                            </Collapse>
                        }
                    </Box>
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
                fontSize={'1.1rem'}
                justifyContent={'space-between'}
                {...rest}

            >
                {children}
            </Flex>
        </Box>
    );
};

const NavSubItem = ({ children }) => {
    const { updateTitle } = useDetailContext();
    return (
        <Box
            as="a"
            href="#"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none', color: '#55DF01' }}
            fontSize={'1.05rem'}
            onClick={(e) => updateTitle(e.target.textContent)}
        >
            {children}
        </Box>
    )
}


const MobileSubNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: '25%' }}
            px={{ base: 4, md: 24 }}
            height="20"
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
