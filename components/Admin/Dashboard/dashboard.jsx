import React, { useState } from 'react';
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
  HStack
} from '@chakra-ui/react';
import SidebarWithHeader from '../Sidebar/sidebartest';
import TableSummary from "./TableSummary"
import GraphSummary from './GraphSummary';
import Charts from './chart';
import { Dashboard_Tables } from '../Tables/Table';

function Dashboard() {
  const [SelectedValue, setSelectedValue] = useState('Tables');

  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  }
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <HStack>
        <Heading
          textAlign={'center'}
          marginBottom={'2rem'}
          textDecor={'underline'}
          color={'cyan.400'}
        >Dashboard
        </Heading>

        <Select defaultValue={'Tables'} marginBottom={5} onChange={handleSelectedValue}>
          <option value="Graphs">Graphs</option>
          <option value="Tables">Tables</option>
        </Select>
        {SelectedValue == 'Tables' ? <TableSummary /> : <GraphSummary />}
      </HStack>
      <Box marginTop={10}>
        <Charts />
      </Box>
      <Box>
        <Dashboard_Tables />
      </Box>
    </Box>
  );
}

export default Dashboard;
