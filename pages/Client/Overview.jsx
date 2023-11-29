import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../../components/server";
import PrivateRoute from "../PrivateRoute";

export default function Overview() {
  const [overviewText, setOverviewText] = useState();

  useEffect(() => {
    axios
      .get(server + "creator/overview", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response.data);
        setOverviewText(response.data.overView);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);

  return (
    <PrivateRoute allowedRole="4">
      <MainTemplate>
        <Box p={8}>
          <Heading
            mb={["1rem", "2rem"]}
            size={["xl", "lg"]}
            textAlign={["center", "left"]}
          >
            Overview
          </Heading>
          <Text textAlign={["center", "justify"]}>{overviewText}</Text>
        </Box>
      </MainTemplate>
    </PrivateRoute>
  );
}
