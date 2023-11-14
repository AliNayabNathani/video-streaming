import {
  Box,
  Collapse,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import MainTemplate from "../../../components/Client/Templates/Main";
import { BsChevronDown } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import PrivateRoute from "../../PrivateRoute";

export default function Payee() {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedValue, setSelectedValue] = useState("Select Country/Region");
  return (
    <MainTemplate>
      <Box my={5} border={"2px solid #55DF01"} borderRadius={"10px"}>
        <VStack p={5} mx={5} alignItems={"start"}>
          <Heading size={"md"} color={"#55DF01"}>
            Which Country do you live in?
          </Heading>
          <Text>
            We need to know where you live so we can determine how to send you
            payments
          </Text>
          <Menu>
            <MenuButton
              color={""}
              w={["100%", "40%"]}
              p={2}
              borderRadius={"5px"}
              bg={"#232323"}
            >
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                {selectedValue}
                <Icon as={ChevronDownIcon} />
              </Flex>
            </MenuButton>
            <MenuList onSelect={(value) => setSelectedValue(value)}>
              <MenuItem onClick={() => setSelectedValue("US")} value="US">
                US
              </MenuItem>
              <MenuItem
                onClick={() => setSelectedValue("Africa")}
                value="Africa"
              >
                Africa
              </MenuItem>
              <MenuItem onClick={() => setSelectedValue("UK")} value="UK">
                UK
              </MenuItem>
            </MenuList>
          </Menu>
          <div onClick={onToggle}>
            <Text color={"#55DF01"} textDecor={"underline"}>
              Countries Not Supported
              <Icon ml={"1rem"} as={BsChevronDown} />
            </Text>
            <Collapse mt={4} in={isOpen} animateOpacity>
              <ul style={{ color: "#9c9c9c" }}>
                <li>Iran</li>
                <li>Afghanistan</li>
                <li>North Korea</li>
                <li>China</li>
              </ul>
            </Collapse>
          </div>
          <Text>
            Add your banking information where do you want your money sent?
          </Text>
          <Text>Too see the questions, tell us where you live</Text>
        </VStack>
      </Box>
    </MainTemplate>
  );
}
