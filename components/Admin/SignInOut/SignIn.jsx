import { Box, Button, Center, ChakraProvider, Flex, Image, Input, Stack, VStack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import LogNav from '@/public/Media/videe0/Logo/videe0 - Logo (250x150).png';
export default function SignIn() {
    const [Username, setUsername] = useState('');
    const [Pass, setPass] = useState('');
    const Navigate = useNavigate();

    const DummyUser = [
        {
            name: 'Abheshkhemani@gmail.com',
            password: "Abheesh123"
        }
    ]

    const HandleSubmit = () => {
        DummyUser.map((User) => {
            if (Username === User.name && Pass === User.password) {
                Navigate('/');
            }
            else
                alert('Incorrect Username or Password');
        })
    }
    return (
        <ChakraProvider>
            <VStack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <form onSubmit={HandleSubmit}>
                    <Stack direction={{ base: 'column', md: 'row' }} border={'2px solid black'} borderRadius={'5px'}>
                        <Box p={{ base: '30', md: '55' }} borderBottom={'2px solid black'} borderRight={'1px solid black'}>
                            <Image src={LogNav} />
                        </Box>
                        <VStack justifyContent={'center'} p={{ base: '30', md: '55' }}>
                            <Input onChange={(e) => setUsername(e.target.value)} type="email" width={'xs'} borderColor={'gray.500'} placeholder="Email Address" />
                            <Input onChange={(e) => setPass(e.target.value)} type="password" width={'xs'} borderColor={'gray.500'} placeholder="Password" />
                            <Button type="submit" colorScheme={'teal'}>Log In</Button>
                        </VStack>
                    </Stack>
                </form>
            </VStack>
        </ChakraProvider>
    );
}