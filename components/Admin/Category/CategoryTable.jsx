import {
  HStack,
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
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useSearchContext } from "../Context api/Context";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { server } from "../../server";
import styles from "./Table.module.css";
import { useRouter } from "next/router";

const deleteCategory = (id) => {
  axios
    .delete(server + `users/category/${id}`, {
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

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const Actions = ({ item }) => {
    const columnId = item.id;

    const router = useRouter();
    return (
      <HStack align={"center"} justifyContent={"space-evenly"}>
        <BiEdit cursor={"pointer"} size={25} />
        <AiOutlineDelete
          onClick={() => deleteCategory(columnId)}
          cursor={"pointer"}
          size={25}
        />
      </HStack>
    );
  };

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
              return item.subcategories?.map((sub, index) => {
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
                    <Td
                      textAlign={"center"}
                      borderRight={"1px"}
                      borderBottom={0}
                      borderColor={"blackAlpha.600"}
                    >
                      {item.name}
                    </Td>
                    <Td
                      textAlign={"center"}
                      borderRight={"1px"}
                      borderBottom={0}
                      borderColor={"blackAlpha.600"}
                    >
                      {sub.name}
                    </Td>
                    <Td
                      textAlign={"center"}
                      borderRight={"1px"}
                      borderBottom={0}
                      borderColor={"blackAlpha.600"}
                    >
                      {sub.desc}
                    </Td>

                    {Actions ? (
                      <Td
                        textAlign={"center"}
                        borderBottom={0}
                        borderRight={"1px"}
                        borderColor={"blackAlpha.600"}
                      >
                        {" "}
                        <Actions item={item} />{" "}
                      </Td>
                    ) : null}
                  </Tr>
                );
              });
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

const CategoryColumns = ["name", "Sub_Category", "Description"];

// const CategoryTableTemp = ({ data }) => {
//     return (
//         <Box overflowX="auto">
//             <Table variant="simple">
//                 <Thead>
//                     <Tr>
//                         <Th>Category Name</Th>
//                         <Th>Sub Category</Th>
//                         <Th>Description</Th>
//                     </Tr>
//                 </Thead>
//                 <Tbody>
//                     {data.map((category, index) => (
//                         <React.Fragment key={index}>
//                             {category.Sub_Categories.map((subCategory, subIndex) => (
//                                 <Tr key={`${index}-${subIndex}`}>
//                                     {subIndex === 0 ? (
//                                         <Td rowSpan={category.Sub_Categories.length}>{category.Category_Name}</Td>
//                                     ) : null}
//                                     <Td>{subCategory}</Td>
//                                     {subIndex === 0 ? (
//                                         <Td rowSpan={category.Sub_Categories.length}>{category.Description}</Td>
//                                     ) : null}
//                                 </Tr>
//                             ))}
//                         </React.Fragment>
//                     ))}
//                 </Tbody>
//             </Table>
//         </Box>
//     );
// };

export default function CategoryTable({ categoryData, setCategoryData }) {
  const { searchQuery, isFilter } = useSearchContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${server}users/category-management`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        });
        console.log(response.data);
        setCategoryData(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterData = () => {
    if (searchQuery) {
      return categoryData.filter(
        (data) =>
          data.Category_Name.toLowerCase().includes(
            searchQuery.toLowerCase()
          ) ||
          data.Sub_Categories.some((sub) =>
            sub.Sub_Category_name.toLowerCase().includes(
              searchQuery.toLowerCase()
            )
          )
      );
    }
    return categoryData;
  };

  return (
    <TableTemplate
      data={searchQuery?.length > 0 && isFilter ? filterData() : categoryData}
      columns={CategoryColumns}
    />
    // <CategoryTableTemp data={CategoryData} />
  );
}
