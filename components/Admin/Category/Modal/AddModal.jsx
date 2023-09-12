import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  FormLabel,
  Input,
  Select,
  HStack,
  Text,
} from "@chakra-ui/react";

const AddCategoryModal = () => (
  <VStack align={"start"}>
    <FormLabel>Category Name</FormLabel>
    <Input />
    <FormLabel>Description</FormLabel>
    <Input />
    <Button>Submit</Button>
  </VStack>
);

const AddSubCategoryModal = () => (
  <VStack align={"start"}>
    <FormLabel>Sub Category Name</FormLabel>
    <Input />
    <FormLabel>Select Category</FormLabel>
    <Select>
      <option value="category_1">Category 1</option>
      <option value="category_2">Category 2</option>
      <option value="category_3">Category 3</option>
    </Select>
    <FormLabel>Description</FormLabel>
    <Input />
    <Button colorScheme="teal">Submit</Button>
  </VStack>
);

const AddCoupons = () => (
  <VStack align={"start"} px={10} py={5}>
    <FormLabel>Coupon Name</FormLabel>
    <Input />
    <FormLabel>Discount Value</FormLabel>
    <Input />
    <FormLabel>Description</FormLabel>
    <Input />
    <FormLabel>Maximum Discount Value</FormLabel>
    <Input />
    <FormLabel>Maximum No of Users</FormLabel>
    <Input />
    <Button colorScheme="teal">Submit</Button>
  </VStack>
);

const AddModal = ({
  heading,
  isOpen,
  onClose,
  selectedButton,
  CustomModal,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={"white"} bg={"#232323"} minW={["auto", "700px"]}>
          <ModalHeader alignItems={["center", "flex-start"]} mt={[4, 8]}>
            {heading}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedButton == "Add Category" ? (
              <AddCategoryModal />
            ) : selectedButton == "Add Sub Category" ? (
              <AddSubCategoryModal />
            ) : selectedButton == "Content Approval" ? (
              <CustomModal />
            ) : selectedButton == "Add Coupons" ? (
              <AddCoupons />
            ) : null}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { AddModal };
