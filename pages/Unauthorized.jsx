import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Heading, Flex, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
const UnauthorizedPage = () => {
  const router = useRouter();
  return (
    <Flex
      height="100vh" // Set the height of the parent to fill the viewport
      alignItems="center"
      justifyContent="center"
    >
      <Container textAlign="center">
        <Heading fontSize={["2xl", "6xl"]}>401</Heading>
        <Heading mt={6}>Unauthorized</Heading>
        <Heading mt={8}>You Are Not Allowed Here</Heading>
        <Button
          variant={"outline"}
          onClick={() => router.back()}
          mt={[4, 8]}
          leftIcon={<ArrowBackIcon size={20} />}
        >
          Go Back
        </Button>
      </Container>
    </Flex>
  );
};

export default UnauthorizedPage;
