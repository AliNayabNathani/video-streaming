import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    SimpleGrid,
    GridItem,
    Checkbox,
} from '@chakra-ui/react'

import { useRef } from 'react';
export const TableTemplate = ({ data, columns }) => {
    var num = 0;
    return (
        <TableContainer mb={'2rem'}
            mt={"1rem"}
            borderRadius={"10px"}
            borderWidth={"2px"}
            borderColor={"blackAlpha.600"}
            bg={"#232323"}
            p={[4, 8]}>
            <Table colorScheme='gray'>
                <Thead bg={"#181818"}>
                    <Tr>
                        {columns.map((c, index) => (
                            <Th
                                key={index}
                                textAlign={"center"}
                                maxWidth={"10rem"}
                                px={"10px"}
                                border={0}
                                borderTop={'1px solid RGBA(255, 255, 255, 0.48)'}
                                color="white">{c}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item, index) => {
                        { num++ }
                        return (
                            <Tr style={num % 2 === 1 ?
                                { background: 'RGBA(0, 0, 0, 0.05)' } :
                                { background: 'RGBA(255, 255, 255, 0.15)' }}
                                key={index}>
                                {columns.map((column, subIndex) => {
                                    return (
                                        <Td
                                            key={subIndex}
                                            textAlign={"center"}
                                            border={0}
                                            borderBottom={'1px solid RGBA(255, 255, 255, 0.48)'}>
                                            {item[column]}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
}