// pages/contact.js
import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

function Contact() {
  return (
    <Box p="4">
      <Heading as="h1" size="xl">
        Contact Us
      </Heading>
      <Text fontSize="lg" mt="2">
        Feel free to get in touch with us for any inquiries or feedback.
      </Text>

      <Box mt="4">
        <Heading as="h2" size="lg">
          Contact Information
        </Heading>
        <Text mt="2">
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </Text>
        <Text mt="2">
          Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </Text>
        {/* Add more contact information as needed */}
      </Box>
    </Box>
  );
}

export default Contact;
