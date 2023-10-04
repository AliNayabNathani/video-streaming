import ReactStars from "react-rating-stars-component";
import { HStack, SimpleGrid, GridItem, VStack, Text, Heading, Box, Divider, Stack, Image, Input, Textarea, Button } from "@chakra-ui/react";
import { Video } from "../../components/Client/Reusable Components/VideoPlayer";
import MainTemplate from "../../components/Client/Templates/Main";
import { useState } from "react";

const VideoDetailsData = [
    {
        Video_ID: '11234',
        Video_Title: 'The Dark Web',
        Content_Views: '5465565',
        Creator_Name: 'Zack',
        Rented_Amount: '$45',
        Purchasing_Amount: '$80',
        Total_Videos_On_Rent: '869',
        Total_Purchases: '985',
        Uploaded_Date: '2/12/2022'
    }
]

const VideoInfo = () => {
    return (
        <Box mb={'3rem'}>
            <Stack
                mt={"2rem"}
                direction={["column", "row"]}
                width={"100%"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
            >
                <Box width={"250px"} height={"250px"}>
                    <Image alt="Content" src="/assests/Carousal/Image1.jpg" />
                </Box>
                <HStack spacing={"2rem"} alignItems={"flex-start"}>
                    <VStack alignItems={"flex-start"}>
                        <Text>Video ID: <b>{VideoDetailsData[0].Video_ID}</b></Text>
                        <Text>Video Title: <b>{VideoDetailsData[0].Video_Title}</b></Text>
                        <Text>Content Views: <b>{VideoDetailsData[0].Content_Views}</b></Text>
                        <Text>Creator Name: <b>{VideoDetailsData[0].Creator_Name}</b></Text>
                        <Text>Rented Amount: <b>{VideoDetailsData[0].Rented_Amount}</b></Text>
                    </VStack>
                    <VStack alignItems={"flex-start"}>
                        <Text>
                            Purchasing Amount: <b>{VideoDetailsData[0].Purchasing_Amount}</b>
                        </Text>
                        <Text>
                            Total Videos On Rent: <b>{VideoDetailsData[0].Total_Videos_On_Rent}</b>
                        </Text>
                        <Text>Total_Purchases: <b>{VideoDetailsData[0].Total_Purchases}</b></Text>
                        <Text>Uploaded_Date: <b>{VideoDetailsData[0].Uploaded_Date}</b></Text>
                    </VStack>
                </HStack>
            </Stack>
            <Stack
                mt={"2rem"}
                direction={["column", "row"]}
                justifyContent={"space-between"}
            >
                <VStack w={["100%", "60%"]}>
                    <Heading width={"100%"} size={"md"} textAlign={"start"}>
                        Description
                    </Heading>
                    <Text fontSize={"1rem"}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
                        fugiat nulla nisi dolorum! Eaque vitae necessitatibus quia ducimus
                        tenetur, quaerat ratione recusandae laboriosam repellat, optio rem
                        ab voluptatibus illo animi quasi laborum commodi fuga neque a
                        laudantium totam saepe quos, fugit voluptas. Eius ducimus dolorem
                        rem sequi deleniti optio veritatis.
                    </Text>
                </VStack>
                <VStack w={["100%", "30%"]} alignItems={"start"}>
                    <Heading width={"100%"} size={"md"}>
                        Cast/Crew
                    </Heading>
                    <Text fontSize={"1rem"}>
                        Cast: Tom Cruise, Angelina Jolie, Brad pitt
                    </Text>
                    <Text fontSize={"1rem"}>Genre: Thriller</Text>
                    <Text fontSize={"1rem"}>Documentary</Text>
                </VStack>
            </Stack>
        </Box>
    );
};

export default function Feedback() {
    const [ratings, setRatings] = useState(0);
    const ratingChanged = (newRating) => {
        setRatings(newRating);
    }
    return (
        <MainTemplate>
            <Box m={'3rem'}>
                <VideoInfo />
                <Divider />
                <Box mt={'3rem'}>
                    <Heading size={'md'}>Rate your Experience</Heading>
                    <VStack mb={'3rem'} alignItems={'flex-start'} spacing={0}>
                        <HStack alignItems={'center'} justifyContent={'flex-start'}>
                            <ReactStars
                                count={10}
                                size={48}
                                onChange={ratingChanged}
                                color={'gray'}
                                activeColor="#55DF01"
                            />
                            <Text fontSize={'1.25rem'}>{ratings}/10</Text>
                        </HStack>
                        <HStack>
                            <Text>91% match 2022</Text>
                            <Text px={1} background={'#55DF01'} borderRadius={'5px'}>18+</Text>
                            <Text>26 Episodes</Text>
                            <Text px={1} background={'#55DF01'} borderRadius={'5px'}>HD</Text>
                            <Text>1h 15min</Text>
                        </HStack>
                    </VStack>
                    <Box w={'100%'} mb={'3rem'}>
                        <Heading mb={'1rem'} size={'md'}>Write down your comment for improvement</Heading>
                        <Textarea placeholder="Start typing your comment" />
                    </Box>
                    <HStack justifyContent={'flex-end'}>
                        <Button w={['50%', '20%']}>Save</Button>
                        <Button w={['50%', '20%']} variant={'outline'}>Cancel</Button>
                    </HStack>
                </Box>
            </Box>
        </MainTemplate>
    )
}