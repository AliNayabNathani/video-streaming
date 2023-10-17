import React from 'react'
import { Avatar, Box, Button, Center, HStack, Icon, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { FiBell, FiSearch } from 'react-icons/fi';
import { AiOutlineLine } from 'react-icons/ai';
import { useSelector } from 'react-redux';

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

            {/* <Menu display={['block', 'none']}>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                </MenuButton>
                <MenuList alignItems={'center'}>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>TV Shows</MenuItem>
                    <MenuItem>Movies</MenuItem>
                    <MenuItem>New & Popular</MenuItem>
                    <MenuItem>MyList</MenuItem>
                    <MenuItem>Browse by Language</MenuItem>
                </MenuList>
            </Menu> */}
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
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'2xl'}
                                src={'/assests/People/cena.jpg'}
                            />
                        </Center>
                        <br />
                        <Center>
                            <p></p>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem>Your Servers</MenuItem>
                        <MenuItem>Account Settings</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
                <Image />
            </HStack>
        </HStack>
    );
}

const UserTemplate = ({ children }) => {
    return (
        <>
            <Navbar />

            {children}

        </>
    )
}

export default UserTemplate