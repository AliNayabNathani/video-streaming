import {
  Box,
  Flex,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <Stack
      spacing={[2, 6]}
      justifyContent={"space-around"}
      direction={["column", "row"]}
      alignItems={["flex-start", "flex-start"]}
    >
      {payload.map((entry, index) => (
        <Box key={`legend-${index}`} display="flex" alignItems="center">
          <Box
            width="16px"
            height="16px"
            backgroundColor={entry.color}
            marginRight="5px"
          ></Box>
          <Text fontSize="14px" color="white">
            {entry.value}
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

const BarLineGraph = () => (
  <div
    style={{
      width: "100%",
      height: "400px",
      background: "#232323",
      padding: "1rem",
    }}
  >
    <ResponsiveContainer>
      <ComposedChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 0,
        }}
      >
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend content={<CustomLegend />} />
        <Bar dataKey="Daily_Revenue" barSize={10} fill="rgb(0 255 240)" />
        <Bar dataKey="Monthly_Revenue" barSize={10} fill="#55DF01" />
        <Line
          type="monotone"
          strokeWidth={5}
          dataKey="Monthly_Revenue"
          stroke="white"
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);

const data = [
  {
    name: "1",
    Daily_Revenue: 59,
    Monthly_Revenue: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "6",
    Daily_Revenue: 86,
    Monthly_Revenue: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "11",
    Daily_Revenue: 139,
    Monthly_Revenue: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "",
    Daily_Revenue: 100,
    Monthly_Revenue: 900,
    amt: 1500,
    cnt: 600,
  },
  {
    name: "16",
    Daily_Revenue: 148,
    Monthly_Revenue: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "21",
    Daily_Revenue: 152,
    Monthly_Revenue: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "26",
    Daily_Revenue: 140,
    Monthly_Revenue: 680,
    amt: 1700,
    cnt: 380,
  },
];

export default function GraphSummary() {
  return (
    <>
      <SimpleGrid columns={{ base: "1", md: "2" }} my={[4, 8]}>
        <GridItem colSpan={1} m={2}>
          <Heading
            size={"lg"}
            textAlign={["center", "left"]}
            marginBottom={6}
            mt={[8, 0]}
          >
            Revenue Analytics
          </Heading>
          <BarLineGraph />
        </GridItem>
        <GridItem colSpan={1} m={2}>
          <Heading
            size={"lg"}
            textAlign={["center", "left"]}
            marginBottom={6}
            mt={[8, 0]}
          >
            Sales Analytics
          </Heading>
          <BarLineGraph />
        </GridItem>
      </SimpleGrid>
    </>
  );
}