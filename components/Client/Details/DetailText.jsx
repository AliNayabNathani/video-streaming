import { Button, HStack, Heading, Icon, Input, Stack } from "@chakra-ui/react";
import { AiOutlineSearch } from 'react-icons/ai';
import { DummyText } from "./Dummytext";
import { LinkItems } from "./Data";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
export const DetailText = ({ text }) => {
    const count = useRef(0);
    return (
        <>
            <Stack direction={{ base: 'column-reverse', md: 'row' }} justifyContent={'space-between'}>
                <Heading textAlign={{ base: 'center', md: 'start' }}>{text ? text : 'Overview'}</Heading>
                <Stack height={'100%'} direction='row'>
                    {/* <HStack border={'1px solid black'} alignItems={'center'} bg={'#232323'} borderRadius={'5px'} spacing={0}>
                        <Icon as={AiOutlineSearch} mx={'10px'} mt={1} />
                        <Input variant={'unstyled'} focusBorderColor="none" width={{ base: 'auto', md: '100%' }} placeholder="Search" />
                    </HStack> */}
                    <Input variant={'unstyled'} px={4} border={'none'} bg={'whiteAlpha.400'} borderRadius={'5px'} placeholder="Search" />

                    <Button Icon border={'1px solid black'} boxShadow={'2px 2px 2px black'}>
                        <Icon as={BsSearch} />
                    </Button>
                </Stack>
            </Stack>
            {count.current < 1 ? (
                <>
                    <DummyText />
                    {count.current++}
                </>
            ) : null}

            {LinkItems.map((link) => (
                <React.Fragment key={link.name}>
                    {link.name === text && !link.subItems && link.Data && React.createElement(link.Data)}
                    {link.subItems &&
                        link.subItems.map((sublink, index) => (
                            <React.Fragment key={`${link.name}-${index}`}>
                                {sublink.name === text && sublink.Data && React.createElement(sublink.Data)}
                            </React.Fragment>
                        ))
                    }
                </React.Fragment>
            ))}

        </>
    );
}