import { useRouter } from "next/router";
import { useDetailContext } from "../Context/context";
import MainTemplate from "./Main";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";
import { ContentBar } from "../Reusable Components/ContentBar";
import React from "react";
import Catalog from "../Main/My Video/Catalog";
import PPV from "../Main/My Video/PPV";
import { AiOutlinePlus } from "react-icons/ai";
import CreatePPV from "../../../pages/Client/CreatePPV";

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
    }
];

export default function MyVideoTemplate({ children }) {
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
                        Publish
                    </Button>
                </HStack>
                <ContentBar text='Video' data={NavData} />
                <Box>
                    {NavData.map((navItem, index) => (
                        <React.Fragment key={index} onClick={() => handleNavigation('/Client/MyVideo')}>
                            {navItem.name === subTitle && navItem.to && React.createElement(navItem.to)}
                        </React.Fragment>
                    ))}
                    {children}
                </Box>
            </Box>
        </MainTemplate>
    );
}