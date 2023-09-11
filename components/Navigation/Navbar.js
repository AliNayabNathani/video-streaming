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
import Link from "next/link";
import { useRouter } from "next/router";

const LinkItems = [
  { name: "Dashboard", icon: BiBarChartSquare, to: "/" },
  { name: "User", icon: FaUserAlt, to: "/user" },
  { name: "Content Creator", icon: AiFillPlayCircle, to: "/contentcreator" },
  { name: "Category", icon: BiWindow, to: "/category" },
  { name: "Channels", icon: ImTicket, to: "/channel" },
  { name: "Videos", icon: AiOutlineDropbox, to: "/video" },
  { name: "Content Approval", icon: AiFillFile, to: "/contentapproval" },
  { name: "Coupons", icon: ImTicket, to: "/coupons" },
  { name: "Packages", icon: AiOutlineDropbox, to: "/packages" },
  { name: "Content", icon: AiFillFile, to: "/content" },
  { name: "Reports", icon: FaFileAlt, to: "/subscriptionreport" },
  { name: "Push Notifications", icon: BsFillBellFill, to: "/notif" },
];
const ReportItems = [
  { name: "Subscription Payment Report", to: "/subscriptionreport" },
  { name: "Transaction Report", to: "/transactionreport" },
  {
    name: "Content Creator Account setup Payment Report",
    to: "/contentcreatorreport",
  },
  { name: "Coupons Redemption Report", to: "/couponsreport" },
  { name: "Live Video Payments Report", to: "/livereport" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const router = useRouter();

  const handleNavigation = (to) => {
    router.push(to);
    onClose();
  };

  return (
    <Box
      transition="3s ease"
      borderRight="1px"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      overflow={"auto"}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          src="/assests/videe0/Logo/videe0 - Logo (160x160).png"
          alt="Logo"
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Box
          key={link.name}
          onClick={() => handleNavigation(link.to)} // Use router.push to navigate
          p={4}
          mx={4}
          to
        >
          <NavItem p={4} mx={4} to icon={link.icon}>
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
        _hover={{
          bg: "#55DF01",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
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
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      justifyContent={{ base: "space-between", md: "flex-end" }}
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
        src="/assests/videe0/Logo/videe0 - Logo (110x110).png"
        alt="Logo"
        display={{ base: "flex", md: "none" }}
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BsFillBellFill />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
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
