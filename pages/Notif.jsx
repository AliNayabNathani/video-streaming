import {
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PageHeading } from "../components/Admin/SmallReusableComponents/Heading";

const Window = () => (
  <Stack bg={"#232323"} w={["auto", "500px"]} p={[8, 16]} alignSelf={"center"}>
    <VStack alignItems={"flex-start"} w={"100%"} alignSelf={"center"}>
      <Text>Select User:</Text>
      <Select defaultValue={"Viewers"} focusBorderColor="#323232">
        <option value="Viewers">Viewers</option>
        <option value="Content Creators">Content Creators</option>
        <option value="Both">Both</option>
      </Select>
    </VStack>
    <VStack alignItems={"flex-start"} w={"100%"} alignSelf={"center"}>
      <Text>Title: </Text>
      <Input focusBorderColor="#323232" />
    </VStack>
    <VStack alignItems={"flex-start"} alignSelf={"center"} w={"100%"}>
      <Flex direction={"column"} height={"100%"}>
        <Text justifyContent={"start"}>Enter Description: </Text>
      </Flex>
      <Input height={"10rem"} focusBorderColor="#323232" />
    </VStack>

    <Button variant={"solid"} my={4} w={"50%"} alignSelf={"center"}>
      Send
    </Button>
  </Stack>
);

export default function CustomPushNotif() {
  return (
    <>
      <Stack w={"100%"} alignItems={["center", "flex-start"]}>
        <PageHeading text={"Custom Push Notifcations"} />
        <Window />
      </Stack>
    </>
  );
}
