import { Box, Button, Divider, Grid, GridItem, HStack, Heading, Icon, IconButton, Image, SimpleGrid, Stack, Switch, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FiToggleRight, FiToggleLeft, FiEdit3 } from 'react-icons/fi';
import { FaEdit } from 'react-icons/fa';
import { VideoPlayer } from "../../components/Client/Reusable Components/VideoPlayer";
import { VideoData } from "../../components/Client/Main/My Video/CatalogData";
import { useRouter } from "next/router";
import MyVideoTemplate from "../../components/Client/Templates/MyVideoTemplate";

const TrailerData = [
    {
        id: "1",
        name: "blue beetle",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
            "https://marketplace.canva.com/EAFAMirCsX4/2/0/1600w/canva-purple-creative-livestream-youtube-thumbnail-X2eVuOzURSM.jpg",
    },
    {
        id: "2",
        name: "blue beetle",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
            "https://img.freepik.com/premium-psd/youtube-video-thumbnail-start-trading-today_475351-168.jpg?w=2000",
    },
    {
        id: "3",
        name: "blue beetle",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
            "https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg",
    },
];

const EpisodeData = [
    {
        id: "01",
        name: "blue beetle",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
            "https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg",
    },
    {
        id: "02",
        name: "blue beetles",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
            "https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg",
    },
    {
        id: "03",
        name: "blue beetle",
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        poster:
            "https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg",
    },
];

const VideoInfo = ({ vid }) => {
    return (
        <>
            <Stack
                h={'full'}
                mt={"2rem"}
                direction={["column", "row"]}
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box width={"250px"} height={"250px"}>
                    <Image src="/assests/Carousal/Image1.jpg" />
                </Box>
                <HStack spacing={32} alignItems={"flex-start"}>
                    <VStack fontSize={'1.1rem'} spacing={4} justifySlef={'start'} alignItems={"flex-start"}>
                        <Heading size={'md'}>{vid.name}</Heading>
                        <Text>Type: <b>{vid.Type}</b></Text>
                        <Text>Views: <b>{vid.views} Views</b></Text>
                        <Text>Uploaded Date: <b>{vid.upload}</b></Text>
                    </VStack>
                    <Stack alignItems={'flex-start'} spacing={'1rem'} direction={'column'}>
                        <Text>Rented Amount: <b>${vid.Rented_Amount}</b></Text>
                        <Text>Purchasing Amount: <b>${vid.Purchasing_Amount}</b></Text>
                    </Stack>
                </HStack>
                <Stack direction={{ base: 'row', md: 'column' }} alignSelf={'center'} spacing={['auto', '3rem']} >
                    <Button size={'lg'}>Publish</Button>
                    <Stack direction='row' justifyContent={'space-between'}>
                        <Switch colorScheme="customGreen" size='lg' />
                        <Icon color={'whiteAlpha.600'} as={FiEdit3} boxSize={6} />
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                mt={"2rem"}
                direction={["column", "row"]}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
            >
                <VStack w={["100%", "60%"]}>
                    <Heading width={"100%"} size={"md"} textAlign={"start"}>
                        Description
                    </Heading>
                    <Text color={'whiteAlpha.600'} fontSize={"1rem"}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
                        fugiat nulla nisi dolorum! Eaque vitae necessitatibus quia ducimus
                        tenetur, quaerat ratione recusandae laboriosam repellat, optio rem
                        ab voluptatibus illo animi quasi laborum commodi fuga neque a
                        laudantium totam saepe quos, fugit voluptas. Eius ducimus dolorem
                        rem sequi deleniti optio veritatis.
                    </Text>
                </VStack>
                <VStack color={'whiteAlpha.600'} w={["100%", "30%"]} alignItems={"start"}>
                    <Heading color={'white'} width={"100%"} size={"md"}>
                        Cast/Crew
                    </Heading>
                    <Text fontSize={"1rem"}>
                        Cast: Tom Cruise, Angelina Jolie, Brad pitt
                    </Text>
                    <Text fontSize={"1rem"}>Genre: Thriller</Text>
                    <Text fontSize={"1rem"}>Documentary</Text>
                </VStack>
            </Stack>
        </>
    );
};

export default function VideoDetails() {
    const router = useRouter();
    const index = router.query.index ? parseInt(router.query.index) : 0;
    const vid = VideoData[index];
    return (
        <MyVideoTemplate>
            <Box py={4} px={16} mt={'4rem'} bg={'#232323'}>
                <Stack direction={["column", "column"]}>
                    <VideoInfo vid={vid} />
                    <Divider my={"2rem"} bg={"white"} />
                    <Heading size={'lg'}>Trailers</Heading>
                    <Stack
                        direction={["column", "row"]}
                        justifyContent={["center", "space-between"]}
                        spacing={[6, 0]}
                    >
                        {TrailerData.map((trailer) => (
                            <VideoPlayer
                                src={trailer.src}
                                poster={trailer.poster}
                                name={trailer.name}
                            />
                        ))}
                    </Stack>
                    <Divider my={"2rem"} bg={"white"} />
                    <Heading size={'lg'}>Episodes</Heading>
                    <Grid
                        templateColumns={["1fr", "repeat(3, 1fr)"]}
                        autoRows="auto"
                        gap={[6, 2]}
                    >
                        {EpisodeData.map((episode) => (
                            <GridItem colSpan={1}>
                                <VideoPlayer
                                    src={episode.src}
                                    poster={episode.poster}
                                    name={episode.name}
                                />
                                <Text textAlign="start">Episodes {episode.id}</Text>
                            </GridItem>
                        ))}
                    </Grid>
                </Stack>
            </Box>
        </MyVideoTemplate>
    )
}