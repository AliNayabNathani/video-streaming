import { useEffect, useState } from "react";
import { PageHeading } from "../../../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../../../components/Admin/SmallReusableComponents/SearchBar";
import VideoTable from "../../../components/Admin/Video/VideoTable";
import axios from "axios";
import { server } from "../../../components/server";

export default function Video() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [videoData, setVideoData] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${server}users/any-videos?status=Active&status=InActive`,
          {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          }
        );

        const modifiedData = await response.data.videos.map((item) => {
          const datePart = item.createdAt.split("T")[0];
          return {
            ...item,
            createdAt: datePart,
          };
        });
        modifiedData.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        // console.log("MOD", modifiedData);
        setVideoData(modifiedData);

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

        setisLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setisLoading(false);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PageHeading text={"Video Management"} />
      <SearchBar
        setItemsPerPage={setItemsPerPage}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        channelData={videoData}
      />
      <VideoTable
        itemsPerPage={itemsPerPage}
        isLoading={isLoading}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        videoData={videoData}
        setVideoData={setVideoData}
      />
    </>
  );
}
