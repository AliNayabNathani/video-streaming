import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { BiPause, BiPlay } from "react-icons/bi";
import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const Video = ({ src, onOptions }) => {
    const videoRef = useRef(null);

    const [streamButton, setStreamButton] = useState(<BiPlay />);
    useEffect(() => {
        const videoJsOptions = {
            autoplay: false,
            muted: true,
            controls: false,
            responsive: true,
            fluid: true,
            sources: [
                {
                    src: "https://vjs.zencdn.net/v/oceans.mp4",
                    type: "video/mp4",
                    poster: "https://th.bing.com/th/id/OIP.gWMAd7fwM2FsO6sY_naf5QHaDZ?w=188&h=86&c=7&r=0&o=5&pid=1.7",
                },
            ],
        };

        const player = videojs(videoRef.current, videoJsOptions, function () {
            // Player is ready
        });

        // Add event listeners
        player.on("play", () => {
            // Video play event
        });

        player.on("pause", () => {
            // Video pause event
        });

        player.on("ended", () => {
            // Video ended event
        });

        return () => {
            // Cleanup and dispose of the player
            if (player) {
                player.dispose();
            }
        };
    }, []);

    const handleOptions = () => {
        // Implement your logic to show options, e.g., open a modal
        console.log("Options clicked");
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            // Check if the video is paused and toggle accordingly
            if (videoRef.current.paused) {
                videoRef.current.play();
                setStreamButton(BiPause); // Set the button icon to pause
            } else {
                videoRef.current.pause();
                setStreamButton(BiPlay); // Set the button icon to play
            }
        }
    };

    return (
        <Box>
            <video
                ref={videoRef}
                className="video-js vjs-default-skin"
                style={{ width: "100%", height: "auto" }}
            />
            <HStack p={4} bg={"#232323"} justifyContent={"space-between"}>
                <Stack>
                    <Button
                        borderRadius={"20px"}
                        size={"sm"}
                        bg={"blackAlpha.600"}
                        color="white"
                        onClick={togglePlayPause}
                    >
                        {streamButton}
                    </Button>
                </Stack>
                <HStack>
                    <Button
                        borderRadius={"20px"}
                        size={"sm"}
                        bg={"blackAlpha.600"}
                        color="white"
                        p={0}
                        onClick={handleOptions}
                    >
                        <AiOutlineInfoCircle />
                    </Button>
                    <Button
                        borderRadius={"20px"}
                        size={"sm"}
                        bg={"blackAlpha.600"}
                        color="white"
                        p={0}
                        onClick={handleOptions}
                    >
                        <BsThreeDotsVertical />
                    </Button>
                </HStack>
            </HStack>
        </Box>
    );
};

const VideoPlayer = ({ src }) => {
    return (
        <Box
            mt={'2rem'}
            border={"1px solid transparent"}
            borderRadius={5}
            cursor={"pointer"}
            _hover={{ scale: "1.5" }}
            width={["80%", "360px"]}
            mr={"1rem"}
        >
            <Video src={src} />
        </Box>
    );
};

export { VideoPlayer, Video };
