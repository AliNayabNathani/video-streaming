import {
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useSearchContext } from "../../components/Admin/Context api/Context";
import { PageHeading } from "../../components/Admin/SmallReusableComponents/Heading";
import PackageTable from "../../components/Admin/Packages/PackageTable";

const ColumnSearch = () => {
  const { searchQuery, updateSearchQuery, updateFilter } = useSearchContext();

  const handleClear = () => {
    // setStartDate(new Date());
    updateSearchQuery("");
  };
  return (
    <Stack
      justifyContent={["center", "flex-end"]}
      direction={["column", "row"]}
      width={["full", "full"]}
      alignItems={"center"}
      my={[0, 12]}
    >
      <Input
        value={searchQuery}
        onChange={(e) => updateSearchQuery(e.target.value)}
        placeholder="Search All Column"
        bg={"#232323"}
        focusBorderColor="#232323"
        w={["full", "30%"]}
      />
      <HStack my={[4, 0]}>
        <Button ml={3} variant={"outline"} onClick={() => updateFilter()}>
          Apply
        </Button>
        <Button ml={3} variant={"solid"} onClick={handleClear}>
          Clear
        </Button>
      </HStack>
    </Stack>
  );
};
export default function Packages() {
  return (
    <>
      <PageHeading text={"Packages"} />
      <ColumnSearch />
      <PackageTable />
    </>
  );
}
