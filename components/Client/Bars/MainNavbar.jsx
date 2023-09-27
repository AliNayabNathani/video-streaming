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
    Heading,
    Divider,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { LanguageSelect } from '../Reusable Components/LanguageSelect';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useRef } from 'react';
import { FiBell } from 'react-icons/fi';
import './style.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';

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

export default function Nav() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/Client/Profile');
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

                        <LanguageSelect />
                        <Menu>
                            <MenuButton
                                cursor={'pointer'}
                                minW={0}
                            >
                                <Box>
                                    <Icon
                                        boxSize={8}
                                        borderRadius={"0"}
                                        variant="ghost"
                                        color={"whiteAlpha.600"}
                                        _hover={{ color: "#55DF01" }}
                                        aria-label="open menu"
                                        cursor={'pointer'}
                                        as={FiBell}
                                    />
                                </Box>
                            </MenuButton>
                            <MenuList w={'600px'} p={0} m={0}>
                                <MenuItem p={3} color={'white'} bg={'#232323'}>
                                    <HStack w={'100%'} justifyContent={'space-between'}>
                                        <Heading size={'md'}>Notifications</Heading>
                                        <Text textDecor={'underline'}>Mark all Read </Text>
                                    </HStack>
                                </MenuItem>

                                <MenuItem p={5} bg={'#323232'} color={'white'}>
                                    <Box>
                                        <Heading size={'md'}>Video Purchased</Heading>
                                        <Text fontSize={'0.9rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eum aliquid neque, hic esse minima repudiandae. Obcaecati vitae assumenda officia.</Text>
                                    </Box>
                                </MenuItem>
                                <Divider />

                            </MenuList>
                        </Menu>

                        <Icon as={FaRegUserCircle}
                            color={'#55DF01'}
                            cursor={'pointer'}
                            boxSize={10}
                            onClick={handleNavigation}
                        />

                    </HStack >
                    <MobileNav />
                </Flex >
            </Box >
        </>
    );
}
