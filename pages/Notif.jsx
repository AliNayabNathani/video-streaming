import { Box, Button, Flex, FormLabel, HStack, Input, Select, VStack } from "@chakra-ui/react";
import { PageHeading } from "../components/Admin/SmallReusableComponents/Heading";


const Window = () => (
    <Box>
        <VStack>
            <HStack>
                <FormLabel>Select User:</FormLabel>
                <Select defaultValue={'Viewers'}>
                    <option value="Viewers">Viewers</option>
                    <option value="Content Creators">Content Creators</option>
                    <option value="Both">Both</option>
                </Select>
            </HStack>
            <HStack>
                <FormLabel>Title: </FormLabel>
                <Input />
            </HStack>
            <HStack>
                <Flex direction={'column'} height={'100%'}>
                    <FormLabel justifyContent={'start'}>Enter Description: </FormLabel>
                </Flex>
                <Input height={'10rem'} />
            </HStack>
            <HStack>
                <Button colorScheme="teal">Send</Button>
            </HStack>
        </VStack>
    </Box>
);

export default function CustomPushNotif() {
    return (
        <>
            <PageHeading text={'Custom Push Notifcations'} />
            <Window />
        </>
    );
}