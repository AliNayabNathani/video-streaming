import {
  Box,
  Form,
  Button,
  ChakraProvider,
  Divider,
  Flex,
  FormLabel,
  HStack,
  Input,
  Stack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
// import { PageHeading } from "../SmallReusableComponents/Heading";
import { PageHeading } from "../components/Admin/SmallReusableComponents/Heading";
import { useState } from "react";

const DummyUser = [
  {
    name: "Abheshkhemani@gmail.com",
    password: "Abheesh123",
  },
];

const Inputs = () => {
  const [Pass, SetPass] = useState();
  const [NewPass, SetNewPass] = useState();
  const [ConfirmPass, setConfirmPass] = useState();

  const HandleSubmit = () => {
    DummyUser.map((User) => {
      if (Pass === User.password && NewPass === ConfirmPass) {
        SetPass(NewPass);
      } else alert("Incorrect Info");
    });
  };
  return (
    <VStack
      bg={"#232323"}
      border={"2px solid black"}
      borderRadius={"5px"}
      w={["auto", "auto", "50%"]}
      h={["auto", "80%"]}
      p={[5, 20]}
    >
      <form onSubmit={HandleSubmit}>
        <FormLabel>Old Password: </FormLabel>
        <Input
          mb={"1rem"}
          onChange={(e) => SetPass(e.target.value)}
          type="password"
          focusBorderColor="#323232"
        />
        <FormLabel>New Password: </FormLabel>
        <Input
          mb={"1rem"}
          onChange={(e) => SetNewPass(e.target.value)}
          type="password"
          focusBorderColor="#323232"
        />
        <FormLabel>Confirm Password: </FormLabel>
        <Input
          mb={"1rem"}
          onChange={(e) => setConfirmPass(e.target.value)}
          type="password"
          focusBorderColor="#323232"
        />

        <Button type="submit" mt={2} w={"100%"}>
          Update
        </Button>
      </form>
    </VStack>
  );
};

export default function ChangePassword() {
  return (
    <>
      <PageHeading text={"Change Password"} />
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Inputs />
      </Stack>
    </>
  );
}
