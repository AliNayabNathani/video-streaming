import React, { useState } from "react";
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
} from "@chakra-ui/react";
import TableSummary from "../components/Admin/Dashboard/TableSummary";
import GraphSummary from "../components/Admin/Dashboard/GraphSummary";
import Charts from "../components/Admin/Dashboard/chart";
import { Dashboard_Tables } from "../components/Admin/Tables/Table";

function Dashboard() {
  const [SelectedValue, setSelectedValue] = useState("Tables");

  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <HStack justifyContent={"space-between"}>
        <Heading textAlign={"center"} marginBottom={"2rem"}>
          Dashboard
        </Heading>

        <Select
          width={"20%"}
          defaultValue={"Tables"}
          marginBottom={5}
          onChange={handleSelectedValue}
        >
          <option value="Summary Overview">Summary Overview</option>
          <option value="Graph Overview">Graph Overview</option>
        </Select>
      </HStack>
      {SelectedValue == "Tables" ? <TableSummary /> : <GraphSummary />}
      <Box marginTop={10}>
        <Charts />
      </Box>
      <Box mt={[8, 4]} alignSelf={"center"}>
        <Dashboard_Tables />
      </Box>
    </Box>
  );
}

export default Dashboard;
