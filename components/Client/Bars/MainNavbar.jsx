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
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { LanguageSelect } from "../Reusable Components/LanguageSelect";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { useRef } from "react";
import { FiBell } from "react-icons/fi";
import "./Style.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { logout } from "../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const NotifData = [
  {
    msg: "New Video Uploaded",
    desc: 'Mark has uploaded a new video: "Exploring the Great Outdoors"',
  },
  {
    msg: "Comment on Your Video",
    desc: 'You have a new comment on your video: "How to Bake the Perfect Cake"',
  },
  {
    msg: "Channel Subscription",
    desc: "User123 has subscribed to your channel!",
  },
  {
    msg: "Video Purchased",
    desc: 'You have successfuly Purchased the Video: "Great Web of lies"',
  },
];

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log("ME IS", isAuthenticated);
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
            <VStack mt={"5rem"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  outlineColor={"#55DF01"}
                  w={"150px"}
                  h={"100px"}
                  mb={"2rem"}
                >
                  <Box>
                    <Icon as={AiOutlineUser} color={"#55DF01"} boxSize={16} />
                  </Box>
                </MenuButton>
                <MenuList bg={"black"} m={0} p={0}>
                  <MenuItem bg={"black"} color={"whiteAlpha.600"}>
                    Profile
                  </MenuItem>
                  <MenuItem bg={"black"} color={"whiteAlpha.600"}>
                    Settings
                  </MenuItem>
                  <MenuDivider />
                  {isAuthenticated ? (
                    <MenuItem bg={"black"} color={"whiteAlpha.600"}>
                      Login
                    </MenuItem>
                  ) : (
                    <MenuItem bg={"black"} color={"whiteAlpha.600"}>
                      Signout
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
              <LanguageSelect />

              <Button width={"100%"} variant={"outline"}>
                Support
              </Button>
              <Button width={"100%"} variant={"solid"}>
                Login
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default function Nav() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleNavigation = () => {
    router.push("/Client/Profile");
  };

  const handleLogout = async () => {
    await dispatch(logout());
    router.push("/");
    window.location.reload();
  };

  return (
    <>
      <Box borderBottom={"2px solid #232323"} px={4} py={4}>
        <Flex h={"10vh"} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                src={"/assests/videe0/Logo/Black _ White/sideBarLogo.png"}
                alt="Logo"
                w={"180px"}
                h={"50px"}
              />
            </Box>
          </HStack>
          <HStack
            display={["none", "flex"]}
            alignItems={"center"}
            spacing={"1rem"}
          >
            {/* <LanguageSelect />
            <Menu>
              <MenuButton cursor={"pointer"} minW={0}>
                <Box>
                  <Icon
                    boxSize={8}
                    borderRadius={"0"}
                    variant="ghost"
                    color={"whiteAlpha.600"}
                    _hover={{ color: "#55DF01" }}
                    aria-label="open menu"
                    cursor={"pointer"}
                    as={FiBell}
                  />
                </Box>
              </MenuButton>

              <MenuList w={"600px"} p={0} m={0}>
                <MenuItem p={3} color={"white"} bg={"#232323"}>
                  <HStack w={"100%"} justifyContent={"space-between"}>
                    <Heading size={"md"}>Notifications</Heading>
                    <Text textDecor={"underline"} color={"#55DF01"}>
                      Mark all Read
                    </Text>
                  </HStack>
                </MenuItem>

                {NotifData.map((data) => (
                  <>
                    <MenuItem p={5} bg={"#323232"} color={"white"}>
                      <Box>
                        <Heading color={"#55DF01"} size={"md"}>
                          {data.msg}
                        </Heading>
                        <Text fontSize={"0.9rem"}>{data.desc}</Text>
                      </Box>
                    </MenuItem>
                    <Divider />
                  </>
                ))}
              </MenuList>
            </Menu> */}

            <Menu>
              <MenuButton as={Button} variant={"unstyled"} cursor={"pointer"}>
                <FaRegUserCircle color="#55DF01" style={{ fontSize: "2rem" }} />
              </MenuButton>

              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <MobileNav />
        </Flex>
      </Box>
    </>
  );
}
