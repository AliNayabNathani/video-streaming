import React, { useState } from 'react'
import UserTemplate from '../../components/User/UserTemplate'
import { Avatar, Box, Button, Flex, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react';

const FriendsList = [
    {
        name: 'Alice',
        time: '3:06 pm',
        date: '18-10-2023',
        status: false,
        src: '/assests/People/cena.jpg',
    },
    {
        name: 'Bob',
        time: '2:45 am',
        date: '15-10-2023',
        status: true,
        src: '/assests/People/cena.jpg',
    },
    {
        name: 'Charlie',
        time: '12:30 pm',
        date: '5-8-2023',
        status: false,
        src: '/assests/People/cena.jpg',
    },
    {
        name: 'David',
        time: '8:15 pm',
        date: '10-1-2023',
        status: true,
        src: '/assests/People/cena.jpg',
    },
    {
        name: 'Ella',
        time: '10:20 am',
        date: '10-12-2022',
        status: false,
        src: '/assests/People/cena.jpg',
    },
];

const MyFriends = () => {
    const currentDate = new Date();
    const today = new Date(currentDate);
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    return (
        <VStack spacing={4}>
            {FriendsList.map((friend, index) => {
                const dateParts = friend.date.split('-');
                const friendDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                console.log(dateParts[2], dateParts[1] - 1, dateParts[0])
                console.log(friendDate);
                const dateFormatter = new Intl.DateTimeFormat('en', { day: '2-digit', month: '2-digit', year: 'numeric' });

                const displayDate = friendDate.getTime() === today.getTime()
                    ? 'Today'
                    : friendDate.getTime() === yesterday.getTime()
                        ? 'Yesterday'
                        : dateFormatter.format(friendDate);

                return (
                    <HStack justifyContent={'space-between'} w={'100%'} bg={'#232323'} key={index} py={4} px={8} borderRadius={'5px'}>
                        <HStack>
                            <Avatar border={'1px solid #55DF01'} src={friend.src} />
                            <VStack ml={4} alignItems={'flex-start'}>
                                <Heading size={'sm'}>{friend.name}</Heading>
                                <Text>{displayDate} {friend.time}</Text>
                            </VStack>
                        </HStack>
                        <Button px={[8, 16]}>Unfriend</Button>
                    </HStack>
                )
            })}
        </VStack>
    );
}

const FriendRequest = () => {
    const currentDate = new Date();
    const today = new Date(currentDate);
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    return (
        <VStack spacing={4}>
            {FriendsList.map((friend, index) => {
                const dateParts = friend.date.split('-');
                const friendDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                console.log(dateParts[2], dateParts[1] - 1, dateParts[0])
                console.log(friendDate);
                const dateFormatter = new Intl.DateTimeFormat('en', { day: '2-digit', month: '2-digit', year: 'numeric' });

                const displayDate = friendDate.getTime() === today.getTime()
                    ? 'Today'
                    : friendDate.getTime() === yesterday.getTime()
                        ? 'Yesterday'
                        : dateFormatter.format(friendDate);
                return (
                    <HStack justifyContent={'space-between'} w={'100%'} bg={'#232323'} key={index} py={4} px={[4, 8]} borderRadius={'5px'}>
                        <HStack>
                            <Avatar border={'1px solid #55DF01'} src={friend.src} />
                            <VStack ml={4} alignItems={'flex-start'}>
                                <Heading size={'sm'}>{friend.name}</Heading>
                                <Stack direction={['column', 'row']}>
                                    <Text>{displayDate} </Text>
                                    <Text>{friend.time}</Text>
                                </Stack>
                            </VStack>
                        </HStack>
                        <HStack>
                            <Button px={[4, 32]}>Accept</Button>
                            <Button _hover={{ bg: 'white', color: 'red' }} px={[4, 32]} color={'white'} bg={'red'}>Reject</Button>
                        </HStack>
                    </HStack>
                )
            })}
        </VStack>
    );
}

const FindFriends = () => {
    const currentDate = new Date();
    const today = new Date(currentDate);
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    return (
        <VStack spacing={4}>
            {FriendsList.map((friend, index) => {
                const dateParts = friend.date.split('-');
                const friendDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                console.log(dateParts[2], dateParts[1] - 1, dateParts[0])
                console.log(friendDate);
                const dateFormatter = new Intl.DateTimeFormat('en', { day: '2-digit', month: '2-digit', year: 'numeric' });

                const displayDate = friendDate.getTime() === today.getTime()
                    ? 'Today'
                    : friendDate.getTime() === yesterday.getTime()
                        ? 'Yesterday'
                        : dateFormatter.format(friendDate);
                return (
                    <HStack justifyContent={'space-between'} w={'100%'} bg={'#232323'} key={index} py={4} px={[4, 8]} borderRadius={'5px'}>
                        <HStack>
                            <Avatar border={'1px solid #55DF01'} src={friend.src} />
                            <VStack ml={4} alignItems={'flex-start'}>
                                <Heading size={'sm'}>{friend.name}</Heading>
                                <Stack direction={['column', 'row']}>
                                    <Text>{displayDate} </Text>
                                    <Text>{friend.time}</Text>
                                </Stack>
                            </VStack>
                        </HStack>

                        <Button variant={'outline'} px={[4, 32]}>Send Request</Button>
                    </HStack>
                )
            })}
        </VStack>
    );
}

const EpisodeOutline = ({ children, setSection, text }) => {
    const handleClick = (text) => {
        setSection(text);
    };

    return (
        <Button
            _active={{ color: "#55DF01", border: "1px solid #55DF01" }}
            width={"80%"}
            bg={"transparent"}
            variant={"outline"}
            onClick={() => handleClick(text)}
            borderRadius={"0"}
            py={4}
            px={2}
            fontSize={{ base: "sm", md: "md" }}
        >
            {children}
        </Button>
    );
};

const Friends = () => {
    const [section, setSection] = useState();
    return (
        <UserTemplate>
            <Box px={8}>
                <Flex alignItems={"center"}>
                    <Flex
                        width={"100%"}
                        py={"2rem"}
                        borderRight={"2px solid black"}
                    >
                        <EpisodeOutline
                            setSection={setSection}
                            text="My Friends"
                        >
                            My Friends
                        </EpisodeOutline>


                        <EpisodeOutline
                            setSection={setSection}
                            text="Friend Request"
                        >
                            Friend Request
                        </EpisodeOutline>

                        <EpisodeOutline
                            setSection={setSection}
                            text="Find Friends"
                        >
                            Find Friends
                        </EpisodeOutline>
                    </Flex>
                </Flex>
                {section === "My Friends" ? (
                    <MyFriends />
                ) : section === "Friend Request" ? (
                    <FriendRequest />
                ) : section === "Find Friends" ? (
                    <FindFriends />
                ) : null}
            </Box>
        </UserTemplate>
    )
}

export default Friends