import React from "react";
import { Box, Grid, Input, Text, Button } from "@chakra-ui/core";

export default function Feel() {
  //use GRID for layout!
  return (
    <div>
      <br />
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box
          marginBottom={2}
          rounded={3}
          paddingLeft={2}
          paddingRight={2}
          w="100%"
          bg="blue.500"
        >
          <Text fontWeight="bold" fontSize="30px">
            Are there any comments you want to leave?
          </Text>
        </Box>
        <Input variant="flushed" placeholder="Leave a comment!" />
        <Button marginTop={8} w="25%">
          Next
        </Button>
      </Grid>
    </div>
  );
}
