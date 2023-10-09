import { Box, Button, HStack, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Footer from "../Bars/Footer";
import { useEffect, useRef, useState } from "react";
import Nav from "../Bars/DetailsNavbar";
import SignaturePad from "react-signature-canvas";
import './Style.css';
import { NavButton } from "../Reusable Components/MainButton";
export default function Signature() {
    const signCanvas = useRef();

    const clear = () => signCanvas.current.clear();
    return (
        <>
            <Nav />
            <Box bg={useColorModeValue('gray.100', 'gray.900')}>
                <Box mx={'20%'}>
                    <Heading mb={5}>Complete Account Setup</Heading>
                    <Heading fontSize={'sm'} textDecor={'underline'} >Terms and Conditions for Account Setup</Heading>
                    <Text mb={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro et id enim, beatae magni ratione voluptatibus ipsam animi magnam repellendus. Ex vel repudiandae mollitia beatae, laboriosam sequi, aspernatur ab totam voluptas perspiciatis maiores in nam? Natus reiciendis, unde nisi qui voluptatibus sunt omnis illum porro aliquid ex ipsam ipsum beatae corporis asperiores fugit tenetur officiis magni repellat optio nulla. Distinctio.</Text>
                    <Heading fontSize={'sm'} textDecor={'underline'} >Terms and Conditions for Account Setup</Heading>
                    <Text mb={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur, sapiente tempore perspiciatis ex officia dolores nobis? Recusandae non vitae veritatis doloremque quis aliquam, enim accusantium quia voluptatibus dolore eum deserunt odio dolorem! Deserunt reprehenderit, exercitationem distinctio laboriosam deleniti accusantium..</Text>
                    <Heading fontSize={'sm'}>Add Virtual Signature</Heading>
                    <Box>
                        <SignaturePad
                            ref={signCanvas}
                            canvasProps={{
                                className: "signatureCanvas"
                            }} />
                        <Button my={3} onClick={clear} colorScheme="blue">Clear</Button>
                    </Box>
                    <HStack pb={5} justifyContent={{ base: 'center', md: 'flex-end' }}>
                        <NavButton>Make Payment</NavButton>
                    </HStack>
                </Box>
            </Box>
            <Footer />
        </>
    );
}