import CouponTable from "../../components/Admin/Coupons/CouponTable";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";
import {
  Button,
  HStack,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { server } from "../../components/server";
import PrivateRoute from "../PrivateRoute";

const AddCategoryModal = ({
  isOpen,
  onClose,
  couponData,
  setCoupons,
  fetchData,
}) => {
  const [couponsData, setCouponsData] = useState({
    name: "",
    value: 0,
    desc: "",
    max_value: 0,
    max_redemptions: 0,
  });

  const [isLoading, setLoading] = useState();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { name, value, desc, max_value, max_redemptions } = couponsData;
      const res = await axios.post(
        `${server}users/add-new-coupon`,
        { name, value, desc, max_value, max_redemptions },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      setCoupons((prevCoupons) => [...prevCoupons, res.data]);
      fetchData();
      onClose();
    } catch (error) {
      console.error("Error adding coupon:", error);
    } finally {
      setLoading(false);
      // Reset the form fields
      setCouponsData({
        name: "",
        value: 0,
        desc: "",
        max_value: 0,
        max_redemptions: 0,
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={"white"} bg={"#232323"} minW={["auto", "700px"]}>
          <ModalHeader alignItems={["center", "flex-start"]} mt={[4, 8]}>
            Add Coupons
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align={"start"} px={10} py={5}>
              <FormLabel>Coupon Name</FormLabel>
              <Input
                value={couponsData.name}
                onChange={(e) =>
                  setCouponsData({ ...couponsData, name: e.target.value })
                }
              />

              <FormLabel>Discount Value</FormLabel>
              <Input
                value={couponsData.value}
                type="number"
                onChange={(e) =>
                  setCouponsData({ ...couponsData, value: e.target.value })
                }
              />

              <FormLabel>Description</FormLabel>
              <Input
                value={couponsData.desc}
                onChange={(e) =>
                  setCouponsData({ ...couponsData, desc: e.target.value })
                }
              />

              <FormLabel>Maximum Discount Value</FormLabel>
              <Input
                value={couponsData.max_value}
                type="number"
                onChange={(e) =>
                  setCouponsData({ ...couponsData, max_value: e.target.value })
                }
              />

              <FormLabel>Maximum No of Users</FormLabel>
              <Input
                value={couponsData.max_redemptions}
                type="number"
                onChange={(e) =>
                  setCouponsData({
                    ...couponsData,
                    max_redemptions: e.target.value,
                  })
                }
              />
              <Button onClick={handleSubmit} isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const HeaderModalButtons = ({ setCoupons, heading, couponData, fetchData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      direction={["column", "row"]}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <PageHeading text={heading} />

      <Button onClick={onOpen} mb={[4, 0]}>
        Add Category
      </Button>

      <AddCategoryModal
        isOpen={isOpen}
        onClose={onClose}
        setCoupons={setCoupons}
        couponData={couponData}
        fetchData={fetchData}
      />
    </Stack>
  );
};

export default function Coupons() {
  const [couponData, setCoupons] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const fetchData = async () => {
    try {
      const response = await axios.get(`${server}users/get-coupons`, {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      });
      const modifiedData = response.data.coupons.map((item) => {
        const datePart = item.createdAt.split("T")[0];
        return {
          ...item,
          createdAt: datePart,
        };
      });
      setCoupons(modifiedData);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PrivateRoute allowedRole={"1"}>
        <HeaderModalButtons
          heading={"Coupons Management"}
          button1={"Add Coupons"}
          setCoupons={setCoupons}
          couponData={couponData}
          fetchData={fetchData}
        />

        <SearchBar
          setItemsPerPage={setItemsPerPage}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          channelData={couponData}
        />

        <CouponTable
          couponData={couponData}
          setCoupons={setCoupons}
          fetchData={fetchData}
          itemsPerPage={itemsPerPage}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </PrivateRoute>
    </>
  );
}
