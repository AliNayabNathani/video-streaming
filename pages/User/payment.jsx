import React, { useState } from "react";
import { Navbar } from ".";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Style.css";
import { AiOutlineCalendar } from "react-icons/ai";

const DebitCard = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Text my={"0.5rem"}>Card Number</Text>
      <Input bg={"#232323"} max={"16"} type="number" border={"none"} />

      <HStack my={"1rem"} w={"100%"}>
        <div style={{ width: "100%" }}>
          <Text my={"0.5rem"}>Expiry Date: </Text>
          <Box className="custom-datepicker">
            <DatePicker
              className="datepicker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Box>
        </div>
        <div style={{ width: "100%" }}>
          <Text my={"0.5rem"}>CVV: </Text>
          <Box>
            <Input bg={"#232323"} max={"3"} type="number" border={"none"} />
          </Box>
        </div>
      </HStack>
    </>
  );
};

const payment = () => {
  const [card, setCard] = useState("credit");
  const [startDate, setStartDate] = useState(new Date());
  const [cardNumber, setCardNumber] = useState();
  const [CVV, setCVV] = useState();
  const handleCardNumber = (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length <= 16) {
      setCardNumber(e.target.value);
    }
  };

  const handleCVV = (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length <= 3) {
      setCVV(e.target.value);
    }
  };

  return (
    <>
      <Navbar />
      <Box px={32} py={16}>
        <Heading mb={8}>Choose how to Pay</Heading>
        <Select border={"1px solid #55DF01"}>
          <option
            onChange={() => setCard("credit")}
            style={{ bg: "#232323" }}
            value=""
          >
            Pay via Credit Card
          </option>
          <option
            onChange={() => setCard("debit")}
            style={{ bg: "#232323" }}
            value=""
          >
            Pay via Debit Card
          </option>
        </Select>
        <Text my={"0.5rem"}>Card Number</Text>
        <Input
          onChange={handleCardNumber}
          value={cardNumber}
          bg={"#232323"}
          type="number"
          border={"none"}
        />

        <HStack my={"1rem"} w={"100%"}>
          <div style={{ width: "100%" }}>
            <Text my={"0.5rem"}>Expiry Date: </Text>
            <Box className="custom-datepicker">
              <DatePicker
                className="datepicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Box>
          </div>
          <div style={{ width: "100%" }}>
            <Text my={"0.5rem"}>CVV: </Text>
            <Box>
              <Input
                bg={"#232323"}
                onChange={handleCVV}
                value={CVV}
                type="number"
                border={"none"}
              />
            </Box>
          </div>
        </HStack>

        <Flex mt={16} justifyContent={"center"}>
          <Button size={"lg"} px={16} py={4}>
            Purchase
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default payment;
