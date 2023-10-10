import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  theme,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Center,
  Select,
  HStack,
  Stack,
} from "@chakra-ui/react";
import TableSummary from "../../components/Admin/Dashboard/TableSummary";
import GraphSummary from "../../components/Admin/Dashboard/GraphSummary";
import Charts from "../../components/Admin/Dashboard/chart";
import { Dashboard_Tables } from "../../components/Admin/Tables/Table";
import axios from "axios";

function Dashboard() {
  const [SelectedValue, setSelectedValue] = useState("Summary Overview");
  const [dashboardData, setDashboardData] = useState();
  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <Stack
        justifyContent={"space-between"}
        direction={["column", "row"]}
        alignItems={"center"}
      >
        <Heading textAlign={"center"} marginBottom={"2rem"}>
          Dashboard
        </Heading>

        <Select
          width={["70%", "20%"]}
          defaultValue={"Summary Overview"}
          marginBottom={4}
          onChange={handleSelectedValue}
          focusBorderColor="#323232"
        >
          <option value="Summary Overview">Summary Overview</option>
          <option value="Graph Overview">Graph Overview</option>
        </Select>
      </Stack>
      {SelectedValue == "Summary Overview" ? (
        <TableSummary />
      ) : (
        <GraphSummary />
      )}
      <Box marginTop={10}>
        <Charts />
      </Box>
      <Box mt={[8, 4]} alignSelf={"center"}>
        <Dashboard_Tables />
      </Box>
    </>
  );
}

export default Dashboard;
