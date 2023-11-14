import { Box, Heading, Text } from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../../components/server";
import PrivateRoute from "../PrivateRoute";

export default function Overview() {
  const [overviewText, setOverviewText] = useState();
  const response = axios.get(server + "client/get-overview", {
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: true,
  });
  useEffect(() => {
    axios
      .get(server + "client/get-overview", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setOverviewText(response.data.overviewData);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);

  return (
    <PrivateRoute allowedRole="2">
      <MainTemplate>
        <Box p={8}>
          <Heading mb={"2rem"} size={"md"}>
            Overview
          </Heading>
          <Text>{overviewText}</Text>
          <br />
          <Text>{overviewText}</Text>
          <br />
          <Text>{overviewText}</Text>
          <br />
          <Text>{overviewText}</Text>
        </Box>
      </MainTemplate>
    </PrivateRoute>
  );
}
