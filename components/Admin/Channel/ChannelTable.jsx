import { useSearchContext } from "../Context api/Context";
import { useEffect, useState } from "react";
import axios from "axios";
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
} from "@chakra-ui/react";

import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styles from "./Table.module.css";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/router";
import { HiOutlineEye } from "react-icons/hi";
import { ToggleButton } from "../SmallReusableComponents/Action";
import { server } from "../../server";
import { toast } from "react-toastify";

const changeActiveStatus = (id) => {
  axios
    .put(server + `users/${id}/active-channel`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      toast.success(`Status Changed to ${res.data.channel.status}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

const TableTemplate = ({ data, text, columns, itemsPerPage }) => {
  var num = 0;
  console.log("ITEM PER PAGE", itemsPerPage);
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
    // console.log("THIS IS ITEM:", item);
    const columnId = item.id;
    // console.log("COLUMN ID", columnId);
    const router = useRouter();
    return (
      <HStack align={"center"} justifyContent={"space-around"}>
        <Box
          onClick={() => handleNavigation(`/Admin/Channel/${columnId}`, router)}
        >
          <HiOutlineEye cursor={"pointer"} size={25} />
        </Box>
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

const ChannelColumn = ["id", "name", "creator_name", "createdAt"];

export default function ChannelTable({
  itemsPerPage,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  channelData,
  setChannelData,
}) {
  const { searchQuery, isFilter } = useSearchContext();

  channelData?.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  // console.log(searchQuery);
  const filterData = () => {
    if (searchQuery || (startDate && endDate)) {
      return channelData.filter((item) => {
        const lowercaseQuery = searchQuery?.toLowerCase();
        const createdAt = new Date(item.createdAt);

        const formattedCreatedAt = createdAt.toISOString().split("T")[0];

        const matchesSearchQuery =
          (item.id.toLowerCase().includes(lowercaseQuery) ||
            item.name.toLowerCase().includes(lowercaseQuery) ||
            item.creator_name.toLowerCase().includes(lowercaseQuery)) &&
          (!startDate ||
            formattedCreatedAt >= startDate.toISOString().split("T")[0]) &&
          (!endDate ||
            formattedCreatedAt <= endDate.toISOString().split("T")[0]);

        return matchesSearchQuery;
      });
    }
    // console.log(matchesSearchQuery);
    return channelData;
  };

  return (
    <TableTemplate
      data={searchQuery?.length > 0 && isFilter ? filterData() : channelData}
      columns={ChannelColumn}
      itemsPerPage={itemsPerPage}
    />
  );
}
