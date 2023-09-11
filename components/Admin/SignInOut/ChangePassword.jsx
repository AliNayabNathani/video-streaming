import { Box, Form, Button, ChakraProvider, Divider, Flex, FormLabel, HStack, Input, Stack, VStack, useColorModeValue } from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebartest";
import { PageHeading } from "../SmallReusableComponents/Heading";
import { useState } from "react";

const DummyUser = [
    {
        name: 'Abheshkhemani@gmail.com',
        password: "Abheesh123"
    }
]

const Inputs = () => {
    const [Pass, SetPass] = useState();
    const [NewPass, SetNewPass] = useState();
    const [ConfirmPass, setConfirmPass] = useState();

    const HandleSubmit = () => {
        DummyUser.map((User) => {
            if (Pass === User.password && NewPass === ConfirmPass) {
                SetPass(NewPass);
            }
            else
                alert('Incorrect Info');
        })
    }
    return (
        <VStack>
            <form onSubmit={HandleSubmit}>
                <FormLabel>Old Password: </FormLabel>
                <Input mb={'1rem'} onChange={(e) => SetPass(e.target.value)} type="password" />
                <FormLabel>New Password: </FormLabel>
                <Input mb={'1rem'} onChange={(e) => SetNewPass(e.target.value)} type="password" />
                <FormLabel>Confirm Password: </FormLabel>
                <Input mb={'1rem'} onChange={(e) => setConfirmPass(e.target.value)} type="password" />
                <Button type="submit" colorScheme="teal">Update</Button>
            </form>
        </VStack>
    );
}

export default function ChangePassword() {
    return (
        <>
            <ChakraProvider>
                <Box h={'100vh'} mx={1}>
                    <SidebarWithHeader />
                    <Box ml={{ base: 0, md: 60 }} p={4} >
                        <PageHeading text={'Change Password'} />
                        <Inputs />
                    </Box>
                </Box>
            </ChakraProvider>
        </>
    );
}