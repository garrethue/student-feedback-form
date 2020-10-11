import React from "react";
import {
  Box,
  Heading,
  Flex,
  useColorMode,
  Icon,
  Button,
} from "@chakra-ui/core";

const Header = (props) => {
  // useColorMode to bring in Darkmode feature
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  //Use Flex for responsive design
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="yellow.400"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="2xl" letterSpacing={"-.1rem"}>
          theFeedbackForm.
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Options</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      ></Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          h={45}
          w={50}
          onClick={toggleColorMode}
          bg="transparent"
          border="1px"
        >
          {colorMode === "light" ? <Icon name="moon" /> : <Icon name="sun" />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
