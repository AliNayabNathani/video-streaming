import { Box, ChakraProvider, GridItem, HStack, Heading, SimpleGrid, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { PageHeading } from "../SmallReusableComponents/Heading";
import { Video, VideoPlayer } from "../SmallReusableComponents/VideoPlayer";

const VideoDetailsData = [
    {
        Video_ID: '11234',
        Video_Title: 'The Dark Web',
        Content_Views: '5465565',
        Creator_Name: 'Zack',
        Rented_Amount: '$45',
        Purchasing_Amount: '$80',
        Total_Videos_On_Rent: '869',
        Total_Purchases: '985',
        Uploaded_Date: '2/12/2022'
    }
]

const VideoInfo = () => {
    return (
        <>
            <HStack width={'100%'}>
                <SimpleGrid justifyContent={'space-around'} columns={{ base: '1', md: '3', lg: '3' }}>
                    <GridItem colSpan={1}>
                        <Video />
                    </GridItem>
                    <GridItem >
                        <VStack>
                            <Text>Video ID: {VideoDetailsData[0].Video_ID}</Text>
                            <Text>Video Title: {VideoDetailsData[0].Video_Title}</Text>
                            <Text>Content Views: {VideoDetailsData[0].Content_Views}</Text>
                            <Text>Creator Name: {VideoDetailsData[0].Creator_Name}</Text>
                            <Text>Rented Amount: {VideoDetailsData[0].Rented_Amount}</Text>
                        </VStack>
                    </GridItem>
                    <GridItem >
                        <VStack >
                            <Text>Purchasing Amount: {VideoDetailsData[0].Purchasing_Amount}</Text>
                            <Text>Total Videos On Rent: {VideoDetailsData[0].Total_Videos_On_Rent}</Text>
                            <Text>Total_Purchases: {VideoDetailsData[0].Total_Purchases}</Text>
                            <Text>Uploaded_Date: {VideoDetailsData[0].Uploaded_Date}</Text>
                        </VStack>
                    </GridItem>
                </SimpleGrid>
            </HStack>
            <HStack alignSelf={'flex-start'}>
                <VStack m={5}>
                    <Heading width={'100%'} size={'md'} textAlign={'start'} textDecor={'underline'}>Description</Heading>
                    <Text fontSize={'1.1rem'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugiat nulla nisi dolorum! Eaque vitae necessitatibus quia ducimus tenetur, quaerat ratione recusandae laboriosam repellat, optio rem ab voluptatibus illo animi quasi laborum commodi fuga neque a laudantium totam saepe quos, fugit voluptas. Eius ducimus dolorem rem sequi deleniti optio veritatis.</Text>
                </VStack>
            </HStack>
            <HStack alignSelf={'flex-start'}>
                <VStack m={5}>
                    <Heading width={'100%'} size={'md'} textAlign={'start'} textDecor={'underline'}>Cast/Crew</Heading>
                    <Text fontSize={'1.1rem'}>Cast: Tom Cruise, Angelina Jolie, Brad pitt</Text>
                    <Text fontSize={'1.1rem'}>Genre: Thriller</Text>
                    <Text fontSize={'1.1rem'}>Documentary</Text>
                </VStack>
            </HStack>
        </>
    );
}

export default function VideoDetails() {
    return (
        <>
            <ChakraProvider>
                <Box mx={1}>
                    <SidebarWithHeader />
                    <Box ml={{ base: 0, md: 60 }} p={4} >
                        <PageHeading text={'Video Management'} />
                        <Box border={'2px'} borderColor={'blackAlpha.600'}>
                            <VideoInfo />
                        </Box>
                    </Box>
                </Box>
            </ChakraProvider>
        </>
    );
}