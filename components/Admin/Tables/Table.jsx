import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  GridItem,
  Heading,
  Button,
  HStack,
} from "@chakra-ui/react";
import {
  creatorColumns,
  viewerColumns,
  transactionColumns,
  videoColumns,
  creatorData,
  VideoData,
  transactionData,
  viewerData,
} from "./DashboardTableData";
import { useRef, useState } from "react";
import { userData, userColumns } from "./UserTableData";
import { Actions } from "../SmallReusableComponents/Action";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import './Table.css'

const TableTemplate = ({
  data,
  text,
  columns,
  Actions,
  to,
  Availability,
  itemsPerPage,
}) => {
  var num = 0;
  itemsPerPage = itemsPerPage || 10;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = data.slice(startIndex, endIndex);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
                  borderColor={"blackAlpha.600"}
                  borderRight={"1px"}
                  color="white"
                >
                  Actions
                </Th>
              ) : null}
              {Availability ? (
                <Th
                  textAlign={"center"}
                  borderColor={"blackAlpha.600"}
                  color={"white"}
                >
                  Availability
                </Th>
              ) : null}
            </Tr>
          </Thead>

          <Tbody>
            {slicedData.map((item, index) => {
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
                      borderColor={"blackAlpha.600"}
                      borderBottom={0}
                      borderRight={"1px"}
                    >
                      {" "}
                      <Actions to={to} />{" "}
                    </Td>
                  ) : null}
                  {Availability ? (
                    <Td
                      textAlign={"center"}
                      borderColor={"blackAlpha.600"}
                      borderBottom={0}
                    >
                      {" "}
                      <Availability />{" "}
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
          {" "}
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
            pageCount={Math.ceil(data.length / itemsPerPage)}
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

const Dashboard_Tables = () => {
  return (
    <>
      <SimpleGrid columns={{ base: "1", md: "1" }} spacing={5}>
        <GridItem>
          <Heading size={"md"}>Creator Data</Heading>
          <TableTemplate
            data={creatorData}
            columns={creatorColumns}
            itemsPerPage={4}
          />
        </GridItem>
        <GridItem>
          <Heading size={"md"}>Video Data</Heading>
          <TableTemplate
            data={VideoData}
            columns={videoColumns}
            itemsPerPage={4}
          />
        </GridItem>
        <GridItem>
          <Heading size={"md"}>Viewer Data</Heading>
          <TableTemplate
            data={viewerData}
            columns={viewerColumns}
            itemsPerPage={4}
          />
        </GridItem>
        <GridItem>
          <Heading size={"md"}>Transaction Data</Heading>
          <TableTemplate
            data={transactionData}
            columns={transactionColumns}
            itemsPerPage={4}
          />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

const User_Tables = () => {
  return (
    <TableTemplate
      data={userData}
      columns={userColumns}
      to={"/UserDetails"}
      Actions={Actions}
    />
  );
};

export { Dashboard_Tables, User_Tables, TableTemplate };