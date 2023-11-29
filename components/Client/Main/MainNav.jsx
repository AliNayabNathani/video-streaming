"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Icon,
  VStack,
  Select,
} from "@chakra-ui/react";
import { LanguageSelect } from "../Reusable Components/LanguageSelect";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
import { ContentBar } from "../Reusable Components/ContentBar";
import { useDetailContext } from "../Context/context";
import PrivateRoute from "../../../pages/PrivateRoute";

const NavData = [
  {
    name: "Dashboard",
    to: "/Dashboard",
  },
  {
    name: "My Video",
    to: "/MyVideo",
  },
  {
    name: "Analytics",
    to: "/Analytics",
  },
  {
    name: "My Channels",
    to: "/MyChannels",
  },
  {
    name: "Support",
    to: "/Support",
  },
  {
    name: "Submit Feedback",
    to: "/SubmitFeedback",
  },
];

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { updateTitle } = useDetailContext();
  return (
    <Box mt={3} display={{ base: "block", md: "none" }}>
      <Icon as={AiOutlineMenu} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <HStack my={10} justifyContent={"center"}>
              <Avatar
                size={"2xl"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </HStack>
            <LanguageSelect />
            <Button
              colorScheme={"blue"}
              my={5}
              width={"100%"}
              size={"md"}
              borderRadius={2}
              border={"1px solid black"}
              boxShadow={"2px 2px 2px black"}
            >
              Support
            </Button>
            <VStack alignItems={"center"}>
              <Button width={"100%"}>Profile</Button>
              <Button width={"100%"}>Settings</Button>
              <Button width={"100%"}>Sign Out</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const InfoBar = () => (
  <Flex display={{ base: "none", md: "flex" }} alignItems={"center"}>
    <Button
      colorScheme={"blue"}
      size={"md"}
      mr={4}
      borderRadius={2}
      border={"1px solid black"}
      boxShadow={"2px 2px 2px black"}
    >
      Support
    </Button>
    <LanguageSelect />
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"md"}
          src={
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }
        />
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuDivider />
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  </Flex>
);

export default function Nav() {
  return (
    <>
      <PrivateRoute allowedRole="4">
        <Box
          borderBottom={"1px solid black"}
          bg={useColorModeValue("gray.100", "gray.900")}
          px={4}
        >
          <Flex
            h={"10vh"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack spacing={8} alignItems={"center"}>
              <Box display={{ base: "none", md: "block" }}>
                <Image
                  src={
                    "/public/assests/videe0/Logo/videe0 - Logo (110x110).png"
                  }
                />
              </Box>
              <Box display={{ base: "block", md: "none" }}>
                <Image
                  src={
                    "/public/assests/videe0/Logo/videe0 - Logo (110x110).png"
                  }
                />
              </Box>
            </HStack>
            <ContentBar text="Main" data={NavData} />
            <InfoBar />
            <MobileNav />
          </Flex>
        </Box>
      </PrivateRoute>
    </>
  );
}
