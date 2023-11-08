import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FiBell, FiKey, FiSearch, FiSettings } from "react-icons/fi";
import {
  AiOutlineLine,
  AiOutlinePlayCircle,
  AiOutlineYoutube,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsDownload } from "react-icons/bs";
import { useRouter } from "next/router";
import { logout } from "../../features/auth/authSlice";
import Link from "next/link";

const Navbar = () => {
  const user = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState("");
  // console.log("active:", activeLink);
  const handleLogout = async () => {
    await dispatch(logout());
    router.push("/User");
  };

  return (
    <HStack
      p={["1rem", "2rem"]}
      minW={"100%"}
      maxW={"max-content"}
      justifyContent={"space-between"}
    >
      <Image
        w={"150px"}
        h={"50px"}
        src="/assests/videe0/Logo/Black _ White/sideBarLogo.png"
        alt=""
      />
      <HStack
        display={["none", "flex"]}
        w={"60%"}
        fontSize={"1.2rem"}
        justifyContent={"space-around"}
        fontWeight={"bold"}
      >
        <Link href="/User/Dashboard" legacyBehavior>
          <a
            style={{
              cursor: "pointer",
              color: activeLink === "Home" ? "#55DF01" : "",
            }}
            // href="/User/Dashboard"
            onClick={() => setActiveLink("Home")}
          >
            Home
          </a>
        </Link>
        <Link href="/User/Favourites" legacyBehavior>
          <a
            style={{
              cursor: "pointer",
              color: activeLink === "Favourites" ? "#55DF01" : "",
            }}
            // href="/User/Favourites"
            onClick={() => setActiveLink("Favourites")}
          >
            Favourites
          </a>
        </Link>
        <Link href="/User/PPV" legacyBehavior>
          <a
            style={{
              cursor: "pointer",
              color: activeLink === "PPV" ? "#55DF01" : "",
            }}
            // href="/User/PPV"
            onClick={() => setActiveLink("PPV")}
          >
            PPV
          </a>
        </Link>
        {/* <a
          style={{
            cursor: "pointer",
            color: activeLink === "Friends" ? "#55DF01" : "",
          }}
          href="/User/Friends"
          onClick={() => setActiveLink("Friends")}
        >
          Friends
        </a> */}
        {/* <a
          style={{
            cursor: "pointer",
            color: activeLink === "Theatre" ? "#55DF01" : "",
          }}
          href="/User/Theatre"
          onClick={() => setActiveLink("Theatre")}
        >
          In Theatres
        </a> */}
      </HStack>

      <HStack w={"20%"} justifyContent={"flex-end"}>
        <Icon
          _hover={{ color: "#55DF01" }}
          aria-label="open menu"
          cursor={"pointer"}
          boxSize={[8, 6]}
          as={FiSearch}
        />
        <Icon
          display={["none", "flex"]}
          boxSize={6}
          as={AiOutlineLine}
          transform="rotate(90deg)"
        />
        <Icon
          boxSize={[8, 6]}
          borderRadius={"0"}
          _hover={{ color: "#55DF01" }}
          aria-label="open menu"
          cursor={"pointer"}
          as={FiBell}
        />
        <Icon
          display={["none", "flex"]}
          boxSize={6}
          as={AiOutlineLine}
          transform="rotate(90deg)"
        />
        <Text display={["none", "flex"]} color={"#fff"}>
          {user?.user?.user?.name &&
            user.user.user.name.charAt(0).toUpperCase() +
              user.user.user.name.slice(1)}
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
          >
            <Avatar
              size={"md"}
              rounded={"full"}
              src={"/assests/People/cena.jpg"}
            />
            <ChevronDownIcon mt={2} color={"#55DF01"} boxSize={8} />
          </MenuButton>
          <MenuList bg={"#232323"} alignItems={"center"}>
            <MenuItem p={4} color={"white"} bg={"#232323"}>
              <BsDownload />
              <Text ml={4} color={"white"}>
                Downloads
              </Text>
            </MenuItem>
            <Divider bg={"#303030"} />
            <MenuItem p={4} color={"white"} bg={"#232323"}>
              <AiOutlineYoutube />
              <Text ml={4} color={"white"}>
                Subscription
              </Text>
            </MenuItem>
            <Divider bg={"#303030"} />
            <MenuItem p={4} color={"white"} bg={"#232323"}>
              <FiKey />
              <Text ml={4} color={"white"}>
                Rented Vidoes
              </Text>
            </MenuItem>
            <Divider bg={"#303030"} />
            <MenuItem p={4} color={"white"} bg={"#232323"}>
              <AiOutlinePlayCircle />
              <Text ml={4} color={"white"}>
                Purchased Vidoes
              </Text>
            </MenuItem>
            <Divider bg={"#303030"} />
            <MenuItem
              onClick={() => router.push("/User/Profile")}
              p={4}
              color={"white"}
              bg={"#232323"}
            >
              <FiSettings />
              <Text ml={4} color={"white"}>
                Settings
              </Text>
            </MenuItem>
            <MenuItem
              p={4}
              color={"white"}
              bg={"#232323"}
              onClick={handleLogout}
            >
              <Text ml={4} color={"white"}>
                Logout
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <Image /> */}
      </HStack>
    </HStack>
  );
};

const UserTemplate = ({ children }) => {
  // console.log("BACHAY:", children);
  return (
    <Box maxW={"100vw"}>
      <Navbar />

      {children}

      <HStack
        display={["flex", "none"]}
        maxW={"100%"}
        w={"full"}
        position={"fixed"}
        bg={"#414141"}
        color={"white"}
        spacing={0}
        bottom={0}
        alignItems={"center"}
      >
        <Box textAlign={"center"} w={"25%"} p={4} border={"1px solid black"}>
          <Link href="/User/Dashboard">Home</Link>
        </Box>
        <Box textAlign={"center"} w={"30%"} p={4} border={"1px solid black"}>
          <Link href="/User/Favourites">Favourites</Link>
        </Box>
        <Box textAlign={"center"} w={"20%"} p={4} border={"1px solid black"}>
          <Link href="/User/PPV">PPV</Link>
        </Box>
        {/* <Box textAlign={"center"} w={"20%"} p={4} border={"1px solid black"}>
          <a href="/User/Friends">Friends</a>
        </Box> */}
        {/* <Box textAlign={"center"} w={"25%"} p={4} border={"1px solid black"}>
          <a href="/User/Theatre">In Theaters</a>
        </Box> */}
      </HStack>
    </Box>
  );
};

export default UserTemplate;
