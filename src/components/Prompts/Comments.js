import React from "react";
import { Box, Grid, Input } from "@chakra-ui/core";

export default function Feel() {
  //use GRID for layout!
  return (
    <div>
      <br />
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box marginBottom={1} rounded={3} padding={1} w={500} bg="blue.500">
          Any comments you want to leave?
        </Box>
        <Input required variant="flushed" placeholder="Leave a comment!" />
      </Grid>
    </div>
  );
}
