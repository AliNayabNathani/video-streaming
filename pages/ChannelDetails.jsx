import { AspectRatio, Box, Button, ChakraProvider, GridItem, HStack, IconButton, Image, SimpleGrid, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import { PageHeading } from "../components/Admin/SmallReusableComponents/Heading";
import { VideoPlayer } from "../components/Admin/SmallReusableComponents/VideoPlayer";
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
        <>
            <PageHeading text={'Channel Management'} />
            <ChannelInfo />
            <SimpleGrid columns={{ base: '1', md: '2', lg: '3' }}>
                <GridItem colSpan={1}>
                    <VideoPlayer />
                </GridItem>
                <GridItem colSpan={1}>
                    <VideoPlayer />
                </GridItem>
                <GridItem colSpan={1}>
                    <VideoPlayer />
                </GridItem>
            </SimpleGrid>
        </>
    );
}