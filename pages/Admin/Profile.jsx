import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateProfile } from "../../features/auth/authSlice";
import PrivateRoute from "../PrivateRoute";

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const storedUserData = localStorage.User;
  const initialFormData = storedUserData
    ? JSON.parse(storedUserData).user || {}
    : {};

  console.log("INITIAL", initialFormData);

  const [formData, setFormData] = useState({
    name: initialFormData.name || "",
    email: initialFormData.email || "",
    mobile_number: initialFormData.mobile_number || "",
  });

  //   console.log(formData);

  const handleChange = (e) => {
    // console.log("User object:", user);
    setFormData((prevData) => ({
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      await dispatch(updateProfile(formData));

      router.push("/Admin/Profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleNavigation = () => {
    router.push("/Admin/changepassword");
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <>
      <PrivateRoute allowedRole="1">
        <Heading size={"lg"}>Profile</Heading>

        <Stack
          w={["auto", "500px"]}
          bg={"#323232"}
          p={"2rem"}
          my={[10, 20]}
          marginInline={"auto"}
        >
          <HStack w={"100%"}>
            <Icon
              className="thin-lines-icon"
              color={"#55DF01"}
              w={"100%"}
              top={"-24"}
              position="relative"
              style={{ marginInline: "auto" }}
              borderRadius={"full"}
              as={BiUserCircle}
              boxSize={36}
            />
            <Icon
              top={"-16"}
              position="relative"
              as={FiEdit3}
              color={"whiteAlpha.600"}
              boxSize={8}
              w={"7%"}
            />
          </HStack>
          <VStack
            pb={10}
            alignItems={["center", "flex-start"]}
            justifyContent={"center"}
            w={["auto", "100%"]}
          >
            <Text fontWeight={"bold"}>Username</Text>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              mb={"1rem"}
            />
            <Text fontWeight={"bold"}>E-mail address</Text>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              mb={"1rem"}
            />
            <Text fontWeight={"bold"}>Phone Number</Text>
            <Input
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleChange}
              mb={"1rem"}
              type="number"
              placeholder="+91 098765432"
            />
            <Button w={"100%"} onClick={handleNavigation}>
              Change Password
            </Button>
            <Button w={"100%"} onClick={handleUpdateProfile}>
              Update Profile
            </Button>
            <Button w={"100%"} onClick={handleLogout}>
              Log Out
            </Button>
          </VStack>
        </Stack>
      </PrivateRoute>
    </>
  );
}
