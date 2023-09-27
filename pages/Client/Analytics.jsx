import { Box, HStack, Heading, Menu, MenuButton, MenuItem, MenuList, Select, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import MainTemplate from "../../components/Client/Templates/Main";
import TableSummary from "../../components/Admin/Dashboard/TableSummary";
import GraphSummary from "../../components/Admin/Dashboard/GraphSummary";

export default function Analytics() {
    const [SelectedValue, setSelectedValue] = useState('Summary Overview');

    return (
        <MainTemplate>
            <Box>
                <Stack direction={['column', 'row']} my={'2rem'} justifyContent={'space-between'}>
                    <Heading textDecor={'underline'}>Analytics</Heading>

                    <Menu>
                        <MenuButton p={2} borderRadius={'5px'} bg={'#232323'}>{SelectedValue}</MenuButton>
                        <MenuList onSelect={(value) => setSelectedValue(value)}>
                            <MenuItem onClick={() => setSelectedValue('Summary Overview')} value="Summary Overview">Summary Overview</MenuItem>
                            <MenuItem onClick={() => setSelectedValue('Graphs')} value="Graphs">Graphs</MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
                <Box >
                    {SelectedValue === 'Summary Overview' ? <TableSummary />
                        : <GraphSummary />}
                </Box>
            </Box>
        </MainTemplate>
    );
}