import { Button, HStack, Stack } from "@chakra-ui/react";
import { PageHeading } from "./Heading";

const HeaderWithButtons = ({ button1, button2, heading }) => (
  <Stack
    justifyContent={["center", "space-between"]}
    direction={["column", "row"]}
    align={["center", "center"]}
    my={[0, 4]}
    mb={8}
  >
    <PageHeading text={heading} />
    <Stack direction={["column", "row"]} align={["center", "flex-end"]}>
      {button1 ? (
        <Button size={{ base: "sm", md: "md" }} variant={"outline"}>
          {button1}
        </Button>
      ) : null}
      {button2 ? (
        <Button size={{ base: "sm", md: "md" }} variant={"solid"}>
          {button2}
        </Button>
      ) : null}
    </Stack>
  </Stack>
);

export { HeaderWithButtons };
