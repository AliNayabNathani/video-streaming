import {
    Box,
    chakra,
    Container,
    Heading,
    HStack,
    Icon,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    VStack,
} from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={'white'}
            rounded={'md'}
            w={10}
            h={10}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: 'black',
                color: 'white'
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return (
        <Container
            as={Stack}
            maxW={'100%'}
            py={4}
            borderTop={'1px solid #232323'}
            px={{ base: 5, md: 24 }}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justifyContent={{ base: 'center', md: 'space-between' }}
            alignItems={'center'}
        >
            <VStack >
                <Heading fontSize={'1.5rem'}>Client Details</Heading>
                <VStack alignItems={'center'} justifyContent={'space-around'}>
                    <HStack>
                        <AiOutlineMail size={35} />
                        <Text>John@gmail.com</Text>
                    </HStack>
                    <HStack>
                        <MdCall size={35} />
                        <Text>479-200-7168</Text>
                    </HStack>
                </VStack>

            </VStack>
            <VStack alignItems={{ base: 'center', md: 'start' }}>
                <Heading fontSize={'1.5rem'}>Useful Links</Heading>
                <Text fontSize={'1.2rem'}>About Us</Text>
                <Text fontSize={'1.2rem'}>Privacy Policies</Text>
                <Text fontSize={'1.2rem'}>Terms and Conditions</Text>
            </VStack>
            <VStack>
                <Heading fontSize={'1.5rem'}>Social Media Links</Heading>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <Icon mt={'1rem'} as={FaFacebookF} _hover={{ color: 'white' }} color={'black'} boxSize={8} />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <Icon as={FaInstagram} _hover={{ color: 'white' }} color={'black'} boxSize={6} />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <Icon as={FaYoutube} _hover={{ color: 'white' }} color={'black'} boxSize={6} />
                    </SocialButton>
                </Stack>
            </VStack>
        </Container>
    )
}
