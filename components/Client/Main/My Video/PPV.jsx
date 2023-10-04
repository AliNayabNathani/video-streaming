import { Box, Button, GridItem, HStack, Heading, Icon, IconButton, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { LiveData } from './LiveData';
import { NavButton, PinkButton } from "../../Reusable Components/MainButton";
import { VideoPlayer } from "../../Reusable Components/VideoPlayer";
import { useRouter } from "next/router";

export default function PPV() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/Client/CreatePPV');
    }
    return (
        <Box>
            <Box mt={'2rem'} textAlign={'end'}>
                <Button onClick={handleNavigation}> Create PPV</Button>
            </Box>
            <VStack mt={'1rem'}>
                {LiveData.map((live, index) => (
                    < Stack key={index} justifyContent={['center', 'space-between']} width={'100%'} p={'1.5rem'} bg={'#232323'} direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                        <Box
                            // Adjust the width as needed
                            maxWidth="100%" // Ensure the player doesn't exceed its original size
                            // height={{ base: "100%", md: 'auto' }}
                            h={'100%'}
                        >
                            <VideoPlayer />
                        </Box>


                        <Stack alignItems={'flex-start'} spacing={'1rem'} direction={'column'}>
                            <Heading size={'md'}>{live.name}</Heading>
                            <Text>Start Date: <b>{live.Start_Date}</b></Text>
                            <Text>End Date: <b>{live.End_Date}</b></Text>
                            <Text>Venue: <b>{live.Venue}, {live.Country}</b></Text>
                            <Text>Contact Number: <b>{live.Contact}</b></Text>
                        </Stack>
                        <Stack alignItems={'flex-start'} spacing={'1rem'} direction={'column'}>
                            <Text>Start Time: <b>{live.Start_Time}</b></Text>
                            <Text>End Time: <b>${live.End_Time}</b></Text>
                            <Text>Ticket:  <b>{live.Price}$-seat</b></Text>
                        </Stack>

                        <VStack justifyContent={'space-between'} spacing={'1rem'}>
                            <Button w={'100%'}>Edit</Button>
                            <Button variant={'outline'} w={'100%'} px={['auto', 8]}>Go Live</Button>
                        </VStack>
                    </Stack>
                ))}
            </VStack>
        </Box >
    );
}