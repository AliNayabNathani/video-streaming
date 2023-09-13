import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";

import { BiBarChartSquare, BiWindow } from "react-icons/bi";
import { FaUserAlt, FaFileAlt } from "react-icons/fa";
import { AiFillPlayCircle, AiFillFile, AiOutlineDropbox } from "react-icons/ai";
import { ImTicket } from "react-icons/im";
import { BsFillBellFill } from "react-icons/bs";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";
import "./Navbar.css";

const LinkItems = [
  { name: "Dashboard", icon: BiBarChartSquare, to: "/" },
  { name: "User Management", icon: FaUserAlt, to: "/User" },
  {
    name: "Content Creator Management",
    icon: AiFillPlayCircle,
    to: "/ContentCreator",
  },
  { name: "Category Management", icon: BiWindow, to: "/Category" },
  { name: "Channels Management", icon: ImTicket, to: "/Channel" },
  { name: "Videos Management", icon: AiOutlineDropbox, to: "/Video" },
  {
    name: "Content Approval Management",
    icon: AiFillFile,
    to: "/ContentApproval",
  },
  { name: "Coupons Management", icon: ImTicket, to: "/Coupons" },
  { name: "Packages Management", icon: AiOutlineDropbox, to: "/Packages" },
  { name: "Content Management", icon: AiFillFile, to: "/Content" },
  { name: "Reports", icon: FaFileAlt, to: "/SubscriptionReport" },
  { name: "Custom Push Notifications", icon: BsFillBellFill, to: "/Notif" },
];
const ReportItems = [
  { name: "Subscription Payment Report", to: "/SubscriptionReport" },
  { name: "Transaction Report", to: "/TransactionReport" },
  {
    name: "Content Creator Account setup Payment Report",
    to: "/ContentCreatorReport",
  },
  { name: "Coupons Redemption Report", to: "/CouponsReport" },
  { name: "Live Video Payments Report", to: "/LiveVideoReport" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const router = useRouter();

  const handleNavigation = (to) => {
    router.push(to);
  };

  return (
    <Box
      transition="3s ease"
      borderRight="1px solid #232323"
      w={{ base: "full", md: "20rem" }}
      pos="fixed"
      h="full"
      overflow={"auto"}
      {...rest}
    >
      <Flex h="20" align={"center"} mx={4} justifyContent={"left"}>
        <Image
          src="/assests/videe0/Logo/Black _ White/sideBarLogo.png"
          alt="Logo"
          w={"180px"}
          h={"50px"}
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Box
          key={link.name}
          onClick={() => handleNavigation(link.to)} // Use router.push to navigate
          to
        >
          <NavItem px={4} py={2} to icon={link.icon}>
            {link.name}
          </NavItem>
          {/* Check if there are subItems and map them under 'Reports' */}
          {link.name === "Reports" && (
            <div>
              {ReportItems.map((Report) => (
                <Box
                  key={Report.name}
                  onClick={() => handleNavigation(Report.to)} // Use router.push to navigate
                  fontSize="0.8rem"
                  p={1}
                  pl={8}
                  mx={3}
                  icon={null}
                >
                  {Report.name}
                </Box>
              ))}
            </div>
          )}
        </Box>
      ))}
    </Box>
  );
};
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={"whiteAlpha.700"}
        _hover={{
          color: "#55DF01",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "#55DF01",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const dummyUser = {
    name: "Ali Nayab",
    email: "nayab@example.com",
    avatar:
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
  };

  return (
    <Flex
      ml={{ base: 0, md: "20rem" }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image
        src="/assests/videe0/Logo/Black _ White/sideBarLogo.png"
        alt="Logo"
        w={"110px"}
        h={"30px"}
        display={{ base: "flex", md: "none" }}
      />
      {/* <HStack
        width={"100%"}
        justifyContent={"space-between"}
        spacing={{ base: "0", md: "6" }}
      > */}
      <Text className="hide-on-small">
        Hi {dummyUser.name}!! Welcome to administrative panel
      </Text>

      <Flex>
        <IconButton
          size="lg"
          mr={"2rem"}
          borderRadius={"0"}
          borderX={"1px solid white"}
          variant="ghost"
          color={"white"}
          _hover={{ bg: "white", color: "#232323" }}
          aria-label="open menu"
          icon={<BsFillBellFill />}
        />
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack align={"flex-end"} alignItems={"center"}>
              <Avatar size={"sm"} src={dummyUser.avatar} />
              <Text className="hide-on-small" alignSelf={"center"}>
                {dummyUser.email}
              </Text>
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList bg={"black"}>
            <MenuItem bg={"black"}>Profile</MenuItem>
            <MenuItem bg={"black"}>Settings</MenuItem>
            <MenuItem bg={"black"}>Billing</MenuItem>
            <MenuDivider />
            <MenuItem bg={"black"}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {/* </HStack> */}
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
    </>
  );
};
export default SidebarWithHeader;
