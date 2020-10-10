import React, { useState } from "react";
import { Box, Button, Grid, Input, Text } from "@chakra-ui/core";

export default function Feel() {
  const [value, setValue] = useState(); //is valid upon initial rendering
  //use GRID for layout!
  return (
    <>
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
              How are you feeling today on a scale of 1 to 5?
            </Text>
          </Box>
          <Input
            w="50%"
            type="number"
            isRequired={true}
            variant="flushed"
            placeholder="1 (worst) - 5 (best)"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            isInvalid={value < 1 || value > 5 ? true : false}
          />

          <Button marginTop={8} w="25%">
            Next
          </Button>
        </Grid>
      </div>
    </>
  );
}
