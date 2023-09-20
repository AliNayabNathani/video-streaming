import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    Image,
    Select,
    useDisclosure,
    Icon,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    VStack,
} from '@chakra-ui/react';
import { LanguageSelect } from '../Reusable Components/LanguageSelect';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRef } from 'react';

export default function Nav() {

    const MobileNav = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = useRef();
        return (
            <Box mt={3} display={{ base: 'block', md: 'none' }}>
                <Icon as={AiOutlineMenu} onClick={onOpen} />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <VStack mt={'5rem'}>

                                <LanguageSelect />

                                <Button width={'100%'} variant={'outline'}>
                                    Support
                                </Button>
                                <Button width={'100%'} variant={'solid'}>
                                    Login
                                </Button>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        )
    }
    return (
        <>
            <Box px={4} borderBottom={'1px'} borderColor={'whiteAlpha.600'}>
                <Flex h={24} px={{ base: 5, md: 10 }} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={['none', 'block']}>
                        <LanguageSelect />
                    </Box>
                    <Image src={'assests/videe0/Logo/Black _ White/sideBarLogo.png'}
                        alt="Logo"
                        w={"180px"}
                        h={"50px"} />

                    <Flex display={['none', 'block']} alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button variant={'outline'} >
                                Support
                            </Button>
                            <Button variant={'solid'}>
                                Login
                            </Button>
                        </Stack>
                    </Flex>
                    <MobileNav />
                </Flex>
            </Box>
        </>
    );
}
