import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Heading, Image, Input, Stack, VStack } from '@chakra-ui/react';
import React from 'react'

const Navbar = ({ onOpen }) => {

    return (
        <HStack p={['1rem', '3rem']} w={'full'} justifyContent={'space-between'}>
            <Image w={'150px'} h={'50px'} src='/assests/videe0/Logo/Black _ White/sideBarLogo.png' />
            <Button w={['30%', '15%', '10%']} onClick={onOpen}>Sign In</Button>
        </HStack>
    );
}

const Modal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Lorem count={2} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box h={'100vh'}>
            <Navbar onOpen={onOpen} />
            <VStack h={'70vh'} spacing={'2rem'} justifyContent={'center'} alignItems={'center'}>
                <Heading size={'3xl'}>Unlimited Movies, TV Shows and more</Heading>
                <Heading color={'#fff'} fontWeight={'normal'} size={'lg'}>Watch Anywhere. Cancel Anytime</Heading>
                <Heading color={'#fff'} fontWeight={'normal'} size={'lg'}>Ready to watch? Enter your email to create or restart your membership</Heading>
                <Stack justifyContent={'center'} w={'60%'} direction={['column', 'row']}>
                    <Input w={'50%'} border={'1px solid transparent'} bg={'#414141'} placeholder='Email Address' />
                    <Button w={'20%'} rightIcon={<ChevronRightIcon boxSize={6} />}>Get Started</Button>
                </Stack>
                <Modal isOpen={isOpen} onClose={onClose} />
            </VStack>
        </Box>
    )
}

export default Index