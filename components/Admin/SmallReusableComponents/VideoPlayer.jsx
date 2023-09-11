import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import React from "react";
import videojs from "video.js";
import VideoJS from "./Video";

const Video = () => {
    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: 'https://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    return (
        <>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </>
    );
}

const VideoPlayer = () => {
    return (
        // This video will have equal sides
        <Box border={'1px solid transparent'} borderRadius={5} cursor={'pointer'} _hover={{ scale: "1.5" }} width={['80%', '350px']} s mr={'1rem'} >
            <Image
                src="https://bit.ly/naruto-sage" />
            <HStack justifyContent={'space-between'}>
                <Stack >
                    <Button variant='outline' color="white"><BiInfoCircle /></Button>
                </Stack>
                <Stack>
                    <Text color="white">Naruto Becomes Sage</Text>
                </Stack>
                <Stack >
                    <Button variant={'outline'} color="white" p={0} bg={'transparent'}><AiOutlineSetting /></Button>
                </Stack>
            </HStack>
        </Box>
    );
};

export { VideoPlayer, Video };