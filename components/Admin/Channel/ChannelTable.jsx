import { HStack } from "@chakra-ui/react";
import { TableTemplate } from "../Tables/Table";
import { HiOutlineEye } from "react-icons/hi";
import {
  ToggleButton,
  handleNavigation,
} from "../SmallReusableComponents/Action";
import { useRouter } from "next/router";
import { useSearchContext } from "../Context api/Context";
import { useEffect, useState } from "react";
import { server } from "../../server";
import axios from "axios";

const ChannelData = [
  {
    Channel_ID: "1230",
    Channel_Title: "Food Vlog",
    Creator_Name: "John Dee",
    Created_Date: "11/22/2022",
  },
  {
    Channel_ID: "1231",
    Channel_Title: "Travel Adventures",
    Creator_Name: "Jane Smith",
    Created_Date: "10/15/2022",
  },
  {
    Channel_ID: "1232",
    Channel_Title: "Gaming Fun",
    Creator_Name: "Mike Johnson",
    Created_Date: "09/03/2022",
  },
  {
    Channel_ID: "1233",
    Channel_Title: "Cooking Delights",
    Creator_Name: "Emily Williams",
    Created_Date: "08/27/2022",
  },
  {
    Channel_ID: "1234",
    Channel_Title: "Fitness Journey",
    Creator_Name: "Alex Turner",
    Created_Date: "07/11/2022",
  },
  {
    Channel_ID: "1235",
    Channel_Title: "Tech Talk",
    Creator_Name: "David Brown",
    Created_Date: "06/08/2022",
  },
  {
    Channel_ID: "1236",
    Channel_Title: "Artistic Creations",
    Creator_Name: "Sophia Davis",
    Created_Date: "05/02/2022",
  },
  {
    Channel_ID: "1237",
    Channel_Title: "Fashion Updates",
    Creator_Name: "Olivia Lee",
    Created_Date: "04/18/2022",
  },
  {
    Channel_ID: "1238",
    Channel_Title: "Comedy Central",
    Creator_Name: "William Clark",
    Created_Date: "03/25/2022",
  },
  {
    Channel_ID: "1239",
    Channel_Title: "Music Vibes",
    Creator_Name: "Ella Martinez",
    Created_Date: "02/07/2022",
  },
];

const ChannelColumn = ["id", "name", "creator_name", "createdAt"];

const ChannelActions = ({ to }) => {
  const router = useRouter();

  const handleNavigation = (to) => {
    router.push(to);
  };
  return (
    <HStack justifyContent={"space-around"}>
      <HiOutlineEye
        onClick={() => handleNavigation(to)}
        cursor={"pointer"}
        size={25}
      />
      <ToggleButton cursor={"pointer"} />
    </HStack>
  );
};
export default function ChannelTable() {
  const { searchQuery, isFilter } = useSearchContext();
  const [channelData, setChannelData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}users/channels`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        });
        const modifiedData = await response.data.channels.map((item) => {
          const datePart = item.createdAt.split("T")[0];
          return {
            ...item,
            createdAt: datePart,
          };
        });
        setChannelData(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  channelData?.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  console.log(channelData);
  const filterData = () => {
    if (searchQuery) {
      return channelData.filter(
        (data) =>
          data.Channel_ID.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.Channel_Title.toLowerCase().includes(
            searchQuery.toLowerCase()
          ) ||
          data.Creator_Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return channelData;
  };
  return (
    <TableTemplate
      data={searchQuery?.length > 0 && isFilter ? filterData() : channelData}
      columns={ChannelColumn}
      Actions={ChannelActions}
      to={"/Admin/ChannelDetails"}
    />
  );
}
