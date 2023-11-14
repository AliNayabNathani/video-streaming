import {
  Box,
  CircularProgress,
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
} from "../../../../components/Admin/SmallReusableComponents/Heading";
import {
  Video,
  VideoPlayer,
} from "../../../../components/Admin/SmallReusableComponents/VideoPlayer";
import {
  pictureServer,
  server,
  videoServer,
} from "../../../../components/server";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "../../../../components/Loader";

const VideoInfo = ({ videoDetails }) => {
  //   console.log("MAI DETAILS HUN", videoDetails);
  return (
    <>
      <Stack
        mt={"2rem"}
        direction={["column", "row"]}
        width={"100%"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Box maxW={"250px"} maxH={"250px"}>
          <Image src={`${pictureServer}/${videoDetails.trailers[0].poster}`} />
        </Box>
        <HStack spacing={"2rem"} alignItems={"flex-start"}>
          <VStack alignItems={"flex-start"}>
            <Text>Video ID: {videoDetails.id}</Text>
            <Text>Video Title: {videoDetails.name}</Text>
            <Text>Content Views: {videoDetails.views}</Text>
            <Text>Channel Name: {videoDetails.channelId}</Text>
            <Text>Rented Amount: {videoDetails.rented_amount}</Text>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Text>Purchasing Amount: {videoDetails.purchasing_amount}</Text>
            <Text>Total Videos On Rent: 1</Text>
            <Text>Total_Purchases: 11</Text>
            <Text>
              Uploaded_Date:{" "}
              {new Date(videoDetails.createdAt).toLocaleDateString()}
            </Text>
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
          <Text fontSize={"1rem"} alignSelf={"baseline"}>
            {videoDetails.description}
          </Text>
        </VStack>
        <VStack w={["100%", "30%"]} alignItems={"start"}>
          <Heading width={"100%"} size={"md"}>
            Cast/Crew
          </Heading>
          <Text fontSize={"1rem"}>Cast: {videoDetails.Cast}</Text>
          <Text fontSize={"1rem"}>Genre: {videoDetails.Genre}</Text>
          <Text fontSize={"1rem"}>{videoDetails.category}</Text>
        </VStack>
      </Stack>
    </>
  );
};

export default function VideoDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [videoDetails, setVideoDetails] = useState(null);
  const [trailerData, setTrailerData] = useState([]);
  const [episodeData, setEpisodeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(`${server}users/video/${id}`, {
          withCredentials: true,
        });
        const data = response.data;
        console.log(data);
        setVideoDetails(data.video);
        setTrailerData(data.video.trailers);
        setEpisodeData(data.video.episodes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video details:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchVideoDetails();
    }
  }, [id]);

  return (
    <>
      <PageHeading text={"Video Management"} />
      {loading ? (
        <Loader color="#55DF01" />
      ) : (
        <Stack direction={["column", "column"]}>
          {videoDetails && <VideoInfo videoDetails={videoDetails} />}
          <Divider my={"2rem"} bg={"white"} />
          <NormalHeading text={"Trailers"} />
          <Stack
            direction={["column", "row"]}
            justifyContent={["center", "space-between"]}
            spacing={[6, 0]}
          >
            {trailerData.length > 0 ? (
              trailerData.map((trailer, index) => (
                <VideoPlayer
                  key={index}
                  src={`${videoServer}/${trailer.file}`}
                  poster={`${pictureServer}/${trailer.poster}`}
                  name={trailer.title}
                />
              ))
            ) : (
              <Text>No Trailers Available</Text>
            )}
          </Stack>
          <Divider my={"2rem"} bg={"white"} />
          <NormalHeading text={"Episodes"} />
          <Grid
            templateColumns={["1fr", "repeat(3, 1fr)"]}
            autoRows="auto"
            gap={[6, 2]}
          >
            {episodeData.length > 0 ? (
              episodeData.map((episode, index) => (
                <GridItem key={index} colSpan={1}>
                  <VideoPlayer
                    src={`${videoServer}/${episode.file}`}
                    poster={`${pictureServer}/${episode.poster}`}
                    name={episode.title}
                  />
                  <Text textAlign="start">Episode {episode.id}</Text>
                </GridItem>
              ))
            ) : (
              <Text>No Episodes Available</Text>
            )}
          </Grid>
        </Stack>
      )}
    </>
  );
}
