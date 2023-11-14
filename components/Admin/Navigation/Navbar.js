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
  Collapse,
  Show,
  ListItem,
  UnorderedList,
  Heading,
  Divider,
} from "@chakra-ui/react";

import { BiBarChartSquare, BiWindow } from "react-icons/bi";
import { FaUserAlt, FaFileAlt, FaRegUserCircle } from "react-icons/fa";
import { AiFillPlayCircle, AiFillFile, AiOutlineDropbox } from "react-icons/ai";
import { ImTicket } from "react-icons/im";
import { BsFillBellFill } from "react-icons/bs";
import { FiMenu, FiChevronDown, FiBell } from "react-icons/fi";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

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

const LinkItems = [
  { name: "Dashboard", icon: BiBarChartSquare, to: "/Admin/" },
  { name: "User Management", icon: FaUserAlt, to: "/Admin/User" },
  {
    name: "Content Creator Management",
    icon: AiFillPlayCircle,
    to: "/Admin/ContentCreator",
  },
  // { name: "Category Management", icon: BiWindow, to: "/Admin/Category" },
  { name: "Channels Management", icon: ImTicket, to: "/Admin/Channel" },
  { name: "Videos Management", icon: AiOutlineDropbox, to: "/Admin/Video" },
  {
    name: "Content Approval Management",
    icon: AiFillFile,
    to: "/Admin/ContentApproval",
  },
  { name: "Coupons Management", icon: ImTicket, to: "/Admin/Coupons" },
  // {
  //   name: "Packages Management",
  //   icon: AiOutlineDropbox,
  //   to: "/Admin/Packages",
  // },
  { name: "Content Management", icon: AiFillFile, to: "/Admin/Content" },
  // { name: "Reports", icon: FaFileAlt, to: "/Admin/SubscriptionReport" },
  // {
  //   name: "Custom Push Notifications",
  //   icon: BsFillBellFill,
  //   to: "/Admin/Notif",
  // },
];
const ReportItems = [
  { name: "Subscription Payment Report", to: "/Admin/SubscriptionReport" },
  { name: "Transaction Report", to: "/Admin/TransactionReport" },
  {
    name: "Content Creator Account setup Payment Report",
    to: "/Admin/ContentCreatorReport",
  },
  { name: "Coupons Redemption Report", to: "/Admin/CouponsReport" },
  { name: "Live Video Payments Report", to: "/Admin/LiveVideoReport" },
];

function SidebarContent({ onClose, ...rest }) {
  const router = useRouter();
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

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
      {LinkItems.map((link, index) => (
        <Box
          key={link.name}
          onClick={
            link.name !== "Reports"
              ? () => handleNavigation(link.to)
              : () => handleItemClick(index)
          } // Use router.push to navigate
          to
        >
          <NavItem px={4} py={2} to icon={link.icon}>
            {link.name}
          </NavItem>
          {/* Check if there are subItems and map them under 'Reports' */}
          {link.name === "Reports" && (
            <Collapse in={openItem === index}>
              <UnorderedList>
                {ReportItems.map((Report, subIndex) => (
                  <ListItem p={1} listStyleType={"none"} key={subIndex}>
                    <Box
                      key={Report.name}
                      fontSize="0.8rem"
                      p={1}
                      onClick={() => handleNavigation(Report.to)}
                      pl={8}
                      mx={3}
                      icon={null}
                    >
                      <NavItem>{Report.name}</NavItem>
                    </Box>
                  </ListItem>
                ))}
              </UnorderedList>
            </Collapse>
          )}
        </Box>
      ))}
    </Box>
  );
}

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
  const user = useSelector((state) => state.auth);
  const router = useRouter();

  const handleProfileRoute = () => {
    router.push("/Admin/Profile");
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
      <Text suppressHydrationWarning={true} className={styles.hideOnSmall}>
        Hi {user?.user?.user?.name}!! Welcome to administrative panel
      </Text>

      <Flex>
        {/* <Menu>
          <MenuButton cursor={"pointer"} minW={0}>
            <Box>
              <Icon
                mr={"2rem"}
                borderRadius={"0"}
                borderX={"1px solid white"}
                boxSize={6}
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
                  Mark all Read{" "}
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

        <Icon
          as={FaRegUserCircle}
          color={"#55DF01"}
          cursor={"pointer"}
          boxSize={10}
          onClick={handleProfileRoute}
        />
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
