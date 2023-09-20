import { Box, Button, GridItem, HStack, Heading, Icon, IconButton, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { FiToggleRight, FiToggleLeft } from 'react-icons/fi';
import { FaEdit } from 'react-icons/fa';
import { ToggleButton } from "../../Reusable Components/MainButton";
import { ReactPlayerOutline } from "../../Reusable Components/ReactPlayer";

export function VideoDetails({ vid }) {
    console.log(vid);
    return (
        <Box bg={'#232323'} p={['0', '5rem']}>
            <Stack justifyContent={['center', 'space-between']} width={'100%'} height={'100%'} p={'1.5rem'} direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                <Box
                    // Adjust the width as needed
                    maxWidth="100%" // Ensure the player doesn't exceed its original size
                    height={{ base: "100%", md: '150px' }}
                >
                    <ReactPlayer
                        url={vid.url}
                        width="100%"
                        height="100%" // This ensures the player maintains its aspect ratio
                    />
                </Box>
                <VStack>
                    <HStack>
                        <VStack alignItems={'center'} fontSize={'lg'} spacing={['1rem', '2rem']}>
                            <Stack alignItems={'center'} spacing={'1rem'} direction={{ base: 'column', md: 'row' }}>
                                <Text>{vid.name}</Text>
                                <Text>{vid.Type}</Text>
                                <Text>{vid.views} Views</Text>
                                <Text>Uploaded Date {vid.upload}</Text>
                            </Stack>
                            <Stack alignItems={'center'} spacing={{ base: '1rem', md: '2rem' }} direction={{ base: 'column', md: 'row' }}>
                                <Text>Rented Amount: ${vid.Rented_Amount}</Text>
                                <Text>Purchasing Amount: ${vid.Purchasing_Amount}</Text>
                            </Stack>
                        </VStack>

                        <Stack direction={{ base: 'row', md: 'column' }} alignSelf={'normal'} justifyContent={'space-between'}>
                            <Button>Publish</Button>
                            <HStack>
                                <Icon as={FaEdit} />
                                <ToggleButton />
                            </HStack>
                        </Stack>
                    </HStack>
                    <VStack>
                        <Heading size={'md'} textDecor={'underline'}>Descriptions</Heading>
                        <Text>{vid.desc}</Text>
                    </VStack>
                    <VStack>
                        <Heading size={'sm'} textDecor={'underline'}>Cast/Crew</Heading>
                        <Text>Cast: {vid.Crew.join(', ')}</Text>
                        <Text>Genre:{vid.Genre}</Text>
                        <Text>{vid.Medium}</Text>
                    </VStack>
                    <VStack>
                        <Heading size={'sm'} textDecor={'underline'}>Trailers</Heading>
                        <HStack>
                            <ReactPlayerOutline url={vid.url} />
                            <ReactPlayerOutline url={vid.url} />
                            <ReactPlayerOutline url={vid.url} />
                        </HStack>
                    </VStack>
                    <VStack>
                        <Heading size={'sm'} textDecor={'underline'}>Trailers</Heading>
                        <HStack>
                            <ReactPlayerOutline url={vid.url} />
                            <ReactPlayerOutline url={vid.url} />
                            <ReactPlayerOutline url={vid.url} />
                            <ReactPlayerOutline url={vid.url} />
                            <ReactPlayerOutline url={vid.url} />
                        </HStack>
                    </VStack>
                </VStack>
            </Stack>
        </Box>
    )
}