import { Box, Button, Center, ChakraProvider, Checkbox, Flex, HStack, Heading, Image, Input, Select, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { MainButton } from "../Reusable Components/MainButton";
import { generateHideOnMobileCSS } from "../GlobalCSS/GlobalCSSStye";
import Launch from "../Templates/Launch";
const DummyUser = [
    {
        email: 'Abheshkhemani@gmail.com',
        password: "Abheesh123"
    }
]

export default function SignIn() {
    const [Info, SetInfo] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const Navigate = useNavigate();

    const HandleSubmit = () => {
        DummyUser.map((User) => {
            if (Info.email === User.email) {
                Navigate('/');
            }
            else
                alert('Incorrect Username or Password');
        })
    }

    const HandleChange = (e) => {
        const { name, value } = e.target;
        SetInfo({
            ...Info,
            [name]: value
        }
        );
    }

    return (
        <Launch>
            <VStack h={'70vh'} justifyContent={'center'} alignItems={'center'}>
                <form onSubmit={HandleSubmit}>
                    <Stack direction={{ base: 'column', md: 'row' }} border={'2px solid black'} borderRadius={'5px'} bg={useColorModeValue('gray.100', 'gray.300')}>
                        <style>{generateHideOnMobileCSS()}</style>
                        <Box p={{ base: '0', md: '16' }} borderBottom={'2px solid black'} borderRight={'1px solid black'}>
                            <Image className="hide-on-mobile" src={require("C:/VideeO/client-dashboard/src/Media/videe0/Logo/videe0 - Logo (250x150).png")} />
                        </Box>
                        <VStack p={{ base: '16', md: '16' }}>
                            <Heading textDecor={'underline'}>Registration</Heading>
                            <Input onChange={HandleChange} type="text" borderColor={'gray.500'} placeholder="Full Name" />
                            <HStack justifyContent={'center'}>
                                <Input maxWidth={'20%'} onChange={HandleChange} type="number" borderColor={'gray.500'} placeholder="+" />
                                <Input maxWidth={'80%'} onChange={HandleChange} type="number" borderColor={'gray.500'} placeholder="Phone Number" />
                            </HStack>
                            <Input onChange={HandleChange} type="email" borderColor={'gray.500'} placeholder="Email Address" />
                            <Checkbox>Agree Terms and Conditions</Checkbox>
                            <Text>We will send a 6 digit Code</Text>
                            <MainButton>Sign Up</MainButton>
                        </VStack>
                    </Stack>
                </form>
            </VStack>
        </Launch>
    );
}