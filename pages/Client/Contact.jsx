import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../components/server";

export default function Contact() {
  const [contactUs, setContactUs] = useState();

  useEffect(() => {
    axios
      .get(server + "creator/contact-us", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data.contactUsItem);
        setContactUs(response.data.contactUsItem);
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
          mb={["2rem", "2rem"]}
          size={["xl", "lg"]}
          textAlign={["center", "left"]}
        >
          Contact Us
        </Heading>
        {contactUs && (
          <Text textAlign={["center", "justify"]} mb={[8, 8]}>
            {contactUs.description}
          </Text>
        )}
        <Stack>
          {contactUs?.email && (
            <Stack
              direction={["column", "row"]}
              mb="2rem"
              textAlign={["center", "justify"]}
            >
              <Heading color={"#55DF01"} size={"md"}>
                Email
              </Heading>
              <Text> {contactUs.email}</Text>
            </Stack>
          )}

          {contactUs?.mobile_number && (
            <Stack
              direction={["column", "row"]}
              mb="2rem"
              textAlign={["center", "justify"]}
            >
              <Heading color={"#55DF01"} size={"md"}>
                Mobile Number
              </Heading>
              <Text> {contactUs.mobile_number}</Text>
            </Stack>
          )}

          {contactUs?.fax && (
            <Stack
              direction={["column", "row"]}
              mb="2rem"
              textAlign={["center", "justify"]}
            >
              <Heading color={"#55DF01"} size={"md"}>
                FAX
              </Heading>
              <Text> {contactUs.fax}</Text>
            </Stack>
          )}

          {contactUs?.address && (
            <Stack
              direction={["column", "row"]}
              mb="2rem"
              textAlign={["center", "justify"]}
            >
              <Heading color={"#55DF01"} size={"md"}>
                Address
              </Heading>
              <Text> {contactUs.address}</Text>
            </Stack>
          )}
        </Stack>
      </Box>
    </MainTemplate>
  );
}
