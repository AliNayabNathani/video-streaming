import { AspectRatio, Box, Button, ChakraProvider, GridItem, HStack, IconButton, Image, SimpleGrid, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { PageHeading } from "../SmallReusableComponents/Heading";
import { FaPause, FaPlay } from "react-icons/fa";
import React from "react";
import { VideoPlayer } from "../SmallReusableComponents/VideoPlayer";
const ChannelDetailData = [
    {
        Channel_ID: '11234',
        Channel_Title: 'The Dark Web',
        Creator_Name: 'Zack',
        Created_Date: '2/12/2022'
    }
];

const ChannelDetailColumn = [
    'Channel_ID',
    'Channel_Title',
    'Creator_Name',
    'Created_Date'
]

const ChannelInfo = () => {
    return (
        <VStack>
            <HStack width={'100%'}>
                <Text align={'start'}> Channel ID: </Text>
                <Text align={'center'}>{ChannelDetailData[0].Channel_ID}</Text>
            </HStack>
            <HStack width={'100%'}>
                <Text textAlign={'start'}> Channel Title: </Text>
                <Text textAlign={'center'}>{ChannelDetailData[0].Channel_Title}</Text>
            </HStack>
            <HStack width={'100%'}>
                <Text align={'start'}> Creator_Name: </Text>
                <Text align={'end'}>{ChannelDetailData[0].Creator_Name}</Text>
            </HStack>
            <HStack width={'100%'}>
                <Text align={'start'}> Created_Date: </Text>
                <Text align={'end'}>{ChannelDetailData[0].Created_Date}</Text>
            </HStack>
        </VStack>
    );
}

// const VideoOutline = () => {
//     return (
//         <AspectRatio maxW='400px' ratio={4 / 3}>
//             <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
//         </AspectRatio>
//     );
// }

export default function ChannelDetails() {
    return (
        <ChakraProvider>
            <Box mx={1}>
                <SidebarWithHeader />
                <Box ml={{ base: 0, md: 60 }} p={4} >

                    <PageHeading text={'Channel Management'} />
                    <ChannelInfo />
                    <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }}>
                        <GridItem colSpan={1}>
                            <VideoPlayer />
                            <Text>Show 1</Text>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <VideoPlayer />
                            <Text>Show 2</Text>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <VideoPlayer />
                            <Text>Show 3</Text>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Box>
        </ChakraProvider>
    );
}