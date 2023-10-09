'use client';

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Icon,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    VStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { LanguageSelect } from '../Reusable Components/LanguageSelect';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useRef } from 'react';

export default function Nav() {

    const MobileNav = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = useRef();
        return (
            <Box mt={3} display={{ base: 'block', md: 'none' }}>
                <Icon as={AiOutlineMenu} onClick={onOpen} />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <VStack mt={'5rem'}>
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        outlineColor={'#55DF01'}
                                        w={'150px'}
                                        h={'100px'}
                                        mb={'2rem'}
                                    >
                                        <Box>
                                            <Icon as={AiOutlineUser} color={'#55DF01'} boxSize={16} />
                                        </Box>
                                    </MenuButton>
                                    <MenuList bg={'black'} m={0} p={0}>
                                        <MenuItem bg={'black'} color={'whiteAlpha.600'}>Profile</MenuItem>
                                        <MenuItem bg={'black'} color={'whiteAlpha.600'}>Settings</MenuItem>
                                        <MenuDivider />
                                        <MenuItem bg={'black'} color={'whiteAlpha.600'}>Sign Out</MenuItem>
                                    </MenuList>
                                </Menu>
                                <LanguageSelect />

                                <Button width={'100%'} variant={'outline'}>
                                    Support
                                </Button>
                                <Button width={'100%'} variant={'solid'}>
                                    Login
                                </Button>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        )
    }
    return (
        <>
            <Box borderBottom={'2px solid #232323'} px={4} py={4}>
                <Flex h={'10vh'} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Image src={'/assests/videe0/Logo/Black _ White/sideBarLogo.png'}
                                alt="Logo"
                                w={"180px"}
                                h={"50px"} />
                        </Box>
                    </HStack>
                    <HStack display={['none', 'flex']} alignItems={'center'} spacing={'1rem'}>
                        <Button
                            variant={'outline'}
                        >
                            Support
                        </Button>
                        <LanguageSelect />
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                outlineColor={'#55DF01'}
                                minW={0}
                            >
                                <Box>
                                    <Icon as={AiOutlineUser} color={'#55DF01'} boxSize={6} />
                                </Box>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                    <MobileNav />
                </Flex>
            </Box >
        </>
    );
}
