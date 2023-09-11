import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

const Charts = () => {
  const Data_1 = [
    {
      name: "Jan",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      pv: 7500,
      amt: 2290,
    },
    {
      name: "Apr",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      pv: 4500,
      amt: 2100,
    },
    {
      name: "Aug",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      pv: 4300,
      amt: 2100,
    },
  ];

  const Data_2 = [
    {
      name: "Jan",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      pv: 2000,
      amt: 2290,
    },
    {
      name: "Apr",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sep",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <SimpleGrid columns={{ base: "1", md: "2" }}>
        <GridItem colSpan={1} m={2}>
          <Heading
            size={"lg"}
            textAlign={["center", "left"]}
            marginBottom={6}
            mt={[8, 0]}
          >
            Users
          </Heading>
          <Info_Graph data={Data_1} />
        </GridItem>
        <GridItem colSpan={1} m={2}>
          <Heading
            size={"lg"}
            textAlign={["center", "left"]}
            marginBottom={6}
            mt={[8, 0]}
          >
            Content Creators
          </Heading>
          <Info_Graph data={Data_2} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Charts;
