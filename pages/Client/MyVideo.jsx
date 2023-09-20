import { Box, Button, Container, HStack, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { useRouter } from "next/router";
import Catalog from "../../components/Client/Main/My Video/Catalog";
import PPV from "../../components/Client/Main/My Video/PPV";
import { ContentBar } from "../../components/Client/Reusable Components/ContentBar";
import { useDetailContext } from "../../components/Client/Context/context";
import MainTemplate from "../../components/Client/Templates/Main";
const NavData = [
    {
        name: "Catalog Listing",
        to: Catalog
    },
    {
        name: "Cast & Crew",
        to: Catalog
    },
    {
        name: "Video Assets",
        to: Catalog
    },
    {
        name: "PPV Live Stream",
        to: PPV,
    },
];

export default function MyVideo() {
    const { subTitle } = useDetailContext();
    const router = useRouter();
    const handleNavigation = (to) => {
        router.push(to);
    }
    return (
        <MainTemplate>
            <Box mx={{ base: '0', md: '3rem' }} width={'100%'}>
                <HStack justifyContent={'space-between'} mb={'2rem'}>
                    <Heading size={'lg'}>My Videos</Heading>
                    <Button leftIcon={<AiOutlinePlus />} onClick={() => handleNavigation('/Client/AddVideo')}>
                        Add New Video
                    </Button>
                </HStack>
                <ContentBar text='Video' data={NavData} />
                <Box>
                    {NavData.map((navItem, index) => (
                        <React.Fragment key={index}>
                            {navItem.name === subTitle && navItem.to && React.createElement(navItem.to)}
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
        </MainTemplate>
    );
}