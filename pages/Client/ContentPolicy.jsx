import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { useEffect, useState } from "react";
import { server } from "../../components/server";
import axios from "axios";

export default function ContentPolicy() {
  const [contentPolicy, setContentPolicy] = useState();

  useEffect(() => {
    axios
      .get(server + "creator/content-policy", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data);
        setContentPolicy(response.data.contentPolicy);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);
  return (
    <MainTemplate>
      <Box m={"1rem"}>
        <Heading
          mb={["1rem", "2rem"]}
          size={["xl", "lg"]}
          textAlign={["center", "left"]}
          children="Support"
        />

        <Text textAlign={["center", "justify"]}>{contentPolicy}</Text>
      </Box>
    </MainTemplate>
  );
}
