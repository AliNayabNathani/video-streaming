import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { BiPause, BiPlay } from "react-icons/bi";
import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

const Video = ({ src, onOptions, poster, name }) => {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [streamButton, setStreamButton] = useState(<BiPlay />);

  // Function to toggle full-screen mode
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const videoJsOptions = {
      autoplay: false,
      muted: true,
      controls: false,
      responsive: true,
      fluid: true,
      sources: [
        {
          src,
          type: "video/mp4",
          poster,
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
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("MSFullscreenChange", handleFullScreenChange);
    return () => {
      // Cleanup and dispose of the player
      if (player) {
        player.dispose();
      }
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullScreenChange
      );
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
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        poster={poster}
      />
      <HStack p={4} bg={"whiteAlpha.100"} justifyContent={"space-between"}>
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
          <Tooltip hasArrow label={name} bg="white">
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
          </Tooltip>
          <Button
            borderRadius={"20px"}
            size={"sm"}
            bg={"blackAlpha.600"}
            color="white"
            p={0}
            onClick={toggleFullScreen}
          >
            {isFullScreen ? <FiMinimize2 /> : <FiMaximize2 />}
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

const VideoPlayer = ({ src, poster, name }) => {
  console.log("file", src);
  return (
    <Box
      border={"1px solid transparent"}
      borderRadius={5}
      cursor={"pointer"}
      _hover={{ scale: "1.5" }}
      width={["100%", "400px"]}
      mr={"1rem"}
    >
      <Video src={src} poster={poster} name={name} />
    </Box>
  );
};

export { VideoPlayer, Video };
