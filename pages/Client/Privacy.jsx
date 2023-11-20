import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../components/server";

export default function Privacy() {
  const [privacyPolicy, setPrivacyPolicy] = useState();

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
        setPrivacyPolicy(response.data.privacyPolicy);
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
        >
          Privacy Policy
        </Heading>

        <Text textAlign={["center", "justify"]}>{privacyPolicy}</Text>
      </Box>
    </MainTemplate>
  );
}
