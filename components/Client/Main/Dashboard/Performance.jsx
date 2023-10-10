import { Box, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TableTemplate } from '../Table';
import { ChevronDownIcon } from '@chakra-ui/icons';

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

const PerformanceData = [
    {
        Date: '11/22',
        US: '25',
        Africa: '55',
        UK: '65',
        Total: '105',
    },
    {
        Date: '11/23',
        US: '30',
        Africa: '60',
        UK: '70',
        Total: '160',
    },
    {
        Date: '11/24',
        US: '35',
        Africa: '65',
        UK: '75',
        Total: '175',
    },
    {
        Date: '11/25',
        US: '40',
        Africa: '70',
        UK: '80',
        Total: '190',
    },
    {
        Date: '11/26',
        US: '45',
        Africa: '75',
        UK: '85',
        Total: '205',
    },
    {
        Date: '11/27',
        US: '50',
        Africa: '80',
        UK: '90',
        Total: '220',
    },
]

const PerformanceColumns = [
    'Date',
    'US',
    'Africa',
    'UK',
    'Total',
]

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

export default function Performance() {
    const [minutesValue, setMinutesValue] = useState('Minutes Streamed');
    const [videoValue, setVideoValue] = useState('All Vidoes');
    const [durationValue, setDurationValue] = useState('Last Week');

    const handleMinutesChange = (value) => {
        setMinutesValue(value);
    };

    const handleVideoChange = (value) => {
        setVideoValue(value);
    };

    const handleDurationChange = (value) => {
        setDurationValue(value);
    };

    return (
        <Box>
            <Stack mb={'2rem'} w={['100%', '60%']} direction={{ base: 'column', md: 'row' }} mt={'2rem'}>
                <Menu>
                    <MenuButton p={2} _active={{ bg: '#232323' }} _hover={{ bg: '#232323' }} width={['auto', '100%']} textAlign={'center'} borderRadius={'5px'} as={Box} bg="#232323">
                        <HStack justifyContent={'space-between'}>
                            <Text>{minutesValue}</Text>
                            <Icon as={ChevronDownIcon} />
                        </HStack>
                    </MenuButton>
                    <MenuList p={0} m={0}>
                        <MenuItem onClick={() => handleMinutesChange('Minutes Streamed')} value={minutesValue}>{minutesValue}</MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton p={2} _active={{ bg: '#232323' }} _hover={{ bg: '#232323' }} width={['auto', '100%']} textAlign={'center'} borderRadius={'5px'} as={Box} bg="#232323">
                        <HStack justifyContent={'space-between'}>
                            <Text>{videoValue}</Text>
                            <Icon as={ChevronDownIcon} />
                        </HStack>
                    </MenuButton>
                    <MenuList p={0} m={0}>
                        <MenuItem onClick={() => handleVideoChange('All Videos')} value={videoValue}>All Videos</MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton p={2} _active={{ bg: '#232323' }} _hover={{ bg: '#232323' }} width={['auto', '100%']} textAlign={'center'} borderRadius={'5px'} as={Box} bg="#232323">
                        <HStack justifyContent={'space-between'}>
                            <Text>{durationValue}</Text>
                            <Icon as={ChevronDownIcon} />
                        </HStack>
                    </MenuButton>
                    <MenuList p={0} m={0}>
                        <MenuItem onClick={() => handleDurationChange('Last Week')} value={durationValue}>Last Week</MenuItem>
                    </MenuList>
                </Menu>
            </Stack>
            <Info_Graph data={data} />
            <TableTemplate data={PerformanceData} columns={PerformanceColumns} />
        </Box>
    );
}