import {
  Box,
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { PageHeading } from "../../../../components/Admin/SmallReusableComponents/Heading";
import { FaPause, FaPlay } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { VideoPlayer } from "../../../../components/Admin/SmallReusableComponents/VideoPlayer";
import { useRouter } from "next/router";
import axios from "axios";
import {
  pictureServer,
  server,
  videoServer,
} from "../../../../components/server";
import Loader from "../../../../components/Loader";

export default function ChannelDetails() {
  const router = useRouter();
  const { id } = router.query;
  console.log("ME ID", id);
  const [loading, setLoading] = useState(true);

  const [channelData, setChannelData] = useState({
    channel: {},
    videos: [],
    countVideos: 0,
  });

  useEffect(() => {
    const fetchChannelDetails = async () => {
      try {
        const response = await axios.get(`${server}users/channel/${id}`, {
          withCredentials: true,
        });
        console.log(response.data);
        setChannelData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching channel details:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchChannelDetails();
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader color="#55DF01" />
      ) : (
        <Stack>
          <PageHeading text={"Channel Management"} />

          <VStack>
            <HStack width={"100%"}>
              <Text align={"start"}> Channel ID: </Text>
              <Text align={"center"}>{channelData.channel.id}</Text>
            </HStack>
            <HStack width={"100%"}>
              <Text textAlign={"start"}> Channel Title: </Text>
              <Text textAlign={"center"}>{channelData.channel.name}</Text>
            </HStack>
            {/* <HStack width={"100%"}>
        <Text align={"start"}> Creator_Name: </Text>
        <Text align={"end"}>{channelData.Creator_Name}</Text>
      </HStack> */}
            <HStack width={"100%"}>
              <Text align={"start"}> Created_Date: </Text>
              <Text align={"end"}>
                {new Date(channelData.channel.createdAt).toLocaleDateString()}
              </Text>
            </HStack>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {channelData.channel.videos.map((video, index) => (
              <GridItem key={index} colSpan={1}>
                {video.trailers && video.trailers.length > 0 && (
                  <VideoPlayer
                    src={`${videoServer}/${video.trailers[0].file}`}
                    poster={`${pictureServer}/${video.trailers[0].poster}`}
                    name={video.name}
                  />
                )}
                <Text>
                  {video.trailers && video.trailers.length > 0
                    ? video.name
                    : `No trailers for the video ${index + 1}`}
                </Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Stack>
      )}
    </>
  );
}
