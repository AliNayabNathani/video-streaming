import { Button, Flex, FormLabel, HStack, Input } from "@chakra-ui/react";
import { PageHeading } from "../components/Admin/SmallReusableComponents/Heading";
import PackageTable from "../components/Admin/Packages/PackageTable";

const ColumnSearch = () => (
    <HStack width={'100%'} justifyContent={'flex-end'} >
        <Flex >
            <FormLabel>
                Search All Columns
            </FormLabel>
            <Input />
            <Button ml={3} variant={'outline'}>Apply</Button>
            <Button ml={3} variant={'solid'}>Clear</Button>
        </Flex>
    </HStack>
);

export default function Packages() {
    return (
        <>
            <PageHeading text={'Packages'} />
            <ColumnSearch />
            <PackageTable />
        </>
    );
}