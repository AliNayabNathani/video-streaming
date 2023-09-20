import { Box, HStack, Heading, Select, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import TableSummary from "./TableSummary";
import GraphSummary from "./GraphSummary";

export default function Analytics() {
    const [SelectedValue, setSelectedValue] = useState('Summary Overview');

    return (
        <Box py={'2rem'} mx={'5rem'}>
            <Stack direction={['column', 'row']} my={'2rem'} justifyContent={'space-between'}>
                <Heading textDecor={'underline'}>Analytics</Heading>
                <Select width={['100%', '20%']} bg={'white'} onChange={(e) => setSelectedValue(e.target.value)}>
                    <option selected value="Summary Overview">Summary Overview</option>
                    <option value="Graphs">Graphs</option>
                </Select>
            </Stack>
            <Box mx={['0', '10rem']}>
                {SelectedValue === 'Summary Overview' ? <TableSummary />
                    : <GraphSummary />}
            </Box>
        </Box>
    );
}