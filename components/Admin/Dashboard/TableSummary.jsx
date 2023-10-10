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
import axios from "axios";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import { Tooltip } from "recharts";
import { server } from "../../server";
import { useEffect, useState } from "react";
export default function TableSummary() {
  // const [TableData, setTableData] = useState({
  //   total_revenue: 0,
  //   sales_revenue: 0,
  //   hub_revenue: 0,
  //   total_users: 0,
  //   total_content_creators: 0,
  //   total_videos: 0,
  //   total_movies: 0,
  //   total_series: 0,
  //   total_live_streams: 0,
  //   active_subs: 0
  // });

  const [totalRevenueData, setTotalRevenueData] = useState({
    total: 0,
    prevMonth: 0,
  });

  const [totalUsers, setTotalUsers] = useState({
    current: 0,
    total: 0,
  });

  const [totalCreators, setTotalCreators] = useState({
    current: 0,
    total: 0,
  });

  const [totalVideos, setTotalVideos] = useState({
    current: 0,
    total: 0,
  });

  const [totalMovies, setTotalMovies] = useState({
    current: 0,
    total: 0,
  });

  const [totalSeries, setTotalSeries] = useState({
    current: 0,
    total: 0,
  });

  useEffect(() => {

    const GetUsers = async () => {
      await axios.get(server + 'stats/getuserbymonth', {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true
      }).then((response) => {
        console.log(response.data);
        setTotalUsers({
          current: response.data.usersThisMonth,
          total: response.data.totalUsers,
        });
      })
    }

    const GetCreators = async () => {
      await axios.get(server + 'stats/getcreatorsbymonth', {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true
      }).then((response) => {
        console.log(response.data);
        setTotalCreators({
          current: response.data.creatorsThisMonth,
          total: response.data.totalCreators,
        });
      })
    }

    const GetVideos = async () => {
      await axios.get(server + 'stats/getvideos', {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true
      }).then((response) => {
        console.log(response.data);
        setTotalVideos({
          current: response.data.videosThisMonth,
          total: response.data.totalVideos,
        });

        setTotalMovies({
          current: response.data.moviesThisMonth,
          total: response.data.totalMovies,
        });

        setTotalSeries({
          current: response.data.seriesThisMonth,
          total: response.data.totalSeries,
        });
      })
    }

    GetUsers();
    GetCreators();
    GetVideos();
  }, []);

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
        <Stats_Card title="Total Users" total={totalUsers.total} monthly={totalUsers.current} />
        <Stats_Card
          title="Total Content Creators"
          total={totalCreators.total}
          monthly={totalCreators.current}
        />
        <Stats_Card title="Total Videos" total={totalVideos.total} monthly={totalVideos.current} />
        <Stats_Card title="Total Movies" total={totalMovies.total} monthly={totalMovies.current} />
        <Stats_Card title="Total TV Series" total={totalSeries.total} monthly={totalSeries.current} />
        <Stats_Card title="Total Live Streams" total="4000" monthly="40" />
        <Stats_Card title="Active Subscriptions" total="1000" monthly="10" />
      </SimpleGrid>
    </>
  );
}
