import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import MainTemplate from "../../components/Client/Templates/Main";
import { BiUserCircle } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { useRouter } from "next/router";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "../PrivateRoute";

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleNavigation = (to) => {
    router.push(to);
  };

  console.log(user);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/Client");
  };

  return (
    <PrivateRoute allowedRole="4">
      <MainTemplate>
        <Heading size={"lg"}>Profile</Heading>
        <Flex mt={"5rem"} justifyContent={"center"}>
          <Box w={"500px"} bg={"#323232"} p={"2rem"}>
            <HStack justifyContent={"space-between"}>
              <Icon
                className="thin-lines-icon"
                color={"#55DF01"}
                zIndex={1}
                top={"-24"}
                position="relative"
                style={{ marginInline: "auto" }}
                bg={"black"}
                borderRadius={"full"}
                as={BiUserCircle}
                boxSize={36}
              />
              <Icon
                zIndex={1}
                top={"-16"}
                position="relative"
                as={FiEdit3}
                color={"whiteAlpha.600"}
                boxSize={8}
              />
            </HStack>
            <VStack
              px={20}
              pb={10}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <Text fontWeight={"bold"}>Username</Text>
              <Input value={user?.user?.name} mb={"1rem"} disabled />
              <Text fontWeight={"bold"}>E-mail address</Text>
              <Input value={user?.user?.email} mb={"1rem"} disabled />
              <Text fontWeight={"bold"}>Phone Number</Text>
              <Input
                mb={"1rem"}
                type="number"
                placeholder="+91 098765432"
                disabled
              />
              <Button w={"100%"} onClick={() => handleNavigation()}>
                Change Password
              </Button>
              <Button w={"100%"} onClick={handleLogout}>
                Log Out
              </Button>
            </VStack>
          </Box>
        </Flex>
      </MainTemplate>
    </PrivateRoute>
  );
}
