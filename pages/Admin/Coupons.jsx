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
import { useState } from "react";
import axios from "axios";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import { server } from "../../components/server";

const AddCategoryModal = ({ isOpen, onClose }) => {
  const [couponsData, setCouponsData] = useState({
    name: "",
    value: 0,
    desc: "",
    max_value: 0,
    max_redemptions: 0,
  });

  const handleSubmit = () => {
    const { name, value, desc, max_value, max_redemptions } = couponsData;
    const res = axios
      .post(
        `${server}users/add-new-coupon`,
        { name, value, desc, max_value, max_redemptions },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(res);
    onClose();
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
              <Button onClick={handleSubmit}>Submit</Button>
            </VStack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const HeaderModalButtons = ({ categoryData, setCategoryData, heading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedButton, setSelectedButton] = useState("");

  return (
    <HStack justifyContent="space-between">
      <PageHeading text={heading} />
      <Stack direction={{ base: "column", md: "row" }}>
        <Button onClick={onOpen}>Add Category</Button>
      </Stack>
      {/* Pass selectedButton to the AddModal */}
      <AddCategoryModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default function Coupons() {
  return (
    <>
      <HeaderModalButtons
        heading={"Coupons Management"}
        button1={"Add Coupons"}
      />
      <SearchBar />
      <CouponTable />
    </>
  );
}
