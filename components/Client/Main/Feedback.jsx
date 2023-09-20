import { Box, Flex, FormLabel, HStack, Heading, Icon, Textarea, VStack } from "@chakra-ui/react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { MainButton, NavButton } from "../Reusable Components/MainButton";
import ReactStars from "react-rating-stars-component";

export default function Feedback() {
    return (
        <Flex justifyContent={'center'} px={['2rem', '5rem']} py={'2rem'}>
            <Box bg={'white'} px={['2rem', '5rem']} py={'2rem'}>
                <VStack>
                    <Heading textAlign={'start'} size='md'>Rate your experience</Heading>
                    <HStack mb={'2rem'} width={['100%', '70%']} justifyContent={'center'}>
                        <ReactStars
                            count={5}
                            size={24}
                            color={'gray'}
                            activeColor="black"
                        />
                    </HStack>
                    <FormLabel>Write down your comment for improvement</FormLabel>
                    <Textarea mb={'1rem'} width={'100%'} />
                    <HStack justifyContent={'space-around'}>
                        <NavButton>Cancel</NavButton>
                        <NavButton>Save</NavButton>
                    </HStack>
                </VStack>
            </Box>
        </Flex>
    );
}