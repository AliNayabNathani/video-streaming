import { Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";

export default function Contact() {
    return (
        <MainTemplate>
            <Heading size={'lg'} mb={'2rem'}>Contact Us</Heading>
            <Text>
                If you need help, please visit our Help Center.There you&apos;ll find answers to many common questions about creating an account, watching and uploading videos, and maintaining your channel.
            </Text>
            <Text>
                If you&apos;re unable to find what you&apos;re looking for in the Help Center, we suggest visiting our Community Help Forum.Experiencing a bug ? Take a look at our Current Site Issues page to see a list of known issues we&apos;re working to fix.
            </Text>

            <Heading size={'md'} mt={'2rem'} mb={'1rem'} color={'#55DF01'}>Our Address</Heading>
            <Text>You can contact Videeo at the address below.</Text>
            <Text>Nulla ut lacus et velit feugiat dictum non vitae dictum tortor.</Text>
            <Heading size={'md'} mt={'1rem'} color={'#55DF01'}>Fax: +1750 - 698-0024</Heading>
        </MainTemplate>
    );
}