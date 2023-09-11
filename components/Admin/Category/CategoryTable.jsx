import { HStack } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { TableTemplate } from "../Tables/Table";

const CategoryData = [
    {
        Category_Name: 'Category 1',
        Sub_Category: 'Sub Category 1',
        Description: 'Lorem ipsum'
    },
    {
        Category_Name: '',
        Sub_Category: 'Sub Category 2',
        Description: 'Lorem ipsum'
    },
    {
        Category_Name: '',
        Sub_Category: 'Sub Category 3',
        Description: 'Lorem ipsum'
    },
    {
        Category_Name: 'Category 2',
        Sub_Category: 'Sub Category 1',
        Description: 'Lorem ipsum '
    },
    {
        Category_Name: '',
        Sub_Category: 'Sub Category 2',
        Description: 'Lorem ipsum '
    },
    {
        Category_Name: 'Category 3',
        Sub_Category: 'Sub Category 1',
        Description: 'Lorem ipsum'
    },
    {
        Category_Name: '',
        Sub_Category: 'Sub Category 2',
        Description: 'Lorem ipsum '
    },
    {
        Category_Name: '',
        Sub_Category: 'Sub Category 3',
        Description: 'Lorem ipsum '
    },
    {
        Category_Name: '',
        Sub_Category: 'Sub Category 4',
        Description: 'Lorem ipsum '
    },
    {
        Category_Name: 'Category 4',
        Sub_Category: 'Sub Category 1',
        Description: 'Lorem ipsum '
    }
];


const CategoryColumns = [
    'Category_Name',
    'Sub_Category',
    'Description'
];

const CategoryActions = () => (
    <HStack align={'center'} justifyContent={'space-around'}>
        <BiEdit cursor={'pointer'} size={25} />
        <AiOutlineDelete cursor={'pointer'} size={25} />
    </HStack>
);

export default function CategoryTable() {
    return (
        <TableTemplate data={CategoryData} columns={CategoryColumns} Actions={CategoryActions} />
    );
}

