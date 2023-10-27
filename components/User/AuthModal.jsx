import {
  Box,
  Button,
  Checkbox,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { AiFillApple, AiFillFacebook } from "react-icons/ai";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login, register, reset } from "../../features/auth/authSlice";
import axios from "axios";
import { server } from "../server";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoogleIcon = () => {
  return (
    <Image boxSize={8} src="/assests/videe0/google_icon_geeksvgs.com.svg" />
  );
};

const SignIn = ({ setAuthChoice }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );
  const roleId = user?.user?.roleId;
  const userId = user?.user?.userId;
  console.log(userId);
  useEffect(() => {
    const roleId = user?.user?.roleId;

    async function fetchData() {
      await axios.post(
        server + "user/addDevice",
        { userId: userId },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
    }

    if (isSuccess || user) {
      fetchData();
    }
  }, [user, isError, isSuccess, message, router, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    const response = await dispatch(login(userData));
    console.log("LOGIN RESPONSE", response);
    if (response.payload.msg === "Logged In") {
      toast.success(`Welcome Back`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      router.push("/User/Dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <Box h={"100%"} bg={"black"}>
      <VStack
        h={"100%"}
        justifyContent={"center"}
        p={"2rem"}
        alignContent={"center"}
        spacing={"2rem"}
      >
        <Heading size="lg">Log In</Heading>
        <Box w={"100%"}>
          <Text color={"#fff"} mb={"0.5rem"}>
            E-mail
          </Text>
          <Input
            bg={"#fff"}
            color={"black"}
            w={"100%"}
            border={"none"}
            placeholder="@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text color={"#fff"} mb={"0.5rem"}>
            Password
          </Text>
          <Input
            bg={"#fff"}
            color={"black"}
            w={"100%"}
            type="password"
            border={"none"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Button w={"100%"} onClick={handleLogin} isLoading={isLoading}>
          Log In
        </Button>

        <Box textAlign={"center"} w={"100%"}>
          <Text color={"#fff"} mb={"0.5rem"}>
            If you don't have a account then{" "}
            <a
              style={{ color: "#55DF01", cursor: "pointer" }}
              onClick={() => setAuthChoice("Signup")}
            >
              Register
            </a>
          </Text>
          <Text color={"#fff"} mb={"1rem"}>
            Or Sign Up using{" "}
          </Text>
          <HStack
            width={["100%", "100%"]}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <GoogleIcon />
            <Icon boxSize={10} as={AiFillFacebook} color={"blue.500"} />
            <Icon boxSize={10} as={AiFillApple} color={"whiteAlpha.500"} />
          </HStack>
        </Box>
      </VStack>
      <ToastContainer autoClose={4000} />
    </Box>
  );
};

const SignUp = ({ setAuthChoice }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );
  const [Info, SetInfo] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    mobile_number: "",
    confirm_password: "",
  });

  const { name, password, email, mobile_number, confirm_password, gender } =
    Info;

  useEffect(() => {
    const roleId = user?.user?.roleId;
    if (isError) {
      alert(message);
    }

    if (isSuccess || user) {
      if (roleId == 2) {
        router.push("/User/Dashboard");
      } else {
        alert("Not a User, Sign Up");
      }
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, router, dispatch]);

  const HandleSubmit = (e) => {
    if (password != confirm_password) {
      alert("Password don`t match");
      return;
    }
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      mobile_number,
      gender,
    };
    dispatch(register(userData));
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    console.log(Info);
    SetInfo({
      ...Info,
      [name]: value,
    });
  };
  return (
    <Box h={"100%"} bg={"black"}>
      <VStack
        h={"100%"}
        w={"100%"}
        justifyContent={"center"}
        p={"2rem"}
        alignContent={"center"}
        spacing={"2rem"}
      >
        <Heading size="md">Sign Up</Heading>
        <Box w={"100%"}>
          <Text color={"#fff"} mb={"0.5rem"}>
            Name
          </Text>
          <Input
            mb={"0.5rem"}
            color={"black"}
            bg={"#fff"}
            name="name"
            w={"100%"}
            placeholder="John Doe"
            onChange={HandleChange}
          />

          <Text color={"#fff"} mb={"0.5rem"}>
            E-mail
          </Text>
          <Input
            mb={"0.5rem"}
            color={"black"}
            bg={"#fff"}
            name="email"
            type="email"
            w={"100%"}
            placeholder="@email.com"
            onChange={HandleChange}
          />

          <Text color={"#fff"} mb={"0.5rem"}>
            Gender
          </Text>
          <Select
            name="gender"
            color={"black"}
            bg={"#fff"}
            value={Info.gender}
            onChange={HandleChange}
          >
            <option bg={"#fff"} color={"black"} name="Male">
              Male
            </option>
            <option bg={"#fff"} color={"black"} name="Female">
              Female
            </option>
            <option bg={"#fff"} color={"black"} name="Other">
              Other
            </option>
          </Select>

          <Text color={"#fff"} mb={"0.5rem"}>
            Phone Number
          </Text>
          <Input
            mb={"0.5rem"}
            color={"black"}
            bg={"#fff"}
            name="mobile_number"
            type="number"
            w={"100%"}
            placeholder="Enter your number"
            onChange={HandleChange}
          />

          <Text color={"#fff"} mb={"0.5rem"}>
            Password
          </Text>
          <Input
            mb={"0.5rem"}
            color={"black"}
            bg={"#fff"}
            type="password"
            name="password"
            w={"100%"}
            placeholder="Password"
            onChange={HandleChange}
          />

          <Text color={"#fff"} mb={"0.5rem"}>
            Confirm Password
          </Text>
          <Input
            mb={"0.5rem"}
            color={"black"}
            bg={"#fff"}
            w={"100%"}
            type="password"
            name="confirm_password"
            placeholder="Password"
            onChange={HandleChange}
          />

          <div style={{ fontSize: "12px" }}>
            <Checkbox colorScheme={"customGreen"} color={"#9c9c9c"} size={"sm"}>
              Agree to the terms & conditions and privacy policy
            </Checkbox>
          </div>
        </Box>

        {/* <Button w={'100%'} onClick={() => setAuthChoice('OTP')}>Sign Up</Button> */}
        <Button w={"100%"} onClick={HandleSubmit}>
          Sign Up
        </Button>

        <Box textAlign={"center"} w={"100%"}>
          <Text color={"#fff"} mb={"1rem"}>
            {" "}
            Or Sign Up using{" "}
          </Text>
          <HStack
            width={["100%", "100%"]}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <GoogleIcon />
            <Icon boxSize={10} as={AiFillFacebook} color={"blue.500"} />
            <Icon boxSize={10} as={AiFillApple} color={"whiteAlpha.500"} />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

const OTP = ({ setAuthChoice }) => {
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
    <VStack bg={"black"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        p={"3rem"}
        spacing={"2rem"}
        w={["auto", "80%"]}
        h={["auto", "60%"]}
        justifyContent={"center"}
        alignItems={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <div className="divider-line"></div>
        <VStack
          alignItems={"center"}
          alignSelf={"center"}
          justifyItems={"center"}
        >
          <Heading mb={"2rem"}>OTP Verification</Heading>
          <Text mb={"2rem"}>Verify by E-mail</Text>
          <HStack mb={"5rem"}>
            {optNumber.map((value, index) => (
              <Input
                textAlign={"center"}
                key={index}
                bg={"black"}
                color={"#fff"}
                w={"50px"}
                border={"1px solid #55DF01"}
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </HStack>
          <Button
            mb={"1rem"}
            size={"md"}
            onClick={() => router.push("User/UserSelection")}
          >
            Submit
          </Button>
          <Heading size={"sm"} textDecor={"underline"}>
            Resend OTP
          </Heading>
        </VStack>
      </Stack>
    </VStack>
  );
};

export { SignIn, SignUp, OTP };
