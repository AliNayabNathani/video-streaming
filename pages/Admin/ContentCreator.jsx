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
import axios from "axios";
import { server } from "../../components/server";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowAddUserModal = ({ isOpen, onClose }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    gender: "",
    number: "",
  });

  const handleSubmit = async () => {
    const { name, gender, number } = userInfo;
    const res = await axios
      .post(
        `${server}users/add-content-creator`,
        { name, gender, mobile_number: number },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success(`${userInfo.name} Added to Content Creator`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    onClose();
  };

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
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />
              <FormLabel>Gender</FormLabel>
              <Select
                mb={"1rem"}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, gender: e.target.value })
                }
                border={"2px solid black"}
              >
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
                type="number"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, number: e.target.value })
                }
              />
              <Button alignSelf={"center"} mr={3} onClick={handleSubmit}>
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
  const CreatorExportCsv = async () => {
    const response = await axios
      .get(server + `users/content-creator-csv`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        const blob = new Blob([res.data], { type: "text/csv" });
        console.log(blob);
        // Create a temporary URL and initiate the download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "creators.csv";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };
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
        <Button
          onClick={CreatorExportCsv}
          size={{ base: "sm", md: "md" }}
          variant={"outline"}
        >
          Export CSV
        </Button>
        <Button
          onClick={onOpen}
          size={{ base: "sm", md: "md" }}
          variant={"solid"}
        >
          Add Content Creator
        </Button>
      </Stack>
    </Stack>
  );
};

export default function ContentCreatorManagement() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <PrivateRoute allowedRole={"1"}>
        <HeaderButtons onOpen={onOpen} />
        <ShowAddUserModal isOpen={isOpen} onClose={onClose} />
        <SearchBar />
        <ContentCreatorTable />
      </PrivateRoute>
    </>
  );
}
