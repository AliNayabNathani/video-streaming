import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../components/server";

export default function Account() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios
      .get(server + "creator/faqs-account", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setFaqs(response.data.FaqAccounts);
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
          Account
        </Heading>

        {faqs.map((faq, index) => (
          <Box key={index} mb="2rem" textAlign={["center", "justify"]}>
            <Heading color={"#55DF01"} size={"md"}>
              {faq.questions}
            </Heading>
            <Text>{faq.answers}</Text>
          </Box>
        ))}
      </Box>
    </MainTemplate>
  );
}
