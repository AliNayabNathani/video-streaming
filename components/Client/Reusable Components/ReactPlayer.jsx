import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export const ReactPlayerOutline = ({ url }) => (
    <Box
        // Adjust the width as needed
        maxWidth="100%" // Ensure the player doesn't exceed its original size

        height={{ base: "100%", md: '150px' }}
    >
        <ReactPlayer
            url={url}
            width="100%"
            height="100%" // This ensures the player maintains its aspect ratio
        />
    </Box>
)