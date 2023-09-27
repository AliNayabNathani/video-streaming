import {
    HStack, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Box
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useSearchContext } from "../Context api/Context";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const CategoryData = [
    {
        Category_Name: 'Category 1',
        Sub_Categories: [
            {
                Sub_Category_name: 'Sub Category 1',
                Sub_Category_desc: 'This is Sub Category 1'
            },
            {
                Sub_Category_name: 'Sub Category 2',
                Sub_Category_desc: 'This is Sub Category 2'
            },
            {
                Sub_Category_name: 'Sub Category 3',
                Sub_Category_desc: 'This is Sub Category 3'
            },
        ],
    },
    {
        Category_Name: 'Category 2',
        Sub_Categories: [
            {
                Sub_Category_name: 'Sub Category 1',
                Sub_Category_desc: 'This is Sub Category 1'
            },
            {
                Sub_Category_name: 'Sub Category 2',
                Sub_Category_desc: 'This is Sub Category 2'
            },
        ],
    },
    {
        Category_Name: 'Category 3',
        Sub_Categories: [
            {
                Sub_Category_name: 'Sub Category 1',
                Sub_Category_desc: 'This is Sub Category 1'
            },
            {
                Sub_Category_name: 'Sub Category 2',
                Sub_Category_desc: 'This is Sub Category 2'
            },
            {
                Sub_Category_name: 'Sub Category 3',
                Sub_Category_desc: 'This is Sub Category 3'
            },
        ],
    },
    {
        Category_Name: 'Category 4',
        Sub_Categories: [
            {
                Sub_Category_name: 'Sub Category 1',
                Sub_Category_desc: 'This is Sub Category 1'
            },
        ],
    },
];


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
    const { searchQuery } = useSearchContext();
    console.log(searchQuery);
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
                        {slicedData.map((item, index) => {

                            return (
                                item.Sub_Categories.map((sub, index) => {
                                    num++
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
                                                {item.Category_Name}
                                            </Td>
                                            <Td
                                                textAlign={"center"}
                                                borderRight={"1px"}
                                                borderBottom={0}
                                                borderColor={"blackAlpha.600"}

                                            >
                                                {sub.Sub_Category_name}
                                            </Td>
                                            <Td
                                                textAlign={"center"}
                                                borderRight={"1px"}
                                                borderBottom={0}
                                                borderColor={"blackAlpha.600"}

                                            >
                                                {sub.Sub_Category_desc}
                                            </Td>

                                            {Actions ? (
                                                <Td
                                                    textAlign={"center"}
                                                    borderBottom={0}
                                                    borderRight={"1px"}
                                                    borderColor={"blackAlpha.600"}
                                                >
                                                    {" "}
                                                    <Actions to={to} />{" "}
                                                </Td>
                                            ) : null}
                                        </Tr>
                                    )
                                })
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

const CategoryColumns = [
    'Category_Name',
    'Sub_Category',
    'Description'
];

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

const CategoryActions = () => (
    <HStack align={'center'} justifyContent={'space-around'}>
        <BiEdit cursor={'pointer'} size={25} />
        <AiOutlineDelete cursor={'pointer'} size={25} />
    </HStack>
);

export default function CategoryTable() {
    const { searchQuery, isFilter } = useSearchContext();

    const filterData = () => {
        if (searchQuery) {
            return CategoryData.filter((data) =>
                data.Category_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                data.Sub_Categories.some((sub) =>
                    sub.Sub_Category_name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            )
        }
        return CategoryData;
    };

    return (
        <TableTemplate
            data={searchQuery?.length > 0 && isFilter ? filterData() : CategoryData}
            columns={CategoryColumns}
            Actions={CategoryActions} />
        // <CategoryTableTemp data={CategoryData} />
    );
}

