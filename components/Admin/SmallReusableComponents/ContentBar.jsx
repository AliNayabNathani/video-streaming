import { Box, Flex } from "@chakra-ui/react";

const ContentBar = ({ Text_1, Text_2, Text_3, SetSelectedButton }) => {
    return (
        <Flex justifyContent="center">
            <Flex boxShadow={'4px 4px 4px teal'}>
                {Text_1 && < Box p={{ base: '0.5rem 0.3rem', md: '1rem 4rem' }} fontSize={{ base: 'sm', md: 'md' }} color={'blackAlpha.700'} borderColor={'teal.600'} onClick={() => SetSelectedButton(Text_1)} className="Content-Bar">
                    {Text_1}
                </Box>
                }
                {Text_2 && <Box p={{ base: '0.5rem', md: '1rem 4rem' }} fontSize={{ base: 'sm', md: 'md' }} color={'blackAlpha.700'} borderColor={'teal.600'} onClick={() => SetSelectedButton(Text_2)} className="Content-Bar" >
                    {Text_2}
                </Box>
                }
                {Text_3 && <Box p={{ base: '0.5rem', md: '1rem 4rem' }} fontSize={{ base: 'sm', md: 'md' }} color={'blackAlpha.700'} borderColor={'teal.600'} onClick={() => SetSelectedButton(Text_3)} className="Content-Bar">
                    {Text_3}
                </Box>
                }
            </Flex>
        </Flex>
    );
}

export { ContentBar };