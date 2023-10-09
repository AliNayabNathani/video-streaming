import { Box, Button, HStack, Heading, Stack, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";
import SignaturePad from "react-signature-canvas";
import './Style.css';
import Nav from "../../components/Client/Bars/DetailsNavbar";
import Footer from "../../components/Client/Bars/Footer";
export default function Signature() {
    const signCanvas = useRef();

    const clear = () => signCanvas.current.clear();
    return (
        <>
            <Nav />
            <Box mx={'10%'}>
                <Heading fontSize={'1.7rem'} mb={5}>Complete Account Setup</Heading>
                <Heading mb={2} fontSize={'1.2rem'} >Terms and Conditions for Account Setup</Heading>
                <Text mb={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro et id enim, beatae magni ratione voluptatibus ipsam animi magnam repellendus. Ex vel repudiandae mollitia beatae, laboriosam sequi, aspernatur ab totam voluptas perspiciatis maiores in nam? Natus reiciendis, unde nisi qui voluptatibus sunt omnis illum porro aliquid ex ipsam ipsum beatae corporis asperiores fugit tenetur officiis magni repellat optio nulla. Distinctio.</Text>
                <Heading mb={2} fontSize={'1.2rem'} >Certifications Instructions</Heading>
                <Text mb={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur, sapiente tempore perspiciatis ex officia dolores nobis? Recusandae non vitae veritatis doloremque quis aliquam, enim accusantium quia voluptatibus dolore eum deserunt odio dolorem! Deserunt reprehenderit, exercitationem distinctio laboriosam deleniti accusantium..</Text>
                <Heading mb={5} fontSize={'1.2rem'}>Add Virtual Signature</Heading>
                <SignaturePad
                    penColor='white'
                    ref={signCanvas}
                    canvasProps={{
                        className: "signatureCanvas"
                    }} />
                <Button my={3} onClick={clear} colorScheme="blue">Clear</Button>
                <HStack pb={5} justifyContent={{ base: 'center', md: 'flex-end' }}>
                    <Tooltip label="After payment a request will be send to the
admin for approval and after approval, user will redirect to dashboard screen and can access application." hasArrow>
                        <Button>Make Payment</Button>
                    </Tooltip>
                </HStack>
            </Box>
            <Footer />
        </>
    );
}