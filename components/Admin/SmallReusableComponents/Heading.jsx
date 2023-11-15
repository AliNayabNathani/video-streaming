import { Heading } from "@chakra-ui/react";

const PageHeading = ({ text }) => (
  <Heading
    textAlign={["center", "start"]}
    size={{ base: "md", md: "lg" }}
    my={["1rem", "2rem"]}
  >
    {text}
  </Heading>
);

const NormalHeading = ({ text }) => (
  <Heading my={"1rem"} direction="row" align="start" size={"md"}>
    {text}
  </Heading>
);
export { PageHeading, NormalHeading };
