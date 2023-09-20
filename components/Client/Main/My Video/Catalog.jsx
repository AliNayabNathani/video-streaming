import { Box, Button, GridItem, HStack, Heading, Icon, IconButton, SimpleGrid, Stack, Switch, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { VideoData } from "./CatalogData";
import { ToggleButton } from "../../Reusable Components/MainButton";

import { VideoDetails } from "./CatalogDetails";
import { VideoPlayer } from "../../Reusable Components/VideoPlayer";
import { useRouter } from "next/router";

export default function Catalog() {
    const [isApproved, setIsApproved] = useState(true);
    const router = useRouter();
    const handleRoute = () => {
        router.push('/Client/VideoDetails')
    }

    return (
        <Box>
            <VStack mt={'5rem'}>
                {VideoData.map((vid) => (
                    <>
                        < Stack cursor={'pointer'} justifyContent={['center', 'space-between']} width={'100%'} p={'1.5rem'} bg={'#232323'} direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                            <Box
                                // Adjust the width as needed
                                maxWidth="100%" // Ensure the player doesn't exceed its original size
                                height={{ base: "100%", md: 'auto' }}
                            >
                                <VideoPlayer
                                    poster="https://i.scdn.co/image/ab67706c0000bebb4492dc4cac4ffc505e0531a8"
                                    name={'Dark'}
                                    src={'https://vjs.zencdn.net/v/oceans.mp4'} />
                            </Box>
                            <Stack alignItems={'flex-start'} spacing={'1rem'} direction={'column'}>
                                <Heading size={'md'}>{vid.name}</Heading>
                                <Text>Type: <b>{vid.Type}</b></Text>
                                <Text>Views: <b>{vid.views} Views</b></Text>
                                <Text>Uploaded Date: <b>{vid.upload}</b></Text>
                            </Stack>
                            <Stack alignItems={'flex-start'} spacing={'1rem'} direction={'column'}>
                                <Text>Rented Amount: <b>${vid.Rented_Amount}</b></Text>
                                <Text>Purchasing Amount: <b>${vid.Purchasing_Amount}</b></Text>
                            </Stack>

                            <Stack direction={{ base: 'row', md: 'column' }} alignSelf={'normal'} justifyContent={'space-between'}>
                                <Button>Publish</Button>
                                <Stack direction='row' justifyContent={'center'}>
                                    <Switch colorScheme="customGreen" size='lg' />
                                </Stack>
                            </Stack>
                        </Stack>
                    </>
                ))}
            </VStack>
        </Box >
    );
}

