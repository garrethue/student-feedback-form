import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";
import { connect } from "react-redux";

function Supported(props) {
  const [supportedValue, setSupportedValue] = useState(1);
  const addSupported = () => {
    props.dispatch({ type: "UPDATE_SUPPORTED", payload: supportedValue });
  };

  //use GRID for layout design!
  return (
    <>
      <div>
        <br />
        <Grid justifyContent="center" alignItems="center" bg="transparent">
          <Box
            marginBottom={3}
            rounded={3}
            paddingLeft={2}
            paddingRight={2}
            w="100%"
            bg="blue.500"
          >
            <Text fontWeight="bold" fontSize="30px">
              How well are you being supported?
            </Text>
          </Box>
          <NumberInput
            w="50%"
            defaultValue={1}
            value={supportedValue}
            min={1}
            max={5}
            onChange={(value) => setSupportedValue(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button onClick={addSupported} marginTop={3} w="25%">
            Next
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default connect()(Supported);
