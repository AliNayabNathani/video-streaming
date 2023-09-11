// pages/About.js
import React from "react";
import { Heading, Text, Box, Flex, Button } from "@chakra-ui/react";
import UserCard from "../components/UserCard"; // Import the UserCard component

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    avatar:
      "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
  },
  // Add more user data as needed
];

function About() {
  return (
    <Box p="4">
      <Heading as="h1" size="xl">
        About Us
      </Heading>
      <Text fontSize="lg" mt="2">
        Welcome to our About Us page. We are a fictional company dedicated to
        making amazing products.
      </Text>
      <Button variant="outline">Custom Button</Button>
      <Heading as="h2" size="lg" mt="4">
        Our Team
      </Heading>

      <Flex flexWrap="wrap" mt="4">
        {users.map((user, index) => (
          <UserCard key={index} user={user} /> // Render UserCard component for each user
        ))}
      </Flex>
    </Box>
  );
}

export default About;
