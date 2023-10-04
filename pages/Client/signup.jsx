import { Box, Button, Checkbox, Divider, HStack, Heading, Image, Input, Stack, Text, VStack, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "../../components/spinner";
import Launch from "../../components/Client/Templates/Launch";
import { generateHideOnMobileCSS } from "../../components/Client/GlobalCSS/GlobalCSSStye";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";

export default function SignIn() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { user, isLoading, isSuccess, message, isError } = useSelector((state) => state.auth);
    const [Info, SetInfo] = useState({
        name: '',
        password: '',
        email: '',
    });

    const { name, password, email } = Info;
    useEffect(() => {
        if (isError) {
            alert(message);
        }

        if (isSuccess || user) {
            router.push('/Client/Overview')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, router, dispatch])

    const HandleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name, email, password
        }
        dispatch(register(userData))
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

    if (isLoading) {
        return <Spinner />
    }
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
                        <Input value={name} onChange={HandleChange} name='name' type="text" borderColor={'lighterGray'} placeholder="Enter your full name" />
                        <InputText>Email Address</InputText>
                        <Input value={email} onChange={HandleChange} name="email" type="email" borderColor={'lighterGray'} placeholder="Email Address" />
                        <InputText>Password</InputText>
                        <Input value={password} onChange={HandleChange} name="password" type="password" borderColor={'lighterGray'} placeholder="Password" />
                        <Checkbox w={'100%'} textAlign={'start'}>Agree Terms and Conditions</Checkbox>
                        <Button w={'100%'} onClick={HandleSubmit}>Sign Up</Button>
                        <Text>Already have an Account? <a style={{ color: '#55DF01' }} href="/Client/signin">Login</a></Text>
                    </VStack>
                </Stack>
            </VStack>
        </Launch>
    );
}