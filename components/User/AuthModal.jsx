import { Box, Button, Checkbox, HStack, Heading, Icon, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AiFillApple, AiFillFacebook } from 'react-icons/ai'
import { useRouter } from 'next/router';

const GoogleIcon = () => {
    return (

        <Image boxSize={8} src='/assests/videe0/google_icon_geeksvgs.com.svg' />

    );
}

const SignIn = ({ setAuthChoice }) => {
    return (
        <Box h={'100%'} bg={'black'}>
            <VStack h={'100%'} justifyContent={'center'} p={'2rem'} alignContent={'center'} spacing={'2rem'}>
                <Heading size='lg'>Log In</Heading>
                <Box w={'100%'}>
                    <Text color={'#fff'} mb={'0.5rem'}>E-mail</Text>
                    <Input bg={'#fff'} w={'100%'} border={'none'} placeholder='@email.com' />
                    <Text color={'#fff'} mb={'0.5rem'}>Password</Text>
                    <Input bg={'#fff'} w={'100%'} border={'none'} placeholder='Enter your password' />
                </Box>

                <Button w={'100%'}>Log In</Button>

                <Box textAlign={'center'} w={'100%'}>
                    <Text color={'#fff'} mb={'0.5rem'}>If you don't have a account then <a style={{ color: '#55DF01', cursor: 'pointer' }} onClick={() => setAuthChoice('Signup')}>Register</a></Text>
                    <Text color={'#fff'} mb={'1rem'}>Or Sign Up using </Text>
                    <HStack width={['100%', '100%']} alignItems={'center'} justifyContent={'space-around'}>
                        <GoogleIcon />
                        <Icon boxSize={10} as={AiFillFacebook} color={'blue.500'} />
                        <Icon boxSize={10} as={AiFillApple} color={'whiteAlpha.500'} />
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

const SignUp = ({ setAuthChoice }) => {
    return (
        <Box h={'100%'} bg={'black'}>
            <VStack h={'100%'} w={'100%'} justifyContent={'center'} p={'2rem'} alignContent={'center'} spacing={'2rem'}>
                <Heading size='md'>Sign Up</Heading>
                <Box w={'100%'}>
                    <Text color={'#fff'} mb={'0.5rem'}>E-mail</Text>
                    <Input mb={'0.5rem'} bg={'#fff'} w={'100%'} placeholder='@email.com' />
                    <Text color={'#fff'} mb={'0.5rem'}>Phone Number</Text>
                    <Input mb={'0.5rem'} bg={'#fff'} w={'100%'} placeholder='Enter your number' />
                    <Text color={'#fff'} mb={'0.5rem'}>Password</Text>
                    <Input mb={'0.5rem'} bg={'#fff'} w={'100%'} placeholder='Password' />
                    <Text color={'#fff'} mb={'0.5rem'}>Confirm Password</Text>
                    <Input mb={'0.5rem'} bg={'#fff'} w={'100%'} placeholder='Password' />
                    <div style={{ fontSize: "12px" }}>
                        <Checkbox colorScheme={'customGreen'} color={'#9c9c9c'} size={'sm'} >Agree to the terms & conditions and privacy policy</Checkbox>
                    </div>
                </Box>

                <Button w={'100%'} onClick={() => setAuthChoice('OTP')}>Sign Up</Button>

                <Box textAlign={'center'} w={'100%'}>
                    <Text color={'#fff'} mb={'1rem'}> Or Sign Up using </Text>
                    <HStack width={['100%', '100%']} alignItems={'center'} justifyContent={'space-around'}>
                        <GoogleIcon />
                        <Icon boxSize={10} as={AiFillFacebook} color={'blue.500'} />
                        <Icon boxSize={10} as={AiFillApple} color={'whiteAlpha.500'} />
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
}

const OTP = ({ setAuthChoice }) => {
    const router = useRouter();
    const [optNumber, setOptNumber] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    console.log(optNumber);
    const handleInputChange = (index, value) => {
        if (/^[0-9]$/.test(value)) {
            const tempOptNumber = [...optNumber];
            tempOptNumber[index] = value;
            setOptNumber(tempOptNumber);
            inputRefs.current[index + 1]?.focus();
        }
    };
    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace") {
            const tempOptNumber = [...optNumber];
            tempOptNumber[index] = '';
            setOptNumber(tempOptNumber);
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <VStack bg={'black'} justifyContent={"center"} alignItems={"center"} >
            <Stack p={'3rem'} spacing={'2rem'} w={["auto", "80%"]} h={["auto", "60%"]} justifyContent={'center'} alignItems={'center'} direction={{ base: 'column', md: 'row' }}>
                <div className="divider-line"></div>
                <VStack
                    alignItems={"center"}
                    alignSelf={"center"}
                    justifyItems={"center"}>
                    <Heading mb={'2rem'}>OTP Verification</Heading>
                    <Text mb={'2rem'}>Verify by E-mail</Text>
                    <HStack mb={'5rem'}>
                        {optNumber.map((value, index) => (
                            <Input
                                textAlign={'center'}
                                key={index}
                                bg={'black'}
                                color={'#fff'}
                                w={'50px'}
                                border={'1px solid #55DF01'}
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(el) => (inputRefs.current[index] = el)}
                            />
                        ))}
                    </HStack>
                    <Button mb={'1rem'} size={'md'} onClick={() => router.push('User/UserSelection')}>Submit</Button>
                    <Heading size={'sm'} textDecor={'underline'} >Resend OTP</Heading>
                </VStack>
            </Stack>
        </VStack>
    );
}

export { SignIn, SignUp, OTP }