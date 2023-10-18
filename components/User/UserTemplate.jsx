import React from 'react'
import { Avatar, Box, Button, Center, Divider, HStack, Icon, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { FiBell, FiKey, FiSearch } from 'react-icons/fi';
import { AiOutlineLine, AiOutlinePlayCircle, AiOutlineYoutube } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { BsDownload } from 'react-icons/bs';

const Navbar = () => {
    const user = useSelector((state) => state.auth);
    return (
        <HStack p={['1rem', '2rem']} w={'full'} justifyContent={'space-between'}>
            <Image w={'150px'} h={'50px'} src='/assests/videe0/Logo/Black _ White/sideBarLogo.png' />

            <HStack display={['none', 'flex']} w={'60%'} fontSize={'1.2rem'} justifyContent={'space-between'} fontWeight={'bold'}>
                <a style={{ cursor: 'pointer' }}>Home</a>
                <a style={{ cursor: 'pointer' }}>TV Shows</a>
                <a style={{ cursor: 'pointer' }}>Movies</a>
                <a style={{ cursor: 'pointer' }}>New & Popular</a>
                <a style={{ cursor: 'pointer' }}>MyList</a>
                <a style={{ cursor: 'pointer' }}>Browse by Language</a>
            </HStack>

            <HStack w={'20%'} justifyContent={'flex-end'}>
                <Icon _hover={{ color: "#55DF01" }}
                    aria-label="open menu"
                    cursor={'pointer'}
                    boxSize={[8, 6]}
                    as={FiSearch} />
                <Icon display={['none', 'flex']} boxSize={6} as={AiOutlineLine} transform="rotate(90deg)" />
                <Icon
                    boxSize={[8, 6]}
                    borderRadius={"0"}
                    _hover={{ color: "#55DF01" }}
                    aria-label="open menu"
                    cursor={'pointer'}
                    as={FiBell}
                />
                <Icon display={['none', 'flex']} boxSize={6} as={AiOutlineLine} transform="rotate(90deg)" />
                <Text display={['none', 'flex']} color={'#fff'}> Abheesh</Text>
                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                            size={'md'}
                            rounded={'full'}
                            src={'/assests/People/cena.jpg'}
                        />
                        <ChevronDownIcon mt={2} color={'#55DF01'} boxSize={8} />
                    </MenuButton>
                    <MenuList bg={'#232323'} alignItems={'center'}>

                        <MenuItem p={4} color={'white'} bg={'#232323'}>
                            <BsDownload />
                            <Text ml={4} color={'white'}>Downloads</Text>
                        </MenuItem>
                        <Divider bg={'#303030'} />
                        <MenuItem p={4} color={'white'} bg={'#232323'}>
                            <AiOutlineYoutube />
                            <Text ml={4} color={'white'}>Subscription</Text>
                        </MenuItem>
                        <Divider bg={'#303030'} />
                        <MenuItem p={4} color={'white'} bg={'#232323'}>
                            <FiKey />
                            <Text ml={4} color={'white'}>Rented Vidoes</Text>
                        </MenuItem>
                        <Divider bg={'#303030'} />
                        <MenuItem p={4} color={'white'} bg={'#232323'}>
                            <AiOutlinePlayCircle />
                            <Text ml={4} color={'white'}>Purchased Vidoes</Text>
                        </MenuItem>
                        <Divider bg={'#303030'} />
                    </MenuList>
                </Menu>
                <Image />
            </HStack>
        </HStack>
    );
}

const UserTemplate = ({ children }) => {
    return (
        <Box maxW={'100vw'}>
            <Navbar />

            {children}

        </Box>
    )
}

export default UserTemplate