import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { OTP, SignIn, SignUp } from "../../components/User/AuthModal";

const Navbar = ({ onOpen, setAuthChoice }) => {
  const handleClick = () => {
    setAuthChoice("Login");
    onOpen();
  };
  return (
    <HStack p={["1rem", "3rem"]} w={"full"} justifyContent={"space-between"}>
      <Image
        w={"150px"}
        h={"50px"}
        src="/assests/videe0/Logo/Black _ White/sideBarLogo.png"
      />
      <Button w={["30%", "15%", "10%"]} onClick={handleClick}>
        Sign In
      </Button>
    </HStack>
  );
};

const UserModal = ({ isOpen, onClose, authChoice, setAuthChoice }) => {
  console.log(authChoice);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h={"auto"} w={"100%"} bg={"black"}>
        <ModalCloseButton />
        <ModalBody justifyContent={"center"} alignItems={"center"}>
          {authChoice === "Login" ? (
            <SignIn setAuthChoice={setAuthChoice} />
          ) : authChoice === "Signup" ? (
            <SignUp setAuthChoice={setAuthChoice} />
          ) : authChoice === "OTP" ? (
            <OTP setAuthChoice={setAuthChoice} />
          ) : null}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authChoice, setAuthChoice] = useState("Login");
  return (
    <Box h={"100vh"} w={"100%"}>
      <Navbar setAuthChoice={setAuthChoice} onOpen={onOpen} />
      <VStack
        h={"70vh"}
        spacing={"2rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading size={["2xl", "3xl"]} textAlign={"center"}>
          Unlimited Movies, TV Shows and more
        </Heading>
        <Heading
          color={"#fff"}
          fontWeight={"normal"}
          size={["md", "lg"]}
          textAlign={"center"}
        >
          Watch Anywhere. Cancel Anytime
        </Heading>
        <Heading
          color={"#fff"}
          fontWeight={"normal"}
          size={["md", "lg"]}
          textAlign={"center"}
        >
          Ready to watch? Enter your email to create or restart your membership
        </Heading>
        <Stack
          justifyContent={"center"}
          w={"60%"}
          direction={["column", "row"]}
        >
          <Input
            w={["100%", "50%"]}
            border={"1px solid transparent"}
            bg={"#414141"}
            placeholder="Email Address"
          />
          <Button
            w={["100%", "20%"]}
            rightIcon={<ChevronRightIcon boxSize={6} />}
          >
            Get Started
          </Button>
        </Stack>
        <UserModal
          authChoice={authChoice}
          setAuthChoice={setAuthChoice}
          isOpen={isOpen}
          onClose={onClose}
        />
      </VStack>
    </Box>
  );
};

export { Navbar };

export default Index;
