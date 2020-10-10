import React from "react";
import { Box, Grid, Input } from "@chakra-ui/core";

export default function Feel() {
  //use GRID for layout!
  return (
    <div>
      <br />
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box marginBottom={1} rounded={3} padding={1} w={500} bg="blue.500">
          How are you feeling today on a scale of 1 to 5?
        </Box>
        <Input
          w="50%"
          required
          variant="flushed"
          placeholder="1 (worst) - 5 (best)"
        />
      </Grid>
    </div>
  );
}
