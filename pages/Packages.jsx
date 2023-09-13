import { Button, Flex, FormLabel, HStack, Input } from "@chakra-ui/react";
import { PageHeading } from "../components/Admin/SmallReusableComponents/Heading";
import PackageTable from "../components/Admin/Packages/PackageTable";
import { useSearchContext } from "../components/Admin/Context api/Context";

const ColumnSearch = () => {
    const { searchQuery, updateSearchQuery, updateFilter } = useSearchContext();

    const handleClear = () => {
        // setStartDate(new Date());
        updateSearchQuery('');
    };
    return (
        <HStack width={'100%'} justifyContent={'flex-end'} >
            <Flex >
                <FormLabel>
                    Search All Columns
                </FormLabel>
                <Input value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)} />
                <Button ml={3} variant={'outline'}
                    onClick={() => updateFilter()}>
                    Apply
                </Button>
                <Button ml={3} variant={'solid'}
                    onClick={handleClear}
                >Clear</Button>
            </Flex>
        </HStack>
    );
}
export default function Packages() {
    return (
        <>
            <PageHeading text={'Packages'} />
            <ColumnSearch />
            <PackageTable />
        </>
    );
}