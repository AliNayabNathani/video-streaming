import { Avatar, Box, Button, Center, GridItem, HStack, Heading, Icon, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Router, useRouter } from 'next/router';
import React from 'react'
import { AiOutlineLine } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FiBell, FiSearch } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const userDetails = [
    {
        name: 'Abheesh',
        src: '/assests/People/cena.jpg',
    },
    {
        name: 'Nayab',
        src: '/assests/People/cena.jpg',
    },
    {
        name: 'Shahmir',
        src: '/assests/People/cena.jpg',
    },
    {
        name: 'Nameera',
        src: '/assests/People/cena.jpg',
    },
    {
        name: 'Sarim',
        src: '/assests/People/cena.jpg',
    }

]

const Navbar = () => {
    const user = useSelector((state) => state.auth);
    return (
        <HStack p={['1rem', '2rem']} w={'full'} justifyContent={'space-between'}>
            <Image w={'150px'} h={'50px'} src='/assests/videe0/Logo/Black _ White/sideBarLogo.png' />
            <HStack>
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
                <Text display={['none', 'flex']} color={'#fff'}> {userDetails[0]?.name}</Text>
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
                            src={userDetails[0].src}
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
const userSelection = () => {
    const router = useRouter();
    return (
        <Box bg={'black'}>
            <Navbar />
            <VStack p={['2rem', '3rem']} spacing={['2rem', '5rem']}>
                <Heading textAlign='center'>Who's watching?</Heading>
                <SimpleGrid spacing={4} columns={['2', '4', '6']}>
                    {userDetails.map((user) => (
                        <GridItem cursor={'pointer'} onClick={() => router.push('/User/Dashboard')} w={['150px', '160px']} h={['150px', '170px']} alignItems={'center'} justifyContent={'center'} marginX={'1rem'} border={'1px solid #55DF01'} rounded={['none', 'full']} p={['0', '0.5rem']}>
                            <Image w={'150px'} h={'150px'} border={'1px solid #55DF01'} rounded={['none', 'full']} src={user.src} />
                        </GridItem>
                    ))}
                    <GridItem >
                        <VStack h={'100%'} alignItems={'center'} justifyContent={'center'}>
                            <Icon boxSize={16} color={'#55DF01'} as={BsFillPlusCircleFill} />
                            <Text size={'lg'} color={'#55DF01'}>Add Profiles</Text>
                        </VStack>
                    </GridItem>
                </SimpleGrid>
                <HStack w={'100%'} justifyContent={'center'}>
                    <Button px={'2rem'} py={'1rem'} variant={'outline'} textAlign={'center'}>Manage Profiles</Button>
                </HStack>
            </VStack>
        </Box>
    )
}

export default userSelection