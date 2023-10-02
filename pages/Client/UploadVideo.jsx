import { Box, Heading } from "@chakra-ui/react";
import Standlone from "../../components/Client/Upload Videos/Standalone";
import { useDetailContext } from "../../components/Client/Context/context";
import MainTemplate from "../../components/Client/Templates/Main";
import { ContentBar } from "../../components/Client/Reusable Components/ContentBar";

import React from "react";

const VideoNavData = [
    {
        name: "Standalone(Movies, Shorts and Clips)",
        to: Standlone,
    },
    {
        name: "Episodic(TV shows, Web Series)",
        to: Standlone
    },
    {
        name: "Channels (Subscription Channel)",
        to: Standlone
    }
];

export default function UploadVideo() {
    const { subTitle } = useDetailContext();
    return (
        <MainTemplate>
            <Box mx={{ base: '0', md: '3rem' }} width={'100%'}>
                <Heading size={'md'}>My Video</Heading>
                <ContentBar text="Upload Video" data={VideoNavData} />

                {VideoNavData.map((navItem, index) => (
                    <React.Fragment key={index}>
                        {navItem.name === subTitle && navItem.to && React.createElement(navItem.to)}
                    </React.Fragment>
                ))}
            </Box>
        </MainTemplate>
    );
}