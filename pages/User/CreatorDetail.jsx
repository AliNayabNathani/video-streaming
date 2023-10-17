import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import UserTemplate from '../../components/User/UserTemplate'
import { Avatar, Box, Button, HStack, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import { VideoPlayer } from '../../components/Admin/SmallReusableComponents/VideoPlayer';
import { FiDownload } from 'react-icons/fi';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const EpisodeData = [
    {
        name: 'Dark',
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
        episodes: [
            {
                name: 'Episode 1',
                Duration: '25',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!"

            },
            {
                name: 'Episode 2',
                Duration: '30',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!"
            },
            {
                name: 'Episode 3',
                Duration: '30',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!"
            },
            {
                name: 'Episode 4',
                Duration: '30',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!"
            },
            {
                name: 'Episode 5',
                Duration: '30',
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
                poster: 'https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8',
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam aperiam explicabo similique reprehenderit eligendi. Aliquam ad atque tempore in. Accusamus ipsum tempore animi sapiente veritatis ipsam similique blanditiis inventore!"
            },
        ]
    },
];

const CreatorDetail = () => {
    const [ratings, setRatings] = useState(0);
    const ratingChanged = (newRating) => {
        setRatings(newRating);
    }
    return (
        <UserTemplate>
            <Box p={['2rem', '5rem']}>
                <HStack alignItems={'center'} spacing={'2rem'} mb={'2rem'}>
                    <Icon as={AiOutlineArrowLeft} boxSize={6} />
                    <Heading size={'lg'}>Creator Detail</Heading>
                </HStack>
                <HStack mb={'2rem'} justifyContent={'space-between'}>
                    <HStack spacing={'2rem'}>
                        <Box rounded={'full'} border={'1px solid #55DF01'} p={1}>
                            <Avatar
                                boxSize={20}
                                rounded={'full'}
                                src={'/assests/People/cena.jpg'}
                            />
                        </Box>
                        <Box>
                            <Heading size={'md'}>Zack</Heading>
                            <Text>4.1 Million Subscribers</Text>
                        </Box>
                    </HStack>
                    <Button px={16}>Subscribe</Button>
                </HStack>

                <Heading size={'lg'}>Updated Videos</Heading>
                {
                    EpisodeData.map((data) => {
                        return data.episodes.map((episode, index) => (
                            <Stack h={'100%'} key={index} spacing={'3rem'} cursor={'pointer'} my={'1rem'} justifyContent={['center', 'space-between']} width={'100%'} p={10} bg={'#232323'} direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                                <Box
                                    maxWidth="100%" // Ensure the player doesn't exceed its original size
                                    height={{ base: "100%", md: 'auto' }}
                                >
                                    <VideoPlayer
                                        poster={episode.poster}
                                        name={episode.name}
                                        src={episode.src} />
                                </Box>
                                <VStack h={'100%'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                                    <HStack w={'100%'} justifyContent={'space-between'}>
                                        <Heading size={'md'}>{episode.name}</Heading>

                                        <ReactStars
                                            count={4}
                                            size={36}
                                            onChange={ratingChanged}
                                            color={'gray'}
                                            activeColor="#55DF01"
                                        />
                                    </HStack>
                                    <Text>{episode.Duration} min</Text>
                                    <Text>{episode.desc}</Text>
                                </VStack>
                            </Stack>
                        ))
                    })
                }
            </Box >
        </UserTemplate >
    )
}

export default CreatorDetail