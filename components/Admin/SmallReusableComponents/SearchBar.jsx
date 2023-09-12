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
} from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Style.css";

import { AiOutlineCalendar } from "react-icons/ai";
const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button style={{ border: "1px solid teal" }} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <Box borderRadius={"5px"} border={"2px"} borderColor={"blackAlpha.600"}>
      <VStack my={5}>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <FormLabel>Sort by</FormLabel>
            <HStack
              border={"1px solid #cccccc80"}
              bg={"#232323"}
              outline={"none"}
              padding="0.5rem 1rem"
              _focus={{ bg: "#55df01" }}
              borderRadius={"5px"}
            >
              <DatePicker
                className="custom-datepicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <Icon as={AiOutlineCalendar} />
            </HStack>
            <FormLabel>To</FormLabel>
            <Box
              border={"1px solid #cccccc80"}
              bg={"#232323"}
              outline="none"
              borderRadius={"5px"}
              border-radius="5px"
              padding="0.5rem 1rem"
              _focus={{ bg: "#55df01" }}
            >
              <DatePicker
                className="custom-datepicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <Icon as={AiOutlineCalendar} />
            </Box>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} textAlign={"center"}>
            <FormLabel textAlign={"center"}> Search all columns</FormLabel>
            <Input width={"50%"} />
            <Button variant={"outline"} size={{ base: "sm", md: "md" }}>
              Apply
            </Button>
            <Button variant={"solid"} size={{ base: "sm", md: "md" }}>
              Clear{" "}
            </Button>
          </Stack>
        </HStack>
        <HStack
          justifyContent={{ base: "center", md: "flex-start" }}
          width={"100%"}
        >
          <Flex alignItems={"center"}>
            <FormLabel w={"full"}> Show enteries</FormLabel>
            <Select defaultValue={"10"}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>
          </Flex>
        </HStack>
      </VStack>
    </Box>
  );
};

export { SearchBar };
