import { HStack } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { TableTemplate } from "../Tables/Table";
import { useSearchContext } from "../Context api/Context";

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
    const { searchQuery, isFilter } = useSearchContext();

    const filterData = () => {
        if (searchQuery) {
            return CategoryData.filter((data) =>
                data.Category_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                data.Sub_Category.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }
        return CategoryData;
    };
    return (
        <TableTemplate
            data={searchQuery?.length > 0 && isFilter ? filterData() : CategoryData}
            columns={CategoryColumns}
            Actions={CategoryActions} />
    );
}

