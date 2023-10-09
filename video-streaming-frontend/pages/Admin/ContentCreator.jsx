import {
  Button,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { HeaderWithButtons } from "../../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";
import ContentCreatorTable from "../../components/Admin/Tables/ContentCreatorTableData";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const ShowAddUserModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={"white"} bg={"#232323"} minW={["auto", "700px"]}>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              alignItems={"flex-start"}
              direction={{ base: "column", md: "row" }}
              p={[5, 20]}
            >
              <Heading fontSize={"2rem"} alignSelf={"center"}>
                Add User
              </Heading>
              <FormLabel>User Name</FormLabel>
              <Input
                mb={"1rem"}
                border={"2px solid black"}
                placeholder="Abheesh"
              />
              <FormLabel>Gender</FormLabel>
              <Select mb={"1rem"} border={"2px solid black"}>
                <option
                  style={{ background: "#232323" }}
                  select-option
                  selected
                >
                  Male
                </option>
                <option style={{ background: "#232323" }}> Female</option>
                <option style={{ background: "#232323" }}>Other</option>
              </Select>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                mb={"1rem"}
                border={"2px solid black"}
                placeholder="876587589"
              />
              <Button alignSelf={"center"} mr={3} onClick={onClose}>
                Submit
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const HeaderButtons = ({ onOpen }) => {
  return (
    <Stack
      justifyContent={["center", "space-between"]}
      direction={["column", "row"]}
      align={["center", "center"]}
      my={[0, 4]}
      mb={8}
    >
      <PageHeading text="Content Creator Management" />
      <Stack direction={["column", "row"]} align={["center", "flex-end"]}>
        <Button size={{ base: "sm", md: "md" }} variant={"outline"}>
          Export CSV
        </Button>
        <Button
          onClick={onOpen}
          size={{ base: "sm", md: "md" }}
          variant={"solid"}
        >
          Add User
        </Button>
      </Stack>
    </Stack>
  );
};

export default function ContentCreatorManagement() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HeaderButtons onOpen={onOpen} />
      <ShowAddUserModal isOpen={isOpen} onClose={onClose} />
      <SearchBar />
      <ContentCreatorTable />
    </>
  );
}
