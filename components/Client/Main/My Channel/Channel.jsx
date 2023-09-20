import {
    Box, HStack, Heading, Stack, Text, VStack, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react";

import { PinkButton } from "../../Reusable Components/MainButton";
import { ReactPlayerOutline } from "../../Reusable Components/ReactPlayer";

const ChannelOutline = () => (
    <VStack bg={'white'} width={'100%'} p={'2rem'} mb={'2rem'}>
        <HStack justifyContent={'space-between'}>
            <Heading size={'md'} textDecor={'underline'}>Channel 1</Heading>
            <Text>Created on</Text>
        </HStack>
        <HStack justifyContent={'space-between'}>
            <Text as={'href'} textDecor={'underline'} color={'pink.800'}>Shows List</Text>
            <Text>2/12/2022</Text>
        </HStack>

        <HStack justifyContent={'space-between'}>
            <VStack>
                <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
                <Text textAlign={'center'}>Show 1</Text>
            </VStack>
            <VStack>
                <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
                <Text textAlign={'center'}>Show 2</Text>
            </VStack>
            <VStack>
                <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
                <Text textAlign={'center'}>Show 3</Text>
            </VStack>
            <VStack>
                <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
                <Text textAlign={'center'}>Show 4</Text>
            </VStack>
            <VStack>
                <ReactPlayerOutline url={'https://www.youtube.com/watch?v=-kbsbCO5ws8'} />
                <Text textAlign={'center'}>Show 5</Text>
            </VStack>
        </HStack>
    </VStack>
)

const AddChannelModal = ({ onOpen, isOpen, onClose }) => {
    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


export default function Channel() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const HandleModalButton = () => {
        AddChannelModal(isOpen, onClose);
    }

    return (
        <Box py={'3rem'} mx={'5rem'}>
            <Stack direction={'row'} my={'2rem'} justifyContent={'space-between'}>
                <Heading textDecor={'underline'}>My Channels</Heading>
                <Button onClick={onOpen} borderRadius={'0'} px={4} border={'1px solid black'} boxShadow={'4px 4px 4px black'} _hover={{ bg: 'pink.800' }} _focus={{ bg: 'pink.700' }} color={'white'} bg={"pink.900"}>Create Channel</Button>
            </Stack>
            <Box mx={['0', '5rem']}>
                <ChannelOutline />
                <ChannelOutline />
                <ChannelOutline />
            </Box>
        </Box>
    );
}