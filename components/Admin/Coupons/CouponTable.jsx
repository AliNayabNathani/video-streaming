import { TableTemplate } from "../Tables/Table";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { HStack } from "@chakra-ui/react";
import { ToggleButton } from "../SmallReusableComponents/Action";
import { useSearchContext } from "../Context api/Context";
import { useEffect, useState } from "react";
import { server } from "../../server";
import axios from "axios";

const CouponTableColumn = ["name", "createdAt", "value", "Expiry_Date"];

const CouponAction = () => (
  <HStack justifyContent={"space-around"}>
    <BiEdit cursor={"pointer"} size={25} />
    <AiOutlineDelete cursor={"pointer"} size={25} />
  </HStack>
);

const CouponAvailability = () => <ToggleButton />;
export default function CouponTable() {
  const { searchQuery, isFilter } = useSearchContext();
  const [couponData, setContentData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}users/get-coupons`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        });
        const modifiedData = await response.data.coupons.map((item) => {
          const datePart = item.createdAt.split("T")[0];
          return {
            ...item,
            createdAt: datePart,
          };
        });
        console.log(response.data.coupons);
        setContentData(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  couponData?.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  console.log(couponData);
  const filterData = () => {
    if (searchQuery) {
      return couponData.filter(
        (data) =>
          data.Coupon_ID.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.Coupon_Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return couponData;
  };
  return (
    <TableTemplate
      data={searchQuery?.length > 0 && isFilter ? filterData() : couponData}
      columns={CouponTableColumn}
      Actions={CouponAction}
      Availability={CouponAvailability}
    />
  );
}
