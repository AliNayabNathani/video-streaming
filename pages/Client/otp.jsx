import {
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Launch from "../../components/Client/Templates/Launch";
import { generateHideOnMobileCSS } from "../../components/Client/GlobalCSS/GlobalCSSStye";
import "./Style.css";

const DummyUser = [
  {
    email: "Abheshkhemani@gmail.com",
    password: "Abheesh123",
  },
];

export default function SignIn() {
  const router = useRouter();
  const [optNumber, setOptNumber] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  console.log(optNumber);
  const handleInputChange = (index, value) => {
    if (/^[0-9]$/.test(value)) {
      const tempOptNumber = [...optNumber];
      tempOptNumber[index] = value;
      setOptNumber(tempOptNumber);
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      const tempOptNumber = [...optNumber];
      tempOptNumber[index] = "";
      setOptNumber(tempOptNumber);
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <Launch>
      <VStack
        m={["2rem", "5rem"]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          spacing={"2rem"}
          p={["2rem", "5rem"]}
          w={["auto", "80%"]}
          h={["auto", "60%"]}
          bg={"#232323"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={{ base: "column", md: "row" }}
        >
          {/* <style>{generateHideOnMobileCSS()}</style> */}
          <VStack
            alignItems={"center"}
            alignSelf={"center"}
            justifyItems={"center"}
            w={["auto", "40%"]}
          >
            <Image
              alt="logo"
              w={["150px", "250px"]}
              className="hide-on-mobile"
              src="/assests/videe0/Logo/Black _ White/sideBarLogo.png"
            />
          </VStack>
          <div className="divider-line"></div>
          <VStack
            w={["auto", "40%"]}
            alignItems={"center"}
            alignSelf={"center"}
            justifyItems={"center"}
          >
            <Heading mb={"2rem"}>OTP Verification</Heading>
            <Text mb={"2rem"}>Verify by E-mail</Text>
            <HStack mb={"2rem"}>
              {optNumber.map((value, index) => (
                <Input
                  fontSize={"xl"}
                  textAlign={"center"}
                  key={index}
                  bg={"black"}
                  px={0}
                  py={[0, 6]}
                  border={"1px solid #55DF01"}
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </HStack>
            <Button mb={"2rem"}>Submit</Button>
            <Heading mb={"2rem"} size={"md"} textDecor={"underline"}>
              Resend OTP
            </Heading>
          </VStack>
        </Stack>
      </VStack>
    </Launch>
  );
}
