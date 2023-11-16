import { useEffect, useState } from "react";
import { ContentApprovalTable } from "../../components/Admin/Content Approval/ContentApprovalTable";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";
import PrivateRoute from "../PrivateRoute";
import { server } from "../../components/server";
import axios from "axios";

export default function ContentApproval() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [contentData, setContentData] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${server}users/any-videos?status=Pending`,
          {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          }
        );
        // console.log(response.data);
        const modifiedData = await response.data.videos.map((item) => {
          const datePart = item.createdAt.split("T")[0];
          return {
            ...item,
            createdAt: datePart,
          };
        });
        setContentData(modifiedData);
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
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PrivateRoute allowedRole={"1"}>
        <PageHeading text={"Content Approval Management"} />

        <SearchBar
          setItemsPerPage={setItemsPerPage}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          channelData={contentData}
        />

        <ContentApprovalTable
          itemsPerPage={itemsPerPage}
          isLoading={isLoading}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          contentData={contentData}
          setContentData={setContentData}
        />
      </PrivateRoute>
    </>
  );
}
