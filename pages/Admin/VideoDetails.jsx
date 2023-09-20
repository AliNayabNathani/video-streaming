import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  NormalHeading,
  PageHeading,
} from "../../components/Admin/SmallReusableComponents/Heading";
import {
  Video,
  VideoPlayer,
} from "../../components/Admin/SmallReusableComponents/VideoPlayer";

const VideoDetailsData = [
  {
    Video_ID: "11234",
    Video_Title: "The Dark Web",
    Content_Views: "5465565",
    Creator_Name: "Zack",
    Rented_Amount: "$45",
    Purchasing_Amount: "$80",
    Total_Videos_On_Rent: "869",
    Total_Purchases: "985",
    Uploaded_Date: "2/12/2022",
  },
];

const TrailerData = [
  {
    id: "1",
    name: "blue beetle",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster:
      "https://marketplace.canva.com/EAFAMirCsX4/2/0/1600w/canva-purple-creative-livestream-youtube-thumbnail-X2eVuOzURSM.jpg",
  },
  {
    id: "2",
    name: "blue beetle",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster:
      "https://img.freepik.com/premium-psd/youtube-video-thumbnail-start-trading-today_475351-168.jpg?w=2000",
  },
  {
    id: "3",
    name: "blue beetle",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster:
      "https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg",
  },
];

const EpisodeData = [
  {
    id: "01",
    name: "blue beetle",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster:
      "https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg",
  },
  {
    id: "02",
    name: "blue beetles",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster:
      "https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg",
  },
  {
    id: "03",
    name: "blue beetle",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    poster:
      "https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg",
  },
];

const VideoInfo = () => {
  return (
    <>
      <Stack
        mt={"2rem"}
        direction={["column", "row"]}
        width={"100%"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Box width={"250px"} height={"250px"}>
          <Image src="/assests/Carousal/Image1.jpg" />
        </Box>
        <HStack spacing={"2rem"} alignItems={"flex-start"}>
          <VStack alignItems={"flex-start"}>
            <Text>Video ID: {VideoDetailsData[0].Video_ID}</Text>
            <Text>Video Title: {VideoDetailsData[0].Video_Title}</Text>
            <Text>Content Views: {VideoDetailsData[0].Content_Views}</Text>
            <Text>Creator Name: {VideoDetailsData[0].Creator_Name}</Text>
            <Text>Rented Amount: {VideoDetailsData[0].Rented_Amount}</Text>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Text>
              Purchasing Amount: {VideoDetailsData[0].Purchasing_Amount}
            </Text>
            <Text>
              Total Videos On Rent: {VideoDetailsData[0].Total_Videos_On_Rent}
            </Text>
            <Text>Total_Purchases: {VideoDetailsData[0].Total_Purchases}</Text>
            <Text>Uploaded_Date: {VideoDetailsData[0].Uploaded_Date}</Text>
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
    </>
  );
};

export default function VideoDetails() {
  return (
    <>
      <PageHeading text={"Video Management"} />
      <Stack direction={["column", "column"]}>
        <VideoInfo />
        <Divider my={"2rem"} bg={"white"} />
        <NormalHeading text={"Trailer"} />
        <Stack
          direction={["column", "row"]}
          justifyContent={["center", "space-between"]}
          spacing={[6, 0]}
        >
          {TrailerData.map((trailer) => (
            <VideoPlayer
              src={trailer.src}
              poster={trailer.poster}
              name={trailer.name}
            />
          ))}
        </Stack>
        <Divider my={"2rem"} bg={"white"} />
        <NormalHeading text={"Episode"} />
        <Grid
          templateColumns={["1fr", "repeat(3, 1fr)"]}
          autoRows="auto"
          gap={[6, 2]}
        >
          {EpisodeData.map((episode) => (
            <GridItem colSpan={1}>
              <VideoPlayer
                src={episode.src}
                poster={episode.poster}
                name={episode.name}
              />
              <Text textAlign="start">Episodes {episode.id}</Text>
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
