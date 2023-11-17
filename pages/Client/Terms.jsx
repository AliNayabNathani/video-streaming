import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { server } from "../../components/server";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Terms() {
  const [termsAndConditions, setTermsAndConditions] = useState();

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
        setTermsAndConditions(response.data.termsAndConditions);
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
          children="Terms And Conditions"
        />

        <Text textAlign={["center", "justify"]}>{termsAndConditions}</Text>
      </Box>
    </MainTemplate>
  );
}
