import React, { useEffect } from "react";
import UserTemplate from "../../components/User/UserTemplate";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Switch,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  BiExit,
  BiHelpCircle,
  BiImageAdd,
  BiNews,
  BiUser,
} from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdCall, MdLocationOn } from "react-icons/md";
import { BsDownload, BsFillPlusCircleFill, BsShield } from "react-icons/bs";
import {
  AiFillFileImage,
  AiFillFileText,
  AiOutlineArrowLeft,
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineWifi,
} from "react-icons/ai";
import { useState } from "react";
import { HiTrash } from "react-icons/hi";
import axios from "axios";
import { pictureServer, server } from "../../components/server";
import { useSelector } from "react-redux";
import Chatbot from "../../components/User/ChatBot";

const userDetails = [
  {
    name: "Abheesh",
    avatar: "/assests/People/cena.jpg",
  },
  {
    name: "Nayab",
    avatar: "/assests/People/cena.jpg",
  },
  {
    name: "Shahmir",
    avatar: "/assests/People/cena.jpg",
  },
];

const AccessList = [
  {
    device: "Samsung Galaxy S21",
    name: "Mom",
    accessDate: "15-11-2022",
    accessTime: "7:45 pm",
    location: "New York, USA",
  },
  {
    device: "Google Pixel 6",
    name: "Brother",
    accessDate: "18-11-2022",
    accessTime: "10:30 am",
    location: "Los Angeles, USA",
  },
  {
    device: "Sony Xperia 1",
    name: "Sister",
    accessDate: "22-11-2022",
    accessTime: "1:15 pm",
    location: "Paris, France",
  },
  {
    device: "OnePlus 9",
    name: "John",
    accessDate: "25-11-2022",
    accessTime: "5:20 pm",
    location: "Sydney, Australia",
  },
  {
    device: "Xiaomi Mi 11",
    name: "Dave",
    accessDate: "01-12-2022",
    accessTime: "8:00 am",
    location: "Tokyo, Japan",
  },
];

const DownloadAccessList = [
  {
    device: "iPhone",
    date: "29-10-2022",
  },
  {
    device: "Android Phone",
    date: "15-11-2022",
  },
  {
    device: "iPad",
    date: "05-12-2022",
  },
  {
    device: "Google Pixel",
    date: "22-12-2022",
  },
  {
    device: "Samsung Galaxy S21",
    date: "07-01-2023",
  },
];

const planData = [
  {
    contentcreator: "Zack",
    price: "199",
    start_date: "15-11-2022",
    end_date: "15-12-2022",
    card: "1111222233334444",
  },
  {
    contentcreator: "Emily",
    price: "149",
    start_date: "10-12-2022",
    end_date: "10-01-2023",
    card: "2222333344445555",
  },
  {
    contentcreator: "Sam",
    price: "249",
    start_date: "05-11-2022",
    end_date: "05-12-2022",
    card: "3333444455556666",
  },
  {
    contentcreator: "Lily",
    price: "179",
    start_date: "20-11-2022",
    end_date: "20-12-2022",
    card: "4444555566667777",
  },
  {
    contentcreator: "Max",
    price: "299",
    start_date: "01-12-2022",
    end_date: "01-01-2023",
    card: "5555666677778888",
  },
];

const EpisodeOutline = ({ children, setContent, text }) => {
  const handleClick = (text) => {
    setContent(text);
  };

  return (
    <Button
      _active={{ color: "#55DF01", border: "1px solid #55DF01" }}
      bg={"transparent"}
      fontWeight={["normal", "bold"]}
      variant={"outline"}
      onClick={() => handleClick(text)}
      borderRadius={"0"}
      py={4}
      px={[0, 2]}
      fontSize={{ base: "sm", md: "md" }}
      w={"100%"}
    >
      {children}
    </Button>
  );
};

// Actions
const Account = () => {
  const [AccountContent, setAccountContent] = useState("Account");

  return (
    <Box w={"100%"} px={[0, 8]} mx={[0, 8]}>
      <Flex alignContent={"center"} my={8} justifyContent={"flex-start"}>
        <AiOutlineArrowLeft size={32} />
        <Heading size={"lg"} ml={4}>
          Account
        </Heading>
      </Flex>
      <Stack
        pb={8}
        direction={["column", "row"]}
        w={"100%"}
        my={4}
        spacing={[2, 0]}
        borderRight={"2px solid black"}
      >
        <EpisodeOutline text="Plan" setContent={setAccountContent}>
          Plan
        </EpisodeOutline>

        <EpisodeOutline text="Billing" setContent={setAccountContent}>
          Billing
        </EpisodeOutline>

        <EpisodeOutline text="Membership" setContent={setAccountContent}>
          Membership
        </EpisodeOutline>

        <EpisodeOutline text="Security" setContent={setAccountContent}>
          Security
        </EpisodeOutline>

        <EpisodeOutline text="Setting" setContent={setAccountContent}>
          Settings
        </EpisodeOutline>

        <EpisodeOutline text="Delete Account" setContent={setAccountContent}>
          Delete Account
        </EpisodeOutline>
      </Stack>
      <Box maxW={"100%"} px={[0, 8]} mx={[4, 8]}>
        {AccountContent === "Plan" ? (
          <Plan />
        ) : AccountContent === "Billing" ? (
          <Billing />
        ) : AccountContent === "Membership" ? (
          <Membership />
        ) : AccountContent === "Security" ? (
          <Security />
        ) : AccountContent === "Setting" ? (
          <Settings />
        ) : AccountContent === "Delete Account" ? (
          <Delete />
        ) : null}
      </Box>
    </Box>
  );
};

const AppSetting = () => {
  const resolutionOptions = ["720p", "1080p", "2K", "4K"];

  function ResolutionSlider() {
    const [selectedResolution, setSelectedResolution] = useState(
      resolutionOptions[0]
    );
    const labelStyles = {
      mt: "2",
      ml: "-7.5",
      fontSize: "sm",
      color: "#9c9c9c",
    };
    const handleResolutionChange = (value) => {
      setSelectedResolution(resolutionOptions[value - 1]);
    };

    const getResolutionIndex = () => {
      return resolutionOptions.indexOf(selectedResolution);
    };

    return (
      <HStack w={"100%"} my={8} spacing={4}>
        <Text>Resolution: {selectedResolution}</Text>
        <Slider
          min={1}
          max={resolutionOptions.length}
          step={1}
          colorScheme="customGreen"
          value={getResolutionIndex() + 1}
          onChange={handleResolutionChange}
        >
          <SliderMark value={1} {...labelStyles}>
            720p
          </SliderMark>
          <SliderMark value={2} {...labelStyles}>
            1080p
          </SliderMark>
          <SliderMark value={3} {...labelStyles}>
            2K
          </SliderMark>
          <SliderMark value={4} {...labelStyles}>
            4K
          </SliderMark>

          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb bg={"#55DF01"} />
        </Slider>
      </HStack>
    );
  }
  return (
    <Box maxW={"100%"} minW={"70%"} px={[0, 8]} mx={[4, 8]}>
      <HStack>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>App Settings</Heading>
      </HStack>

      <Divider my={8} />

      <Heading mb={8} fontWeight={"semibold"} size={"lg"}>
        About
      </Heading>
      <HStack mb={2} spacing={4}>
        <AiFillFileText size={24} />
        <Text fontSize={"1.2rem"}>Privacy Policy</Text>
      </HStack>
      <HStack mb={2} spacing={4}>
        <BsShield size={24} />
        <Text fontSize={"1.2rem"}>Do/Dont sell my info</Text>
      </HStack>

      <Divider my={8} />

      <Heading mb={8} fontWeight={"semibold"} size={"lg"}>
        Video Playback
      </Heading>
      <HStack mb={2} spacing={4}>
        <svg
          style={{ width: 24, height: 24 }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#1d8780"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#fffCCCCCC"
            stroke-width="0.096"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M16.2426 7.75738C18.5858 10.1005 18.5858 13.8995 16.2426 16.2427M7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75735M4.92893 19.0711C1.02369 15.1658 1.02369 8.8342 4.92893 4.92896M19.0711 4.929C22.9763 8.83424 22.9763 15.1659 19.0711 19.0711M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8955 10.8954 10 12 10C13.1046 10 14 10.8955 14 12Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <Text fontSize={"1.2rem"}>Cellular data usage</Text>
      </HStack>

      <Divider my={8} />

      <Heading mb={8} fontWeight={"semibold"} size={"lg"}>
        Downloads
      </Heading>
      <HStack
        w={["100%", "50%"]}
        justifyContent={"space-between"}
        mb={2}
        spacing={4}
      >
        <AiOutlineWifi size={32} />
        <Text w={"100%"} textAlign={"start"} color={"white"}>
          Wifi Only
        </Text>
        <Switch colorScheme="customGreen" />
      </HStack>
      <HStack
        w={["100%", "50%"]}
        justifyContent={"space-between"}
        mb={2}
        spacing={4}
      >
        <BsDownload size={32} />
        <Text w={"100%"} color={"white"}>
          Download next episode
        </Text>
        <Switch colorScheme="customGreen" />
      </HStack>
      <HStack mb={2} spacing={4}>
        <BiNews size={24} />
        <Text w={"100%"} color={"white"}>
          Video Quality
        </Text>
      </HStack>

      <ResolutionSlider />

      <Divider my={8} />
      <Button
        size={"lg"}
        bg={"transparent"}
        color={"red"}
        leftIcon={<HiTrash color="red" />}
      >
        Delete Downloads
      </Button>
    </Box>
  );
};

const Help = () => {
  const [HelpContent, setHelpContent] = useState("Account");

  return (
    <Box w={"100%"} px={[0, 8]} mx={[0, 8]}>
      <Stack
        pb={8}
        direction={["column", "row"]}
        w={"100%"}
        my={4}
        spacing={[2, 0]}
        borderRight={"2px solid black"}
      >
        <EpisodeOutline text="Recover Password" setContent={setHelpContent}>
          Recover Password
        </EpisodeOutline>

        <EpisodeOutline text="Terms and Conditions" setContent={setHelpContent}>
          Terms and Conditions
        </EpisodeOutline>

        <EpisodeOutline text="Privacy Policy" setContent={setHelpContent}>
          Privacy Policy
        </EpisodeOutline>

        <EpisodeOutline text="Support Center" setContent={setHelpContent}>
          Support Center
        </EpisodeOutline>
      </Stack>
      <Box maxW={"100%"} px={[0, 8]} mx={[4, 8]}>
        {HelpContent === "Recover Password" ? (
          <RecoverPassword />
        ) : HelpContent === "Terms and Conditions" ? (
          <TermsConditions />
        ) : HelpContent === "Privacy Policy" ? (
          <PrivacyPolicy />
        ) : HelpContent === "Support Center" ? (
          <Support />
        ) : null}
      </Box>
    </Box>
  );
};

const Contact = () => {
  const { user } = useSelector((state) => state.auth);
  const userId = user?.user?.userId;
  console.log(userId);
  const [complaint, setComplaint] = useState();
  const sendEmail = async () => {
    await axios
      .post(
        server + "user/sendTestMailToSupport",
        { userId, complaint },
        {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    await axios
      .post(
        server + "user/sendTestMailToUser",
        { userId, complaint },
        {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Box maxW={"100%"} px={[0, 8]} mx={[4, 8]}>
      <HStack>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Help</Heading>
      </HStack>

      <Divider my={8} />
      <Box my={4}>
        <Text mb={2}>Describe your issue</Text>
        <Input
          placeholder="type your issues"
          onChange={(e) => setComplaint(e.target.value)}
        />
      </Box>
      <Stack direction={["column", "row"]} justifyContent={"flex-end"}>
        <Button px={[0, 16]} onClick={sendEmail}>
          Submit
        </Button>
        <Button px={[0, 16]}>Call</Button>
        <Button px={[0, 16]} variant={"outline"}>
          Live Chat
        </Button>
      </Stack>
    </Box>
  );
};

const SignOut = () => {
  return <></>;
};
//Account Sub Sections

const Plan = () => {
  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Subscription Plans Details</Heading>
      </HStack>
      {planData.map((plan, index) => {
        return (
          <div style={{ width: "100%" }} key={index}>
            <Divider my={4} />
            <HStack w={["100%", "40%"]} justifyContent={"space-between"}>
              <Text fontWeight={"semibold"} color={"white"}>
                Content Creator
              </Text>
              <Text color={"white"} textAlign={"start"}>
                {" "}
                {plan.contentcreator}
              </Text>
            </HStack>
            <HStack w={["100%", "40%"]} justifyContent={"space-between"}>
              <Text fontWeight={"semibold"} color={"white"}>
                Plan
              </Text>
              <Text color={"white"} textAlign={"start"}>
                {" "}
                ${plan.price} / month
              </Text>
            </HStack>
            <HStack w={["100%", "40%"]} justifyContent={"space-between"}>
              <Text fontWeight={"semibold"} color={"white"}>
                {" "}
                Billing Date
              </Text>
              <Text color={"white"} textAlign={"start"}>
                {" "}
                {plan.start_date}- {plan.end_date}
              </Text>
            </HStack>
          </div>
        );
      })}
    </Box>
  );
};

const Billing = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user.user.email);

  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Membership / Billing</Heading>
      </HStack>
      <Divider my={8} />
      <Box mb={4}>
        <Text mb={2}>E-mail</Text>
        <Input value={user?.user?.email} placeholder="abc@xyz.com" disabled />
      </Box>
      <Box mb={4}>
        <Text mb={2}>Password</Text>
        <Input placeholder="password" type="password" disabled />
      </Box>

      <Flex justifyContent={"center"}>
        <Button px={16} fontSize={"1.2rem"}>
          Cancel Membership
        </Button>
      </Flex>
    </Box>
  );
};

const Membership = () => {
  const ActivityOutline = ({ access }) => (
    <Box my={4} borderRadius={8} p={8} bg={"#232323"}>
      <HStack justifyContent={"space-between"}>
        <Heading size={"md"}>{access.device}</Heading>
        <Button variant={"outline"}>Sign Out</Button>
      </HStack>
      <Divider my={4} />
      <HStack>
        <BiUser color="#9c9c9c" />
        <Text>{access.name}</Text>
      </HStack>
      <HStack>
        <AiOutlineClockCircle color="#9c9c9c" />
        <Text>
          {" "}
          Last watch {access.accessDate}. {access.accessTime}
        </Text>
      </HStack>
      <HStack>
        <MdLocationOn color="#9c9c9c" />
        <Text>{access.location}</Text>
      </HStack>
    </Box>
  );

  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Membership / Billing</Heading>
      </HStack>
      <Divider my={8} />
      <Box my={8}>
        <Heading mb={2} size={"md"}>
          Manage and access devices
        </Heading>
        <Text>
          These signed- in devices have recently been active on this account.
          you can sign out any un-familiar or{" "}
          <a style={{ color: "#55DF01" }}>change your password</a> for added
          security.
        </Text>
      </Box>
      {AccessList.map((access, index) => (
        <ActivityOutline access={access} key={index} />
      ))}
    </Box>
  );
};

const Security = () => {
  const [deviceData, setDeviceData] = useState();

  console.log(deviceData);
  useEffect(() => {
    axios
      .get(server + "user/getDevice", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => setDeviceData(res?.data?.device))
      .catch((err) => console.log(err));
  }, []);

  const ActivityOutline = ({ access }) => {
    const date = access?.updatedAt?.slice(0, 10);
    const time = access?.updatedAt?.slice(11, 16);
    console.log(date, time);

    return (
      <Box my={4} borderRadius={8} p={8} bg={"#232323"}>
        <HStack justifyContent={"space-between"}>
          <Heading size={"md"}>{access.model || access.os}</Heading>
          <Button variant={"outline"}>Sign Out</Button>
        </HStack>
        <Divider my={4} />
        <HStack>
          <AiOutlineClockCircle color="#9c9c9c" />
          <Text>
            {" "}
            Last watch {date} {time}
          </Text>
        </HStack>
        <HStack>
          <MdLocationOn color="#9c9c9c" />
          <Text>{access.location}</Text>
        </HStack>
      </Box>
    );
  };

  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Membership / Billing</Heading>
      </HStack>
      <Divider my={8} />
      <Box my={8}>
        <Heading mb={2} size={"md"}>
          Manage and access devices
        </Heading>
        <Text>
          These signed- in devices have recently been active on this account.
          you can sign out any un-familiar or{" "}
          <a style={{ color: "#55DF01" }}>change your password</a> for added
          security.
        </Text>
      </Box>
      {deviceData?.map((access, index) => (
        <ActivityOutline access={access} key={index} />
      ))}
    </Box>
  );
};

const Settings = () => {
  const ActivityOutline = ({ download }) => (
    <Box my={4} borderRadius={8} p={8} bg={"#232323"}>
      <HStack justifyContent={"space-between"}>
        <Heading size={"md"}>{download.device}</Heading>
        <Button variant={"outline"}>Sign Out</Button>
      </HStack>
      <Divider my={4} />
      <HStack my={2}>
        <AiOutlineClockCircle color="#9c9c9c" />
        <Text> Last Download on {download.date}</Text>
      </HStack>
      <HStack my={2}>
        <ChevronRightIcon color="#55DF01" />
        <Text color={"#55DF01"}>Show downloads</Text>
      </HStack>
      <Button my={2}>Remove Devices</Button>
    </Box>
  );

  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Settings</Heading>
      </HStack>
      <Divider my={8} />
      <Box my={8}>
        <Heading mb={2} size={"md"}>
          Manage download devices
        </Heading>
        <Text>
          Your plan allows downloads on 2 devices. when you remove a device, all
          downloads.
        </Text>
      </Box>
      {DownloadAccessList.map((download, index) => (
        <ActivityOutline download={download} key={index} />
      ))}
    </Box>
  );
};

const Delete = () => {
  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Settings</Heading>
      </HStack>
      <Divider my={8} />
      <Heading size={"md"}>Confirm your Identity</Heading>
      <HStack
        spacing={4}
        my={4}
        borderRadius={8}
        p={2}
        border={"1px solid #9c9c9c"}
      >
        <AiOutlineMail color="#9c9c9c" size={40} />
        <VStack>
          <Text fontSize={"1.2rem"}>Email a code</Text>
          <Text>abc@gmail.com</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

//Help Sub Sections
const RecoverPassword = () => {
  const { user } = useSelector((state) => state.auth);
  const [oldPassword, setOldPasword] = useState();
  const [newPassword, setNewPasword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleChange = () => {
    if (newPassword == confirmPassword) {
      axios
        .patch(
          server + "auth/changepassword",
          {
            userId: user?.user?.userId,
            oldPassword,
            newPassword,
          },
          {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert("New Password and Confirm New Password are different");
    }
  };

  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Recover Password</Heading>
      </HStack>
      <Divider my={4} />

      <Box w={["100%", "60%"]} my={4}>
        <Text mb={"0.5rem"}>Old Password</Text>
        <Input
          onChange={(e) => setOldPasword(e.target.value)}
          value={oldPassword}
          type="password"
          placeholder="**********"
        />
      </Box>
      <Box w={["100%", "60%"]} my={4}>
        <Text mb={"0.5rem"}>New Password</Text>
        <Input
          onChange={(e) => setNewPasword(e.target.value)}
          value={newPassword}
          type="password"
          placeholder="**********"
        />
      </Box>
      <Box w={["100%", "60%"]} my={4}>
        <Text mb={"0.5rem"}>Confirm New Password</Text>
        <Input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="**********"
        />
      </Box>

      <Flex justifyContent={"center"}>
        <Button onClick={handleChange} px={8}>
          Change Password
        </Button>
      </Flex>
    </Box>
  );
};

const TermsConditions = () => {
  const [TermsConditions, setTermsConditions] = useState();
  useEffect(() => {
    axios
      .get(server + "user/gettTerms", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res?.data);
        setTermsConditions(res?.data?.termsAndConditionsItem);
      });
  }, []);
  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Recover Password</Heading>
      </HStack>
      <Divider my={4} />
      <Text>{TermsConditions?.description}</Text>
      <br />
    </Box>
  );
};

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState();
  useEffect(() => {
    axios
      .get(server + "user/getPrivacy", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res?.data);
        setPrivacyPolicy(res?.data?.privacyPolicyItem);
      });
  }, []);
  return (
    <Box w={"100%"}>
      <HStack mb={8} w={"100%"} spacing={4}>
        <AiOutlineArrowLeft size={24} />
        <Heading size={"md"}>Recover Password</Heading>
      </HStack>
      <Divider my={4} />
      <Text>{privacyPolicy?.description}</Text>
    </Box>
  );
};

const Support = () => {
  return <Chatbot />;
};

const AddProfile = ({ isOpen, onClose, setProfileUser, profileUser }) => {
  const [serverImage, setServerImage] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [name, setName] = useState();
  const user = useSelector((state) => state.auth);
  const userName = user?.user?.user?.name;

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    setServerImage(selectedFile);
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setSelectedImage(objectURL);
    }
    const formData = new FormData();
    formData.append("image", selectedFile);
    axios
      .post(server + "other/uploadPicture", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAdd = async () => {
    const newProfile = { userName, name, avatar: serverImage.name };
    await axios
      .post(server + "user/createProfile", newProfile, {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setProfileUser([...profileUser, newProfile]);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody py={32} px={16} bg={"#232323"}>
          <Heading textAlign={"center"} size={"lg"}>
            Add Profile
          </Heading>
          <Box mb={4}>
            <form encType="multipart/form-data">
              <Text mb={2}>Name</Text>
              <Input onChange={(e) => setName(e.target.value)} w={"100%"} />
            </form>
          </Box>

          <Box mb={4}>
            <Text mb={2}>Upload your picture</Text>
            <HStack for="fileInput" border={"1px solid #323232"} w={"100%"}>
              <Input
                type="file"
                accept="image/*"
                display="none"
                id="fileInput"
                justifyContent={"center"}
                onChange={handleFileSelect}
              />
              <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                <BiImageAdd size={64} />
              </label>
            </HStack>
            <Flex justifyContent={"center"} my={4}>
              {selectedImage && (
                <Avatar
                  size={"2xl"}
                  src={selectedImage}
                  alt="Selected Preview"
                  style={{ w: "250px", maxHeight: "150px" }}
                />
              )}
            </Flex>
          </Box>

          <Flex justifyContent={"center"}>
            <Button w={["100%", "auto"]} onClick={handleAdd}>
              Add User
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Profile = () => {
  const [content, setContent] = useState("Account");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [profileUser, setProfileUser] = useState([]);

  useEffect(() => {
    axios
      .get(server + "user/getProfiles", {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        const profileData = {
          name: "",
          avatar: "",
        };
        const data = res?.data?.members;
        data.map((d) => {
          profileData.name = d.name;
          profileData.avatar = d.avatar;
          console.log(profileData);
          setProfileUser((prevProfileUser) => [
            ...prevProfileUser,
            {
              name: d.name,
              avatar: d.avatar,
            },
          ]);
        });
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  console.log("Profile: ", profileUser);
  return (
    <UserTemplate>
      <Box px={[4, 16]} py={8}>
        <HStack mb={8}>
          <AiOutlineArrowLeft boxSize={32} />
          <Heading size={"lg"}>Manage Profile</Heading>
        </HStack>

        <HStack mx={[4, 16]} spacing={[4, 16]} overflow={"auto"}>
          {profileUser.map((profile, index) => (
            <VStack
              h={"100%"}
              spacing={4}
              alignItems={"center"}
              justifyContent={"center"}
              key={index}
            >
              <Avatar size={"2xl"} src={`${pictureServer}/${profile.avatar}`} />
              <Text mt={4} textAlign={"center"}>
                {profile.name}
              </Text>
            </VStack>
          ))}
          <VStack
            h={"100%"}
            spacing={4}
            alignItems={"center"}
            justifyContent={"center"}
            onClick={onOpen}
            cursor={"pointer"}
          >
            <Icon boxSize={16} color={"#55DF01"} as={BsFillPlusCircleFill} />
            <Text size={"lg"} color={"#55DF01"}>
              Add Profiles
            </Text>
          </VStack>
        </HStack>

        <Divider my={8} />

        <Stack direction={["column", "row"]}>
          <Box
            mb={8}
            transition="3s ease"
            borderRight="1px solid #232323"
            w={{ base: "full", md: "22rem" }}
            h="auto"
            // pos='fixed'
            overflow={"auto"}
          >
            <VStack>
              <Button
                onClick={() => setContent("Account")}
                bg={"black"}
                justifyContent={"center"}
                border={["2px solid #232323", "transparent"]}
                w={"100%"}
                color={"white"}
                leftIcon={BiUser}
              >
                Account
              </Button>
              <Button
                onClick={() => setContent("App Settings")}
                bg={"black"}
                border={["2px solid #232323", "transparent"]}
                w={"100%"}
                color={"white"}
                leftIcon={FiSettings}
              >
                App Settings
              </Button>
              <Button
                onClick={() => setContent("Help")}
                bg={"black"}
                border={["2px solid #232323", "transparent"]}
                w={"100%"}
                color={"white"}
                leftIcon={BiHelpCircle}
              >
                Help
              </Button>
              <Button
                onClick={() => setContent("Contact")}
                bg={"black"}
                border={["2px solid #232323", "transparent"]}
                w={"100%"}
                color={"white"}
                leftIcon={MdCall}
              >
                Contact
              </Button>
              <Button
                onClick={() => setContent("Sign out")}
                bg={"black"}
                border={["2px solid #232323", "transparent"]}
                w={"100%"}
                color={"white"}
                leftIcon={BiExit}
              >
                Sign out
              </Button>
            </VStack>
          </Box>

          {content === "Account" ? (
            <Account />
          ) : content === "App Settings" ? (
            <AppSetting />
          ) : content === "Help" ? (
            <Help />
          ) : content === "Contact" ? (
            <Contact />
          ) : content === "Sign out" ? (
            <SignOut />
          ) : null}
        </Stack>
      </Box>
      <AddProfile
        isOpen={isOpen}
        onClose={onClose}
        profileUser={profileUser}
        setProfileUser={setProfileUser}
      />
    </UserTemplate>
  );
};

export default Profile;
