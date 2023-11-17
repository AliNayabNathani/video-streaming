import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../components/server";

export default function Support() {
  const [support, setSupport] = useState();
  useEffect(() => {
    axios
      .get(server + "creator/get-support", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data);
        setSupport(response.data.supportData);
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

        <Text textAlign={["center", "justify"]}>{support}</Text>
      </Box>
    </MainTemplate>
  );
}
