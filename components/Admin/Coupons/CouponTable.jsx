import { ToggleButton } from "../SmallReusableComponents/Action";
import { useSearchContext } from "../Context api/Context";
import { useEffect, useState } from "react";
import { server } from "../../server";
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
  HStack,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styles from "./Table.module.css";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const deleteCoupon = (id, fetchData) => {
  axios
    .delete(server + `users/coupon/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      toast.success(`Delete Successfully`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      fetchData();
    })
    .catch((err) => {
      console.error(err);
      toast.success(err.msg, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
    });
};

const changeActiveStatus = (id) => {
  axios
    .put(server + `users/coupon/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
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

  const Actions = ({ item, index, fetchData }) => {
    const couponId = item.id;

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    const handleDelete = () => {
      setIsOpen(true);
    };

    const handleConfirmDelete = () => {
      deleteCoupon(couponId, fetchData);
      onClose();
    };

    return (
      <>
        <HStack align={"center"} justifyContent={"space-between"}>
          <BiEdit cursor={"pointer"} size={25} />
          <AiOutlineDelete
            onClick={handleDelete}
            cursor={"pointer"}
            size={25}
          />
        </HStack>

        <AlertDialog isOpen={isOpen} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Confirm Delete
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to delete this coupon?
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
              <Th
                textAlign={"center"}
                borderRight={"1px"}
                borderColor={"blackAlpha.600"}
                color="white"
              >
                Actions
              </Th>
              <Th
                textAlign={"center"}
                borderColor={"blackAlpha.600"}
                color={"white"}
              >
                Availability
              </Th>
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
                        index={index}
                        fetchData={fetchData}
                      />
                    </Td>
                  ) : null}
                  <Td
                    textAlign={"center"}
                    borderColor={"blackAlpha.600"}
                    borderBottom={0}
                  >
                    <ToggleButton
                      columnId={item.id}
                      changeStatus={changeActiveStatus}
                      data={item}
                      cursor={"pointer"}
                    />
                  </Td>
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
            containerClassName={styles.pagination}
            activeClassName={styles.active}
          />
        </>
      ) : null}
    </>
  );
};

const CouponTableColumn = ["name", "createdAt", "value"];

export default function CouponTable({ couponData, setCoupons, fetchData }) {
  const { searchQuery, isFilter } = useSearchContext();
  console.log(couponData);

  couponData?.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  // console.log(couponData);
  const filterData = () => {
    if (searchQuery) {
      return couponData.filter((data) => {
        // console.log("ME SEARCHED", data);
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return (
          (data.id && data.id.toLowerCase().includes(lowerCaseSearchQuery)) ||
          (data.name && data.name.toLowerCase().includes(lowerCaseSearchQuery))
        );
      });
    }
    return couponData;
  };

  return (
    <TableTemplate
      data={searchQuery?.length > 0 && isFilter ? filterData() : couponData}
      columns={CouponTableColumn}
      fetchData={fetchData}
    />
  );
}
