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
} from "@chakra-ui/react";
export default function TableSummary() {
  const Revenue_Card = ({ title, total_earnings, weekly_earnings }) => (
    <Card bg={"#232323"} color={"white"}>
      <CardBody>
        <VStack spacing={'1rem'} direction={"column"} alignItems={"center"}>
          <b>{title} </b>
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
          <Text fontWeight={'bold'}>
            {title}
          </Text>
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
        columns={{ base: "2", md: "5" }}
        spacing={{ base: 2, md: 5 }}
        borderRadius={5}
      >
        <Revenue_Card
          title="Total Revenue"
          total_earnings="$54000"
          weekly_earnings="$2000"
        />
        <Revenue_Card
          title="Sales Revenue"
          total_earnings="$33000"
          weekly_earnings="$1300"
        />
        <Revenue_Card
          title="Hub Revenue"
          total_earnings="$21000"
          weekly_earnings="$800"
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
