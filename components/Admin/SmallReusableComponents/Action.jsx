import { Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { HiOutlineEye } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import { useRouter } from "next/router";

const handleNavigation = (to, router) => {
  router.push(to);
};

const Actions = ({ to }) => {
  const router = useRouter();
  return (
    <HStack align={"center"} justifyContent={"space-between"}>
      <Box onClick={() => handleNavigation(to, router)}>
        <HiOutlineEye cursor={"pointer"} size={25} />
      </Box>
      <BiEdit cursor={"pointer"} size={25} />
      <AiOutlineDelete cursor={"pointer"} size={25} />
      <ToggleButton cursor={"pointer"} />
    </HStack>
  );
};

const ToggleButton = ({ columnId, data, changeStatus }) => {
  // console.log("aoun", data);
  // console.log("DATA SWITCH", data.status);

  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    if (data?.status == "Active") {
      setIsOn(true);
    } else if (data?.status == "InActive") {
      setIsOn(false);
    }
  }, [data?.status]);

  const handleToggle = () => {
    changeStatus(columnId);
    setIsOn((prevIsOn) => !prevIsOn);
  };
  return (
    <IconButton
      aria-label={isOn ? "Turn Off" : "Turn On"}
      icon={isOn ? <FiToggleRight size={25} /> : <FiToggleLeft size={25} />}
      onClick={handleToggle}
      bg={"transparent"}
      _hover={"transparent"}
      color={isOn ? "green" : "red"}
      colorScheme="transparent"
    />
  );
};

const ContentApprovalButtons = () => (
  <>
    <Button colorScheme="green">Accept</Button>
    <Button colorScheme="red">Reject</Button>
  </>
);

export { Actions, ToggleButton, ContentApprovalButtons };
