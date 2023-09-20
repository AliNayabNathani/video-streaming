import { Box, Container, HStack, Icon } from "@chakra-ui/react";
import { ContentBar } from "../Reusable Components/ContentBar";
import { NavButton } from "../Reusable Components/MainButton";
import { Earnings } from "./Dashboard/Earnings";
import { useDetailContext } from "../Context/context";
import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import Catalog from "./My Video/Catalog";
import PPV from "./My Video/PPV";
import { useRouter } from "next/router";
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
        <Box p={'3rem'}>
            <HStack ml={{ base: '0', md: '5rem' }} justifyContent={'space-evenly'}>
                <ContentBar text='Video' data={NavData} />
                <HStack>
                    <Icon as={AiOutlinePlus} />
                    <div onClick={() => handleNavigation('/Client/AddVideo')}>
                        <NavButton>Add New Video</NavButton>
                    </div>
                </HStack>
            </HStack>
            <Box>
                {NavData.map((navItem, index) => (
                    <React.Fragment key={index}>
                        {navItem.name === subTitle && navItem.to && React.createElement(navItem.to)}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
}