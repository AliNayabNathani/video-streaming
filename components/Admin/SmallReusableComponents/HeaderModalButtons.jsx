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
import { PageHeading } from "./Heading";
import { AddModal } from "../Category/Modal/AddModal";
import axios from "axios";
import { server } from "../../server";

const AddCategoryModal = ({
  categoryData,
  setCategoryData,
  isOpen,
  onClose,
}) => {
  const [tempName, setTempName] = useState();

  const handleSubmit = () => {
    const res = axios
      .post(
        `${server}users/add-category`,
        { name: tempName },
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
            Add Category
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align={"start"}>
              <FormLabel>Category Name</FormLabel>
              <Input onChange={(e) => setTempName(e.target.value)} />
              <FormLabel>Description</FormLabel>
              <Input />
              <Button onClick={handleSubmit}>Submit</Button>
            </VStack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const AddSubCategoryModal = ({
  categoryData,
  setCategoryData,
  isOpen,
  onClose,
}) => {
  const [subCatData, setSubCatData] = useState({
    name: "",
    category_id: "",
    desc: "",
  });
  const handleSubmit = () => {
    const { name, category_id, desc } = subCatData;
    const res = axios
      .post(
        `${server}users/add-sub-category`,
        { name, category_id, desc },
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
            Add Sub Category
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align={"start"}>
              <FormLabel>Sub Category Name</FormLabel>
              <Input
                onChange={(e) =>
                  setSubCatData({ ...subCatData, name: e.target.value })
                }
              />
              <FormLabel>Select Category</FormLabel>
              <Select
                onChange={(e) =>
                  setSubCatData({ ...subCatData, category_id: e.target.value })
                }
              >
                {categoryData.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
              <FormLabel>Description</FormLabel>
              <Input
                onChange={(e) =>
                  setSubCatData({ ...subCatData, desc: e.target.value })
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

  const handleButtonClick = (text) => {
    setSelectedButton(text);
    onOpen();
  };

  return (
    <HStack justifyContent="space-between">
      <PageHeading text={heading} />
      <Stack direction={{ base: "column", md: "row" }}>
        <Button onClick={() => handleButtonClick("category")}>
          Add Category
        </Button>

        <Button onClick={() => handleButtonClick("sub category")}>
          Add Sub Category
        </Button>
      </Stack>
      {/* Pass selectedButton to the AddModal */}
      {selectedButton === "category" ? (
        <AddCategoryModal isOpen={isOpen} onClose={onClose} />
      ) : (
        <AddSubCategoryModal
          categoryData={categoryData}
          setCategoryData={setCategoryData}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </HStack>
  );
};

export { HeaderModalButtons };
