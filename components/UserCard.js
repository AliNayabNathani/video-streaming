// components/UserCard.js
import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Avatar,
  Badge,
} from "@chakra-ui/react";

function UserCard({ user }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p="4"
    >
      <Flex align="center">
        <Avatar size="lg" name={user.name} src={user.avatar} mr="3" />
        <Box>
          <Heading as="h2" size="md">
            {user.name}
          </Heading>
          <Text color="gray.600" fontSize="sm">
            {user.email}
          </Text>
          <Badge variant="outline" colorScheme="teal" mt="2">
            Member
          </Badge>
        </Box>
      </Flex>
    </Box>
  );
}

export default UserCard;
