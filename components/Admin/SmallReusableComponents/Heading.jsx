import { Heading } from "@chakra-ui/react"

const PageHeading = ({ text }) => (
    <Heading
        align="start"
        marginBottom="2rem"
        textDecor="underline"
        color="teal.400"
        size={{ base: 'md', md: 'lg' }}
    >
        {text}
    </Heading>
);

const NormalHeading = ({ text }) => (
    <Heading
        my={'1rem'}
        direction='row'
        align='start'
        size={'md'}
        color={'teal.500'}
    >
        {text}
    </Heading>
)
export { PageHeading, NormalHeading };