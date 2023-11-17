import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../components/server";

export default function Copyright() {
  const [copyrightTrademark, setCopyrightTrademark] = useState();

  useEffect(() => {
    axios
      .get(server + "users/get-all-content", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data);
        setCopyrightTrademark(response.data.copyrightAndTrademark);
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
          children="Copyright & Trademark"
        />

        <Text textAlign={["center", "justify"]}>{copyrightTrademark}</Text>
      </Box>
    </MainTemplate>
  );
}
