import { Box, Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ContentApprovalButtons, ToggleButton } from "../SmallReusableComponents/Action";
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

const acceptContent = async (id) => {

  console.log(id.columnId)
  await axios.post(server + `users/content/${id.columnId}/accept`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const rejectContent = async (id) => {
  const columnId = id.id;
  await axios.post(server + `users/content/${columnId}/reject`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const AddModal = ({
  heading,
  isOpen,
  onClose,
  data,
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
            <Box p={5}>
              <HStack
                borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
                p={"0.5rem"}
                justifyContent={"space-around"}
                marginBottom={"1rem"}
              >
                <Text fontWeight={"bold"}>Video Title: </Text>
                <Text>{data.name}</Text>
              </HStack>
              <HStack
                borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
                p={"0.5rem"}
                bg={"whiteAlpha.300"}
                justifyContent={"space-around"}
                marginBottom={"1rem"}
              >
                <Text fontWeight={"bold"}>Uploaded Date: </Text>
                <Text>{data.Uploaded_Date}</Text>
              </HStack>
              <HStack
                borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
                p={"0.5rem"}
                justifyContent={"space-around"}
                marginBottom={"1rem"}
              >
                <Text fontWeight={"bold"}>Creator Name: </Text>
                <Text>{data.Creator_Name}</Text>
              </HStack>
              <HStack
                borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
                p={"0.5rem"}
                bg={"whiteAlpha.300"}
                justifyContent={"space-around"}
                marginBottom={"1rem"}
              >
                <Text fontWeight={"bold"}>Rented Amount: </Text>
                <Text>{data.Rented_Amount}</Text>
              </HStack>
              <HStack
                borderY={"1px solid RGBA(255, 255, 255, 0.16)"}
                p={"0.5rem"}
                justifyContent={"space-around"}
                marginBottom={"1rem"}
              >
                <Text fontWeight={"bold"}>Purchasing Amount: </Text>
                <Text textAlign={"start"}>
                  {data.Purchasing_Amount}
                </Text>
              </HStack>
              <HStack
                p={"0.5rem"}
                justifyContent={"space-around"}
                marginBottom={"1rem"}
              >
                <ContentApprovalButtons />
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const TableTemplate = ({
  data,
  text,
  columns,
  to,
  Availability,
  itemsPerPage,
}) => {
  var num = 0;
  itemsPerPage = itemsPerPage || 10;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data?.slice(startIndex, endIndex);
  const { searchQuery } = useSearchContext();
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const handleNavigation = (to, router) => {
    router.push(to);
  };

  const Actions = (item, id) => {
    console.log(id);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [SelectedButton, setSelectedButton] = useState("");
    const handleButtonClick = (button) => {
      console.log(button);
      setSelectedButton(button);
      onOpen();
    };

    return (
      <>
        <HStack justifyContent={"space-around"}>
          <HiOutlineEye
            onClick={() => handleButtonClick("Content Approval")}
            cursor={"pointer"}
            size={25}
          />
          <>
            <Button onClick={() => acceptContent(id)}>Accept</Button>
            <Button onClick={() => rejectContent(id)}>Reject</Button>
          </>
        </HStack>
        <AddModal
          data={data}
          heading={"Content Approval Management"}
          isOpen={isOpen}
          index={index}
          onClose={onClose}
          selectedButton={SelectedButton}
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
        console.log(response.data)
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
  console.log(contentData)
  const filterData = () => {
    if (searchQuery) {
      return contentData.filter(
        (data) =>
          data.Video_Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.Creator_Name.toLowerCase().includes(searchQuery.toLowerCase())
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
