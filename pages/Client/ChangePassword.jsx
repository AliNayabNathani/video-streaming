import { Box, Button, Flex, HStack, Heading, Icon, Input, Text, VStack } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { useRouter } from "next/router";

export default function ChangePassword() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/Client/Profile');
    }
    return (
        <MainTemplate>
            <Heading size={'lg'}>Change Password</Heading>
            <Flex mt={'5rem'} justifyContent={'center'}>
                <Box w={'500px'} bg={'#323232'} p={'2rem'}>
                    <VStack px={20} py={10} alignItems={'flex-start'} justifyContent={'center'}>
                        <Text fontWeight={'bold'}>Old Password</Text>
                        <Input mb={'1rem'} placeholder="Enter Old Password" />
                        <Text fontWeight={'bold'}>New Password</Text>
                        <Input mb={'1rem'} placeholder="Enter New Password" />
                        <Text fontWeight={'bold'}>Confirm Password</Text>
                        <Input mb={'1rem'} type='number' placeholder="Enter Confirm Password" />
                        <HStack w={'100%'}>
                            <Button w={'50%'}>Save</Button>
                            <Button variant={'outline'} w={'50%'}>Cancel</Button>
                        </HStack>
                    </VStack>
                </Box>
            </Flex>
        </MainTemplate >
    )
}