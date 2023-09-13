import {
  Box,
  Heading,
  Select,
  HStack,
  Stack,
  Button,
  Flex,
  VStack,
  FormLabel,
  Input,
  Icon,
  Text,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Style.css";
import { AiOutlineCalendar, AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [searchText, setSearchText] = useState("");

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button style={{ border: "1px solid teal" }} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={["column", "row"]}
      >
        <Stack direction={["column", "row"]} alignItems={"center"}>
          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Text>Sort by</Text>
            <box className="custom-datepicker">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <Icon as={AiOutlineCalendar} />
            </box>
          </Stack>
          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Text>To</Text>
            <box className="custom-datepicker">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <Icon as={AiOutlineCalendar} />
            </box>
          </Stack>
        </Stack>
        <Stack direction={["column", "row"]} textAlign={"center"} mt={8} mb={8}>
          <InputGroup width={["100%", "60%"]}>
            <Input
              placeholder="Search All Columns"
              bg={"#3b3b3b"}
              focusBorderColor="#323232"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <InputRightElement pointerEvents="none">
              <Icon as={AiOutlineSearch} color="gray.400" />
            </InputRightElement>
          </InputGroup>

          <Button variant={"outline"} size={{ base: "sm", md: "md" }}>
            Apply
          </Button>
          <Button
            variant={"solid"}
            size={{ base: "sm", md: "md" }}
            onClick={handleClear}
          >
            Clear
          </Button>
        </Stack>
      </Stack>
      <Stack
        width={["100%", "20%"]}
        direction={["column", "row"]}
        alignItems={"center"}
      >
        <Text textAlign={["center", "left"]}>Show enteries</Text>
        <Select
          defaultValue={"10"}
          bg={"#3b3b3b"}
          w={"30%"}
          focusBorderColor="#232323"
          borderColor={"#232323"}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Select>
      </Stack>
    </>
  );
};

export { SearchBar };
