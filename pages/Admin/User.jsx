import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { HeaderWithButtons } from "../../components/Admin/SmallReusableComponents/HeaderWithButtons";
import { SearchBar } from "../../components/Admin/SmallReusableComponents/SearchBar";
import { userColumns } from "../../components/Admin/Tables/UserTableData";
import {
  Actions,
  ToggleButton,
} from "../../components/Admin/SmallReusableComponents/Action";
import { useSearchContext } from "../../components/Admin/Context api/Context";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
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
// import "./Style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../components/server";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "./Table.css";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/router";
import { HiOutlineEye } from "react-icons/hi";
import { toast } from "react-toastify";

const deleteUser = (id, fetchData) => {
  axios
    .delete(server + `users/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      fetchData();
    })
    .catch((err) => {
      console.error(err);
    });
};

const changeActiveStatus = (id) => {
  axios
    .put(server + `users/${id}/active`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      toast.success(`Status Changed to ${res.data.user.status}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

const UserExportCsv = async () => {
  const response = await axios
    .get(server + `users/export-users-csv`, {
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
      a.download = "users.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((err) => {
      console.error(err);
    });
};

const TableTemplate = ({ data, text, columns, itemsPerPage, fetchData }) => {
  var num = 0;
  itemsPerPage = itemsPerPage || 10;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data?.slice(startIndex, endIndex);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleNavigation = (to, router) => {
    router.push(to);
  };

  const Actions = ({ item, fetchData }) => {
    const columnId = item.id;
    const router = useRouter();
    return (
      <HStack align={"center"} justifyContent={"space-between"}>
        <Box onClick={() => handleNavigation("/Admin/UserDetails", router)}>
          <HiOutlineEye cursor={"pointer"} size={25} />
        </Box>
        <BiEdit cursor={"pointer"} size={25} />
        <AiOutlineDelete
          onClick={() => deleteUser(columnId, fetchData)}
          cursor={"pointer"}
          size={25}
        />
        <ToggleButton
          columnId={columnId}
          changeStatus={changeActiveStatus}
          data={item}
          cursor={"pointer"}
        />
      </HStack>
    );
  };

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  return (
    <>
      <TableContainer
        mt={"1rem"}
        borderRadius={"10px"}
        borderWidth={"2px"}
        borderColor={"blackAlpha.600"}
        bg={"#232323"}
        p={4}
      >
        <Table>
          {text ? <TableCaption>{text}</TableCaption> : null}
          <Thead bg={"#181818"}>
            <Tr>
              {columns.map((c) => (
                <Th
                  textAlign={"center"}
                  maxWidth={"10rem"}
                  px={"10px"}
                  borderRight={"1px"}
                  borderColor={"blackAlpha.600"}
                  color="white"
                  key={c}
                >
                  {c}
                </Th>
              ))}
              {Actions ? (
                <Th
                  textAlign={"center"}
                  borderRight={"1px"}
                  borderColor={"blackAlpha.600"}
                  color="white"
                >
                  Actions
                </Th>
              ) : null}
            </Tr>
          </Thead>

          <Tbody>
            {slicedData?.map((item, index) => {
              num++;

              return (
                <Tr
                  style={
                    num % 2 === 0
                      ? { background: "#232323" }
                      : { background: "#323232" }
                  }
                  key={index}
                >
                  {columns.map((column) => {
                    return (
                      <Td
                        textAlign={"center"}
                        borderRight={"1px"}
                        borderBottom={0}
                        borderColor={"blackAlpha.600"}
                        key={column}
                      >
                        {item[column]}
                      </Td>
                    );
                  })}
                  {Actions ? (
                    <Td
                      textAlign={"center"}
                      borderBottom={0}
                      borderRight={"1px"}
                      borderColor={"blackAlpha.600"}
                    >
                      <Actions
                        item={item}
                        columnId={item.id}
                        fetchData={fetchData}
                      />
                    </Td>
                  ) : null}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {itemsPerPage >= 10 ? (
        <>
          <ReactPaginate
            previousLabel={
              currentPage === 0 ? (
                <Button
                  bg={"#232323"}
                  leftIcon={<ChevronLeftIcon />}
                  onClick={() => handlePageClick({ selected: currentPage - 1 })}
                  isDisabled
                ></Button>
              ) : (
                <Button
                  bg={"#232323"}
                  _hover={{ bg: "#323232" }}
                  leftIcon={<ChevronLeftIcon />}
                  onClick={() => handlePageClick({ selected: currentPage - 1 })}
                ></Button>
              )
            }
            nextLabel={
              currentPage === totalPages - 1 ? (
                <Button
                  bg={"#232323"}
                  rightIcon={<ChevronRightIcon />}
                  onClick={() => handlePageClick({ selected: currentPage + 1 })}
                  isDisabled
                ></Button>
              ) : (
                <Button
                  bg={"#232323"}
                  _hover={{ bg: "#323232" }}
                  rightIcon={<ChevronRightIcon />}
                  onClick={() => handlePageClick({ selected: currentPage + 1 })}
                ></Button>
              )
            }
            breakLabel={"..."}
            pageCount={Math.ceil(data?.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </>
      ) : null}
    </>
  );
};

const ShowAddUserModal = ({ isOpen, onClose, fetchData }) => {
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    number: "",
  });

  const AddNewUser = async (newUserData) => {
    try {
      const { name, email, password } = newUserData;
      const response = await axios.post(
        `${server}users/add-new-user`,
        { name, email, password },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      fetchData();
      onClose();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
                onChange={(e) =>
                  setNewUserData({ ...newUserData, name: e.target.value })
                }
                mb={"1rem"}
                border={"2px solid black"}
                placeholder="John"
              />
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) =>
                  setNewUserData({ ...newUserData, email: e.target.value })
                }
                mb={"1rem"}
                border={"2px solid black"}
                placeholder="john@gmail.com"
              />
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) =>
                  setNewUserData({ ...newUserData, password: e.target.value })
                }
                mb={"1rem"}
                border={"2px solid black"}
                placeholder="*******"
              />
              <FormLabel>Gender</FormLabel>
              <Select
                onChange={(e) =>
                  setNewUserData({ ...newUserData, gender: e.target.value })
                }
                mb={"1rem"}
                border={"2px solid black"}
              >
                <option
                  style={{ background: "#232323" }}
                  // select-option
                  selected
                >
                  Male
                </option>
                <option style={{ background: "#232323" }}> Female</option>
                <option style={{ background: "#232323" }}>Other</option>
              </Select>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                onChange={(e) =>
                  setNewUserData({ ...newUserData, number: e.target.value })
                }
                mb={"1rem"}
                border={"2px solid black"}
                placeholder="876587589"
                type="number"
              />
              <Button
                alignSelf={"center"}
                mr={3}
                onClick={() => AddNewUser(newUserData)}
              >
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
      <PageHeading text="User Management" />
      <Stack direction={["column", "row"]} align={["center", "flex-end"]}>
        <Button
          onClick={UserExportCsv}
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
          Add User
        </Button>
      </Stack>
    </Stack>
  );
};
export default function UserManagement() {
  const { searchQuery, isFilter } = useSearchContext();
  console.log("query: ", searchQuery);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userData, setUserData] = useState([]);
  const user = useSelector((state) => state.user);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${server}users/`, {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      });
      setUserData(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  userData.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  const filterData = () => {
    if (searchQuery) {
      return userData.filter(
        (data) =>
          data?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data?.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return userData;
  };

  return (
    <>
      <HeaderButtons onOpen={onOpen} />
      <SearchBar />
      <ShowAddUserModal
        isOpen={isOpen}
        onClose={onClose}
        fetchData={fetchData}
      />
      <TableTemplate
        data={searchQuery?.length > 1 && isFilter ? filterData() : userData}
        columns={userColumns}
        to={"/Admin/UserDetails"}
        fetchData={fetchData}
      />
    </>
  );
}
