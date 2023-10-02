import {
  Stack,
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  Heading,
  SimpleGrid,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import { Tooltip } from "recharts";
export default function TableSummary() {
  const Revenue_Card = ({ title, total_earnings, weekly_earnings, label }) => (
    <Card bg={"#232323"} color={"white"}>
      <CardBody>
        <VStack spacing={'1rem'} direction={"column"} alignItems={"center"}>
          <HStack justifyContent={'space-between'}>
            <Heading size={'md'} color={'#55DF01'}>{title} </Heading>
            <Tooltip hasArrow label={label} color='white'>
              <AiOutlineInfoCircle size={8} />
            </Tooltip>
          </HStack>
          <Box>
            <Text>{total_earnings}</Text>
            <Text style={{ color: 'green' }}>+{weekly_earnings}</Text>
          </Box>
          <Text>From Previous Month</Text>
        </VStack>
      </CardBody>
    </Card>
  );

  const Stats_Card = ({ title, total, monthly }) => (
    <Card bg={"#232323"} color={"white"}>
      <CardBody>
        <VStack spacing={'1rem'} direction={"column"} alignItems={"center"}>
          <Heading size={'md'} color={'#55DF01'}>{title} </Heading>
          <Box>
            <Text>This month: {monthly}</Text>
            <Text>Total: {total}</Text>
          </Box>
          <Text textDecor={'underline'}>View All</Text>
        </VStack>
      </CardBody>
    </Card>
  );

  return (
    <>
      <SimpleGrid
        columns={{ base: "2", md: "4" }}
        spacing={{ base: 2, md: 4 }}
        borderRadius={5}
      >
        <Revenue_Card
          title="Total Revenue"
          total_earnings="$54000"
          weekly_earnings="$2000"
          label='Revenue of Current Month'
        />
        <Revenue_Card
          title="Sales Revenue"
          total_earnings="$33000"
          weekly_earnings="$1300"
          label='Sales of Current Month'
        />
        <Revenue_Card
          title="Hub Revenue"
          total_earnings="$21000"
          weekly_earnings="$800"
          label='Hub Revenue of Current Month'
        />
        <Stats_Card title="Total Users" total="15000" monthly="150" />
        <Stats_Card
          title="Total Content Creators"
          total="13000"
          monthly="130"
        />
        <Stats_Card title="Total Videos" total="5000" monthly="50" />
        <Stats_Card title="Total Movies" total="1000" monthly="10" />
        <Stats_Card title="Total TV Series" total="500" monthly="5" />
        <Stats_Card title="Total Live Streams" total="4000" monthly="40" />
        <Stats_Card title="Active Subscriptions" total="1000" monthly="10" />
      </SimpleGrid>
    </>
  );
}
