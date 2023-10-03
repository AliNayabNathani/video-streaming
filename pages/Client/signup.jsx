import { Box, Button, Checkbox, Divider, HStack, Heading, Image, Input, Stack, Text, VStack, } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Launch from "../../components/Client/Templates/Launch";
import { generateHideOnMobileCSS } from "../../components/Client/GlobalCSS/GlobalCSSStye";
import './style.css';

// const DummyUser = [
//     {
//         email: 'Abheshkhemani@gmail.com',
//         password: "Abheesh123"
//     }
// ]

export default function SignIn() {
    const router = useRouter();
    const [Info, SetInfo] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const HandleSubmit = () => {
        router.push('/Client/otp');
    }

    const HandleChange = (e) => {
        const { name, value } = e.target;
        SetInfo({
            ...Info,
            [name]: value
        }
        );
    }

    const InputText = ({ children }) => (
        <Text color={'white'} w={'100%'} textAlign={'start'}>
            {children}
        </Text>
    )
    return (
        <Launch>
            <VStack m={['2rem', '5rem']} justifyContent={"center"} alignItems={"center"} >
                <Stack spacing={'2rem'} p={['2rem', '5rem']} w={["auto", "80%"]} h={["auto", "60%"]} bg={'#232323'} justifyContent={'center'} alignItems={'center'} direction={{ base: 'column', md: 'row' }}>
                    {/* <style>{generateHideOnMobileCSS()}</style> */}
                    <VStack
                        alignItems={"center"}
                        alignSelf={"center"}
                        justifyItems={"center"}
                        w={['auto', "40%"]}
                    >
                        <Image alt="logo" w={['150px', '250px']} className="hide-on-mobile" src='/assests/videe0/Logo/Black _ White/sideBarLogo.png' />
                    </VStack>
                    <div className="divider-line"></div>
                    <VStack
                        w={['auto', "40%"]}
                        alignItems={"center"}
                        alignSelf={"center"}
                        justifyItems={"center"}>
                        <Heading>Registration</Heading>
                        <InputText>Full Name</InputText>
                        <Input onChange={HandleChange} type="text" borderColor={'lighterGray'} placeholder="Enter your full name" />
                        <InputText>Email Address</InputText>
                        <Input onChange={HandleChange} type="email" borderColor={'lighterGray'} placeholder="Email Address" />
                        <InputText>Password</InputText>
                        <Input onChange={HandleChange} type="email" borderColor={'lighterGray'} placeholder="Password" />
                        <Checkbox w={'100%'} textAlign={'start'}>Agree Terms and Conditions</Checkbox>
                        <Button w={'100%'} onClick={() => HandleSubmit}>Sign Up</Button>
                        <Text>Already have an Account? <a style={{ color: '#55DF01' }} href="/Client/signin">Login</a></Text>
                    </VStack>
                </Stack>
            </VStack>
        </Launch>
    );
}