import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    GridItem,
    Checkbox,
    Icon,
    Tfoot,
    Button,
    HStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router';

import { useRef } from 'react';
import { BsCircle, BsExclamationCircleFill } from 'react-icons/bs';

const SuccessBox = () => (
    <Icon as={BsCircle} borderRadius={'full'} bg={'#55DF01'} />
)

const ErrorBox = () => (
    <Icon as={BsExclamationCircleFill} borderRadius={'full'} bg={'red'} />
)

const StandaloneTableData = [
    {
        title: 'Academy of ballet - outdoor Performances (2022)',
        status: 'Drafted',
        Japan: <SuccessBox />,
        UK: <ErrorBox />,
        US: <SuccessBox />,
    }
]

const StandaloneTableColumns = ['title', 'status', 'Japan', 'UK', 'US']


export const TableTemplate = ({ data, columns }) => {
    var num = 0;
    const router = useRouter();

    const handleNavigation = (to) => {
        router.push(to);
    }
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
                        {columns.map((c) => (
                            <Th
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
                                {columns.map((column) => {
                                    return (
                                        <Td textAlign={"center"}
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
                <Tfoot mt={'2rem'} w={'100%'} >
                    <HStack w={'100%'} justifyContent={'flex-end'}>
                        <Button onClick={() => handleNavigation('/Client/MyVideo')}>Publish</Button>
                    </HStack>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}

export default function Standlone() {
    return (
        <TableTemplate data={StandaloneTableData} columns={StandaloneTableColumns} />
    );
}