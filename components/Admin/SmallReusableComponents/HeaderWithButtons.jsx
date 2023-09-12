import { Button, HStack, Stack } from "@chakra-ui/react";
import { PageHeading } from "./Heading";

const HeaderWithButtons = ({ button1, button2, heading }) => (
    <HStack my={'2rem'} justifyContent="space-between">
        <PageHeading text={heading} />
        <Stack direction="row" align="flex-end">
            {button1 ? <Button size={{ base: 'sm', md: 'md' }} variant={'outline'}>{button1}</Button> : null}
            {button2 ? <Button _hover={{ bg: 'black', color: '#55DF01' }} border='1px solid #55DF01' size={{ base: 'sm', md: 'md' }} variant={'solid'}>{button2}</Button> : null}
        </Stack>
    </HStack>
);

export { HeaderWithButtons };