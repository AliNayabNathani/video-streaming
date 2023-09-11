import { Button, HStack, Stack } from "@chakra-ui/react";
import { PageHeading } from "./Heading";

const HeaderWithButtons = ({ button1, button2, heading }) => (
    <HStack justifyContent="space-between">
        <PageHeading text={heading} />
        <Stack direction="row" align="flex-end">
            {button1 ? <Button size={{ base: 'sm', md: 'md' }} colorScheme="teal">{button1}</Button> : null}
            {button2 ? <Button size={{ base: 'sm', md: 'md' }} colorScheme="teal">{button2}</Button> : null}
        </Stack>
    </HStack>
);

export { HeaderWithButtons };