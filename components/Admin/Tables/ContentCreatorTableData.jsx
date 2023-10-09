import { useEffect, useState } from "react";
import { useSearchContext } from "../Context api/Context";
import { Actions } from "../SmallReusableComponents/Action";
import { TableTemplate } from "./Table";
import axios from "axios";
import { server } from "../../server";

// const ContentCreatorData = [
//   {
//     Creator_ID: "0012",
//     Name: "Clara",
//     Gender: "Female",
//     Total_Videos_Published: "30",
//     Subscribed_Users: "200",
//     Status: "Active",
//   },
//   {
//     Creator_ID: "0014",
//     Name: "Matthew",
//     Gender: "Male",
//     Total_Videos_Published: "25",
//     Subscribed_Users: "150",
//     Status: "Suspended",
//   },
//   {
//     Creator_ID: "0018",
//     Name: "Sophia",
//     Gender: "Female",
//     Total_Videos_Published: "40",
//     Subscribed_Users: "180",
//     Status: "Active",
//   },
//   {
//     Creator_ID: "0022",
//     Name: "William",
//     Gender: "Male",
//     Total_Videos_Published: "22",
//     Subscribed_Users: "120",
//     Status: "Suspended",
//   },
//   {
//     Creator_ID: "0026",
//     Name: "Oliver",
//     Gender: "Male",
//     Total_Videos_Published: "18",
//     Subscribed_Users: "90",
//     Status: "Active",
//   },
//   {
//     Creator_ID: "0030",
//     Name: "Emma",
//     Gender: "Female",
//     Total_Videos_Published: "35",
//     Subscribed_Users: "210",
//     Status: "Suspended",
//   },
//   {
//     Creator_ID: "0034",
//     Name: "Liam",
//     Gender: "Male",
//     Total_Videos_Published: "28",
//     Subscribed_Users: "160",
//     Status: "Active",
//   },
//   {
//     Creator_ID: "0038",
//     Name: "Ava",
//     Gender: "Female",
//     Total_Videos_Published: "45",
//     Subscribed_Users: "220",
//     Status: "Suspended",
//   },
//   {
//     Creator_ID: "0042",
//     Name: "Noah",
//     Gender: "Male",
//     Total_Videos_Published: "20",
//     Subscribed_Users: "110",
//     Status: "Active",
//   },
//   {
//     Creator_ID: "0046",
//     Name: "Sophia",
//     Gender: "Female",
//     Total_Videos_Published: "32",
//     Subscribed_Users: "190",
//     Status: "Suspended",
//   },
// ];

const ContentCreatorColumn = [
  "id",
  "name",
  "gender",
  "total_videos",
  "subscribers",
  "status",
];

export default function ContentCreatorTable() {
  const { searchQuery, isFilter } = useSearchContext();
  const [contentCreatorData, setContentCreatorData] = useState();
  console.log(contentCreatorData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}users/get-content-creator`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        });
        console.log(response);
        setContentCreatorData(response.data.creators);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const filterData = () => {
    if (searchQuery) {
      return contentCreatorData.filter(
        (data) =>
          data.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.Creator_ID.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return contentCreatorData;
  };
  return (
    <TableTemplate
      data={
        searchQuery?.length > 0 && isFilter ? filterData() : contentCreatorData
      }
      columns={ContentCreatorColumn}
      Actions={Actions}
      to="/Admin/ContentCreatorDetails"
    />
  );
}
