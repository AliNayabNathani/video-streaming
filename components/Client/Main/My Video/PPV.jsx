import { Box, Button, GridItem, HStack, Heading, Icon, IconButton, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { LiveData } from './LiveData';
import { NavButton, PinkButton } from "../../Reusable Components/MainButton";

export default function PPV() {
    return (
        <Box mx={{ base: '0', md: '5rem' }}>
            <Box mt={'2rem'} textAlign={'end'}>
                <NavButton> Create PPV</NavButton>
            </Box>
            <VStack mt={'1rem'}>
                {LiveData.map((live) => (
                    < Stack justifyContent={['center', 'space-between']} width={'100%'} p={'1.5rem'} bg={'white'} direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                        <Box
                            // Adjust the width as needed
                            maxWidth="100%" // Ensure the player doesn't exceed its original size
                            height={{ base: "100%", md: '150px' }}
                        >
                            <ReactPlayer
                                url={live.url}
                                width="100%"
                                height="100%" // This ensures the player maintains its aspect ratio
                            />
                        </Box>

                        <VStack alignItems={'start'} fontSize={'md'} spacing={['0.5rem', '1rem']}>
                            <Heading>{live.name}</Heading>
                            <Stack direction={{ base: 'column', md: 'row' }}>
                                <Text>Start Date {live.Start_Date}</Text>
                                <Text>Start Time {live.Start_Time}</Text>
                            </Stack>
                            <Stack direction={{ base: 'column', md: 'row' }}>
                                <Text>End Date {live.End_Date}</Text>
                                <Text>End Time {live.End_Time}</Text>
                            </Stack>
                            <Stack direction={{ base: 'column', md: 'row' }}>
                                <Text>Venue {live.Venue}, {live.Country}</Text>
                            </Stack>
                        </VStack>

                        <VStack alignSelf={'normal'} justifyContent={'space-between'}>
                            <VStack>
                                <Text>Contact Number {live.Contact}</Text>
                                <Text>Ticket {live.Price}$/seat</Text>
                            </VStack>
                            <HStack justifyContent={'space-between'}>
                                <PinkButton>Edit</PinkButton>
                                <PinkButton>Go Live</PinkButton>
                            </HStack>
                        </VStack>
                    </Stack>
                ))}
            </VStack>
        </Box >
    );
}