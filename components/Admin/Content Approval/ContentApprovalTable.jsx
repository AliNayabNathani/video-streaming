import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  ContentApprovalButtons,
  ToggleButton,
} from "../SmallReusableComponents/Action";
import { useSearchContext } from "../Context api/Context";
import axios from "axios";
import { server } from "../../server";
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

const AcceptContent = async (id) => {
  try {
    const response = await axios.post(`${server}users/content/${id}/accept`, {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    console.log(response);
    onClose();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const RejectContent = async (id) => {
  try {
    const response = await axios.post(`${server}users/content/${id}/reject`, {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    console.log(response);
    onClose();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const TableTemplate = ({ data, text, columns, itemsPerPage }) => {
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

  const Actions = ({ item }) => {
    const columnId = item.id;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <HStack justifyContent={"space-around"}>
          <HiOutlineEye onClick={onOpen} cursor={"pointer"} size={25} />
          <Button onClick={() => AcceptContent(columnId)}>Accept</Button>
          <Button onClick={() => RejectContent(columnId)}>Reject</Button>
        </HStack>
        <ContentAprrovalModal
          item={item}
          heading={"Content Approval Management"}
          isOpen={isOpen}
          onClose={onClose}
        />
      </>
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
                      {" "}
                      <Actions item={item} columnId={item.id} />{" "}
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

const ContentAprrovalModal = ({ isOpen, onClose, item }) => (
  <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color={"white"} bg={"#232323"} minW={["auto", "700px"]}>
        <ModalHeader alignItems={["center", "flex-start"]} mt={[4, 8]}>
          Content Approval Management
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p={5}>
            <HStack
              borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
              p={"0.5rem"}
              justifyContent={"space-around"}
              marginBottom={"1rem"}
            >
              "", "", "", "", "",
              <Text fontWeight={"bold"}>Video Title: </Text>
              <Text>{item.name}</Text>
            </HStack>
            <HStack
              borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
              p={"0.5rem"}
              bg={"whiteAlpha.300"}
              justifyContent={"space-around"}
              marginBottom={"1rem"}
            >
              <Text fontWeight={"bold"}>Uploaded Date: </Text>
              <Text>{item.createdAt}</Text>
            </HStack>
            <HStack
              borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
              p={"0.5rem"}
              justifyContent={"space-around"}
              marginBottom={"1rem"}
            >
              <Text fontWeight={"bold"}>Creator Name: </Text>
              <Text>{item.creator_name}</Text>
            </HStack>
            <HStack
              borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
              p={"0.5rem"}
              bg={"whiteAlpha.300"}
              justifyContent={"space-around"}
              marginBottom={"1rem"}
            >
              <Text fontWeight={"bold"}>Rented Amount: </Text>
              <Text>{item.rented_amount}</Text>
            </HStack>
            <HStack
              borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
              p={"0.5rem"}
              justifyContent={"space-around"}
              marginBottom={"1rem"}
            >
              <Text fontWeight={"bold"}>Purchasing Amount: </Text>
              <Text textAlign={"start"}>{item.purchasing_amount}</Text>
            </HStack>
            <HStack
              p={"0.5rem"}
              justifyContent={"space-around"}
              marginBottom={"1rem"}
            >
              <Button onClick={() => AcceptContent(item.id)}>Accept</Button>
              <Button onClick={() => RejectContent(item.id)}>Reject</Button>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
);

const ContentApprovalTableColumns = [
  "name",
  "creator_name",
  "rented_amount",
  "purchasing_amount",
  "createdAt",
];

const ContentApprovalTable = () => {
  const { searchQuery, isFilter } = useSearchContext();
  const [contentData, setContentData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}users/content-approval`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        });
        console.log(response.data);
        const modifiedData = await response.data.videos.map((item) => {
          const datePart = item.createdAt.split("T")[0];
          return {
            ...item,
            createdAt: datePart,
          };
        });
        setContentData(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  contentData?.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  console.log(contentData);
  const filterData = () => {
    if (searchQuery) {
      return contentData.filter(
        (data) =>
          data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.creator_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return contentData;
  };
  return (
    <TableTemplate
      data={searchQuery?.length > 0 && isFilter ? filterData() : contentData}
      columns={ContentApprovalTableColumns}
    />
  );
};

export { ContentApprovalTable };
