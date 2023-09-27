import { Box, Button, Flex, HStack, Heading, Icon, Input, Text, VStack } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { BiUserCircle } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { useRouter } from "next/router";

export default function Profile() {
    const router = useRouter();
    const logout = async () => {
        const domain = "dev-g47ngs10wcqmnpfs.us.auth0.com";
        const clientId = "adb38ErO5bDrRS3ICJsRDrYBtUxOpOlX";
        const redirectTo = "http://localhost:3000/Client/";

        router.push(`https://${domain}/logout?clientId=${clientId}&returnTo=${redirectTo}`);
    }
    const handleNavigation = () => {
        router.push('/Client/ChangePassword');
    }
    const CustomIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
            {/* Adjust the path elements' stroke-width as needed */}
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" stroke-width="1.5" />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    );
    return (
        <MainTemplate>
            <Heading size={'lg'}>Profile</Heading>
            <Flex mt={'5rem'} justifyContent={'center'}>
                <Box w={'500px'} bg={'#323232'} p={'2rem'}>
                    <HStack
                        justifyContent={'space-between'}
                    >
                        <Icon className="thin-lines-icon" color={'#55DF01'} zIndex={1} top={'-24'} position="relative" style={{ marginInline: "auto" }} bg={'black'} borderRadius={'full'} as={BiUserCircle} boxSize={36} />
                        <Icon zIndex={1} top={'-16'} position="relative" as={FiEdit3} color={'whiteAlpha.600'} boxSize={8} />
                    </HStack>
                    <VStack px={20} pb={10} alignItems={'flex-start'} justifyContent={'center'}>
                        <Text fontWeight={'bold'}>Username</Text>
                        <Input mb={'1rem'} placeholder="Zack" />
                        <Text fontWeight={'bold'}>E-mail address</Text>
                        <Input mb={'1rem'} placeholder="Zack123@gmail.com" />
                        <Text fontWeight={'bold'}>Phone Number</Text>
                        <Input mb={'1rem'} type='number' placeholder="+91 098765432" />
                        <Button w={'100%'} onClick={handleNavigation}>Change Password</Button>
                        <Button w={'100%'} onClick={() => logout()}>Log Out</Button>
                    </VStack>
                </Box>
            </Flex>
        </MainTemplate >
    )
}