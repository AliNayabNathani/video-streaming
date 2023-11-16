import { useEffect, useState } from "react";
import ChannelTable from "../../../components/Admin/Channel/ChannelTable";
import { PageHeading } from "../../../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../../../components/Admin/SmallReusableComponents/SearchBar";
import { server } from "../../../components/server";
import axios from "axios";

export default function Channel() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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

        if (modifiedData && modifiedData.length > 0) {
          const minDate = modifiedData.reduce((min, data) => {
            const currentDate = new Date(data.createdAt);
            return currentDate < min ? currentDate : min;
          }, new Date());

          setStartDate(minDate);
          setEndDate(new Date());
        } else {
          setStartDate(new Date());
          setEndDate(new Date());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PageHeading text={"Channel Management"} />
      <SearchBar
        setItemsPerPage={setItemsPerPage}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        channelData={channelData}
      />
      <ChannelTable
        itemsPerPage={itemsPerPage}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        channelData={channelData}
        setChannelData={setChannelData}
      />
    </>
  );
}
