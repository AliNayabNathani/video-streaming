import {
    Box, Flex, HStack, Heading, Stack, Text, VStack,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Select,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
} from "@chakra-ui/react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";


const contentData = [
    {
        name: 'Subscribers',
        num: '100M'
    },
    {
        name: 'Total Viewers',
        num: '14B'
    },
    {
        name: 'Watch Time',
        num: '1024H'
    },
    {
        name: 'Revenue',
        num: '50K'
    },
    {
        name: 'Likes',
        num: '100K'
    }
]

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const GrayOutline = ({ text, num }) => (
    <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} height={'7rem'} border={'1px solid black'} borderRadius={'10px'} bg={'#232323'} >
        < VStack alignItems={'center'}>
            <Text color={'white'} fontWeight={'bold'}>{text}</Text>
            <Text color={'white'}>{num}</Text>
        </VStack>
    </Flex >
)

const TablehHeading = ({ children }) => (
    <Th
        textAlign={"center"}
        maxWidth={"10rem"}
        px={"10px"}
        border={0}
        borderTop={'1px solid RGBA(255, 255, 255, 0.48)'}
        color="white"
    >
        {children}
    </Th>
)
const TableColumn = ({ children }) => (
    <Td
        textAlign={"center"}
        border={0}
        borderBottom={'1px solid RGBA(255, 255, 255, 0.48)'}
    >
        {children}
    </Td>
);

const TableComp = ({ TablehHeading, TableColumn }) => (
    <TableContainer
        mb={'2rem'}
        mt={"1rem"}
        borderRadius={"10px"}
        borderWidth={"2px"}
        borderColor={"blackAlpha.600"}
        bg={"#232323"}
        p={8}
    >
        <Table>
            <Thead bg={"#181818"}>
                <Tr>
                    <TablehHeading>Videos</TablehHeading>
                    <TablehHeading>US</TablehHeading>
                    <TablehHeading>Africa</TablehHeading>
                    <TablehHeading>UK</TablehHeading>
                    <TablehHeading>India</TablehHeading>
                    <TablehHeading>Canada</TablehHeading>
                    <TablehHeading>Australia</TablehHeading>
                </Tr>
            </Thead>

            <Tbody>
                <Tr>
                    <TableColumn>Total Earnings</TableColumn>
                    <TableColumn>$250</TableColumn>
                    <TableColumn>R259</TableColumn>
                    <TableColumn>£300</TableColumn>
                    <TableColumn>₹540</TableColumn>
                    <TableColumn>$650</TableColumn>
                    <TableColumn>$350</TableColumn>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer >
)

const Info_Graph = ({ data }) => {
    return (
        <div
            style={{
                width: "100%",
                height: "400px",
                background: "#232323",
                padding: "1rem",
            }}
        >
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid horizontal={true} vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone"
                        dataKey="uv"
                        stroke="#55DF51"
                        strokeWidth={4}
                        dot={false} />

                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#55DF01"
                        strokeWidth={4}
                        dot={false}
                    />
                    {/* <Line type="monotone" stroke="#55DF01" /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export const Earnings = () => {
    const [optionValue, setOptionValue] = useState('Yearly');

    const handleSelectChange = value => {
        setOptionValue(value);
    };
    return (
        <Box >
            <Heading fontSize={'1.5rem'} my={5} textAlign={{ base: 'center', md: 'start' }}>Statistics</Heading>
            <Stack width={'100%'} direction={{ base: 'column', md: 'row' }} alignItems={'center'} justifyContent={{ base: 'center', md: 'start' }}>
                {contentData.map((content, index) => (
                    <GrayOutline key={index} text={content.name} num={content.num} />
                ))}
            </Stack>
            <TableComp TablehHeading={TablehHeading} TableColumn={TableColumn} />
            <HStack justifyContent={'space-between'} >
                <Heading fontSize={'1.5rem'} mb={'1rem'}>Viewers on Graph</Heading>
                <Menu>
                    <MenuButton p={2} _active={{ bg: '#232323' }} _hover={{ bg: '#232323' }} width={['auto', '15%']} textAlign={'center'} borderRadius={'5px'} as={Box} bg="rgba(255, 255, 255, 0.48)">
                        <HStack justifyContent={'space-between'}>
                            <Text>{optionValue}</Text>
                            <Icon as={ChevronDownIcon} />
                        </HStack>
                    </MenuButton>
                    <MenuList p={0} m={0}>
                        <MenuItem onClick={() => handleSelectChange('Yearly')} value="Yearly">Yearly</MenuItem>
                        <MenuItem onClick={() => handleSelectChange('Monthly')} value="Monthly">Monthly</MenuItem>
                        <MenuItem onClick={() => handleSelectChange('Weekly')} value="Weekly">Weekly</MenuItem>
                        <MenuItem onClick={() => handleSelectChange('Daily')} value="Daily">Daily</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <Info_Graph data={data} />
        </Box>
    )
}