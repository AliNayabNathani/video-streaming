import React from "react";
import UserTemplate from "../../components/User/UserTemplate";
import {
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Navbar } from "./UserSelection";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/router";

const pricing = [
  {
    name: "Basic",
    price: "4.99",
    screen: "1",
  },
  {
    name: "Standard",
    price: "7.99",
    screen: "2",
  },
  {
    name: "Premium",
    price: "9.99",
    screen: "4",
  },
];

const PricingOutline = ({ item }) => {
  return (
    <Box p={8} bg={"#232323"} borderRadius={8} justifyContent={"flex-start"}>
      <Heading mb={4} size={"md"}>
        {item.name} Plan
      </Heading>
      <Text mb={4} fontSize={"1.3rem"}>
        <b style={{ fontSize: "1.7rem", color: "#55DF01" }}>$ {item.price}</b>
        /month
      </Text>
      <Text fontSize={"1.1rem"}>
        Get started to unlimited ad-free movies, Tv shows, and mobile games
      </Text>
      <Divider my={8} />
      <HStack my={"1rem"}>
        <AiOutlineCheck color="#55DF01" />
        <Text fontSize={"1.1rem"}>
          Watch on {item.screen} supported device at a time
        </Text>
      </HStack>
      <HStack my={"1rem"}>
        <AiOutlineCheck color="#55DF01" />
        <Text fontSize={"1.1rem"}>Watch in HD</Text>
      </HStack>
      <HStack my={"1rem"}>
        <AiOutlineCheck color="#55DF01" />
        <Text fontSize={"1.1rem"}>
          Watch on mobile / TV / Tablet / Computer
        </Text>
      </HStack>
      <Flex mt={20} justifyContent={"center"}>
        <Button variant={"outline"} py={4} px={20}>
          Go {item.name}
        </Button>
      </Flex>
    </Box>
  );
};

const Pricing = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <Box px={32} py={16}>
        <Heading mb={8}>What plan is best for you?</Heading>
        <SimpleGrid mb={"3rem"} columns={[1, 2, 3]} spacing={8}>
          {pricing.map((item, index) => (
            <GridItem key={index}>
              <PricingOutline item={item} />
            </GridItem>
          ))}
        </SimpleGrid>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor
          fermentum tortor, ut feugiat lectus commodo vel. Aenean enim nunc,
          efficitur fermentum dui ut, maximus vulputate ante. Duis fringilla,
          nisl vitae auctor dictum, lacus neque ullamcorper leo, malesuada
          congue orci nisl sit amet felis.
        </Text>
        <Flex justifyContent={"flex-end"}>
          <Button onClick={() => router.push("/User/payment")} px={16}>
            Next
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Pricing;
