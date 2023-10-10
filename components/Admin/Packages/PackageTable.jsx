import { HStack } from "@chakra-ui/react";
import { TableTemplate } from "../Tables/Table";
import { ToggleButton } from "../SmallReusableComponents/Action";
import { BiEdit } from "react-icons/bi";
import { useSearchContext } from "../Context api/Context";
import { useEffect, useState } from "react";
import { server } from "../../server";
import axios from "axios";

const PackageTableData = [
  {
    Package_Name: "Basic",
    No_of_Screens_Allowed: 1,
    Video_Quality: "Good",
    Resolution: "480p",
    Devices_Type: "Mobile",
    Price: "$10",
    Status: "Active",
  },
  {
    Package_Name: "Standard",
    No_of_Screens_Allowed: 2,
    Video_Quality: "Better",
    Resolution: "720p",
    Devices_Type: "Mobile-Desktop-TV-Web",
    Price: "$15",
    Status: "Active",
  },
  {
    Package_Name: "Premium",
    No_of_Screens_Allowed: 5,
    Video_Quality: "Best",
    Resolution: "1080p",
    Devices_Type: "Mobile-Desktop-TV-Web",
    Price: "$20",
    Status: "Active",
  },
];

const PackageTableColumn = [
  "Package_Name",
  "No_of_Screens_Allowed",
  "Video_Quality",
  "Resolution",
  "Devices_Type",
  "Price",
  "Status",
];

const PackageActions = () => (
  <HStack justifyContent={"space-around"}>
    <BiEdit cursor={"pointer"} size={25} />
    <ToggleButton />
  </HStack>
);

export default function PackageTable() {
  const { searchQuery, isFilter } = useSearchContext();
  const [packagesData, setPackagesData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}users/packages`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        });
        const modifiedData = await response.data.packages.map((item) => {
          const datePart = item.createdAt.split("T")[0];
          return {
            ...item,
            createdAt: datePart,
          };
        });
        setPackagesData(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  packagesData?.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  const filterData = () => {
    if (searchQuery) {
      return PackageTableData.filter(
        (data) =>
          data.Package_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.Price.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return PackageTableData;
  };
  return (
    <TableTemplate
      data={
        searchQuery?.length > 0 && isFilter ? filterData() : PackageTableData
      }
      columns={PackageTableColumn}
      Actions={PackageActions}
    />
  );
}
