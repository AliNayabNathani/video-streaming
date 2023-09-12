import { Box, Flex } from "@chakra-ui/react";

const ContentBar = ({
  Text_1,
  Text_2,
  Text_3,
  SetSelectedButton,
  SelectedButton,
}) => {
  return (
    <Flex justifyContent="flex-start">
      <Flex>
        {Text_1 && (
          <Box
            p={{ base: "0.5rem 0.3rem", md: "1rem 4rem" }}
            fontSize={{ base: "sm", md: "md" }}
            bg={SelectedButton === Text_1 ? "#55DF01" : "transparent"}
            color={SelectedButton === Text_1 ? "white" : "#55DF01"}
            borderRadius={"5px"}
            borderColor={"#55DF01"}
            fontWeight={"semibold"}
            onClick={() => SetSelectedButton(Text_1)}
            className="Content-Bar"
            border={"1px solid #55DF01"}
            mr={5}
          >
            {Text_1}
          </Box>
        )}
        {Text_2 && (
          <Box
            p={{ base: "0.5rem", md: "1rem 4rem" }}
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={"semibold"}
            bg={SelectedButton === Text_2 ? "#55DF01" : "transparent"}
            color={SelectedButton === Text_2 ? "white" : "#55DF01"}
            borderRadius={"5px"}
            borderColor={"#55DF01"}
            onClick={() => SetSelectedButton(Text_2)}
            className="Content-Bar"
            border={"1px solid #55DF01"}
            mr={5}
          >
            {Text_2}
          </Box>
        )}
        {Text_3 && (
          <Box
            p={{ base: "0.5rem", md: "1rem 4rem" }}
            fontSize={{ base: "sm", md: "md" }}
            bg={SelectedButton === Text_3 ? "#55DF01" : "transparent"}
            color={SelectedButton === Text_3 ? "white" : "#55DF01"}
            borderRadius={"5px"}
            fontWeight={"semibold"}
            borderColor={"#55DF01"}
            onClick={() => SetSelectedButton(Text_3)}
            className="Content-Bar"
            border={"1px solid #55DF01"}
            mr={5}
          >
            {Text_3}
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export { ContentBar };
