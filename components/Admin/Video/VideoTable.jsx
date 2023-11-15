import { ToggleButton } from "../SmallReusableComponents/Action";
import { useSearchContext } from "../Context api/Context";
import axios from "axios";
import { useEffect, useState } from "react";
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
  Button,
  Box,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styles from "./Table.module.css";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/router";
import { HiOutlineEye } from "react-icons/hi";
import { toast } from "react-toastify";
import Loader from "../../Loader";

const deleteVideo = (id, setVideoData) => {
  axios
    .delete(server + `users/video/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      toast.success(`Deleted Successfully!`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });

      setVideoData((prevData) => prevData.filter((video) => video.id !== id));
    })
    .catch((err) => {
      console.error(err);
      toast.error(err.msg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
    });
};

const changeActiveStatus = (id) => {
  axios
    .put(server + `users/${id}/active-video`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      toast.success(`Status Changed to ${res.data.video.status}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
    })
    .catch((err) => {
      toast.error(err.msg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
    });
};

const TableTemplate = ({ data, text, columns, itemsPerPage, setVideoData }) => {
  console.log("THIS IS ITEM PER PAGE", itemsPerPage);
  var num = 0;
  itemsPerPage = itemsPerPage;
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

  const Actions = ({ item }) => {
    const columnId = item.id;
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    const handleDelete = () => {
      setIsOpen(true);
    };

    const handleConfirmDelete = () => {
      deleteVideo(columnId, setVideoData);
      onClose();
    };

    return (
      <>
        <HStack align={"center"} justifyContent={"space-between"}>
          <Box
            onClick={() => handleNavigation(`/Admin/Video/${columnId}`, router)}
          >
            <HiOutlineEye cursor={"pointer"} size={25} />
          </Box>
          <AiOutlineDelete
            cursor={"pointer"}
            size={25}
            onClick={handleDelete}
          />
          <ToggleButton
            columnId={columnId}
            changeStatus={changeActiveStatus}
            data={item}
            cursor={"pointer"}
          />
        </HStack>

        <AlertDialog isOpen={isOpen} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Confirm Delete
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to delete this video?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button colorScheme="red" onClick={handleConfirmDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
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
                  _hover={{ bg: "#323232" }}
                  leftIcon={<ChevronLeftIcon boxSize={6} />}
                  onClick={() => handlePageClick({ selected: currentPage - 1 })}
                  isDisabled
                ></Button>
              ) : (
                <Button
                  bg={"#232323"}
                  leftIcon={<ChevronLeftIcon />}
                  onClick={() => handlePageClick({ selected: currentPage - 1 })}
                ></Button>
              )
            }
            nextLabel={
              currentPage === totalPages - 1 ? (
                <Button
                  bg={"#232323"}
                  _hover={{ bg: "#323232" }}
                  rightIcon={<ChevronRightIcon boxSize={4} />}
                  onClick={() => handlePageClick({ selected: currentPage + 1 })}
                  isDisabled
                ></Button>
              ) : (
                <Button
                  bg={"#232323"}
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
            containerClassName={styles.pagination}
            activeClassName={styles.active}
          />
        </>
      ) : null}
    </>
  );
};

const VideoTableColumns = [
  "id",
  "name",
  "views",
  "creator_name",
  "rented_amount",
  "purchasing_amount",
  "createdAt",
];

export default function VideoTable({ itemsPerPage }) {
  const { searchQuery, isFilter } = useSearchContext();
  const [videoData, setVideoData] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${server}users/any-videos?status=Active&status=InActive`,
          {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          }
        );

        const modifiedData = await response.data.videos.map((item) => {
          const datePart = item.createdAt.split("T")[0];
          return {
            ...item,
            createdAt: datePart,
          };
        });
        modifiedData.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        setVideoData(modifiedData);
        // console.log("VIDEO DATA", modifiedData);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setisLoading(false);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, []);

  // videoData?.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  // console.log(videoData);
  const filterData = () => {
    if (searchQuery) {
      // console.log("SE", searchQuery);
      return videoData.filter((data) => {
        const lowercaseQuery = searchQuery.toLowerCase();
        return (
          (typeof data.id === "number" &&
            data.id.toString().includes(searchQuery)) ||
          data.name.toLowerCase().includes(lowercaseQuery) ||
          data.creator_name.toLowerCase().includes(lowercaseQuery) ||
          data.status.toLowerCase().includes(lowercaseQuery)
        );
      });
    }
    return videoData;
  };

  return (
    <>
      {isLoading ? (
        <Loader color="#55DF01" />
      ) : (
        <TableTemplate
          data={searchQuery?.length >= 1 && isFilter ? filterData() : videoData}
          columns={VideoTableColumns}
          setVideoData={setVideoData}
          itemsPerPage={itemsPerPage}
        />
      )}
    </>
  );
}
