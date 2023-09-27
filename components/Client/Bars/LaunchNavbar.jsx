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
import { AiOutlineMenu } from 'react-icons/ai';
import { useRef } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Nav() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    // const login = async () => {
    //     // const domain = "dev-g47ngs10wcqmnpfs.us.auth0.com";
    //     // const audience = "https://www.VideeO.com";
    //     // const scope = "get:user";
    //     // const clientId = "adb38ErO5bDrRS3ICJsRDrYBtUxOpOlX";
    //     // const responseType = "code";
    //     // const redirectUri = "http://localhost:3000/Client/Dashboard";

    //     // const response = await fetch(
    //     //     `https://dev-g47ngs10wcqmnpfs.us.auth0.com/authorize?audience=https://www.VideeO.com&scope=get:user&response_type=code&client_id=adb38ErO5bDrRS3ICJsRDrYBtUxOpOlX&redirect_uri=http://localhost:3000/Client/Dashboard`, {
    //     //     redirect: "manual"
    //     // }
    //     // );
    //     const domain = "dev-g47ngs10wcqmnpfs.us.auth0.com";
    //     const url = `https://dev-g47ngs10wcqmnpfs.us.auth0.com/authorize?audience=https://www.VideeO.com&scope=get:user&response_type=code&client_id=adb38ErO5bDrRS3ICJsRDrYBtUxOpOlX&redirect_uri=http://localhost:3000/Client/Dashboard`;
    //     router.push(url);
    // };

    const handleNavigation = (to) => {
        router.push(to);
    }

    // if (user) {
    //     router.push('/Client/Dashboard');
    // }

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

                                <Button width={'100%'} variant={'outline'} onClick={() => handleNavigation('/pages/Client/Details.jsx')}>
                                    Support
                                </Button>
                                <Button onClick={() => handleNavigation('/api/auth/login')} width={'100%'} variant={'solid'}>
                                    Login
                                </Button>
                                {error && <Text>Server Error</Text>}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        )
    }

    return isLoading ? (<div>Loading...</div>) : (
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
                            <Button variant={'outline'} onClick={() => handleNavigation('/pages/Client/Details.jsx')}>
                                Support
                            </Button>
                            <Button variant={'solid'} onClick={() => handleNavigation('api/auth/login')}>
                                Login
                            </Button>
                        </Stack>
                    </Flex>
                    <MobileNav />
                </Flex>
            </Box>
        </>
    )
}
