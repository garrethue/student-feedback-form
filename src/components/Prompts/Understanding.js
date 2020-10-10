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
import { withRouter } from "react-router-dom";

function Understanding(props) {
  const [understandingValue, setUnderstandingValue] = useState(1);
  const addUnderstandingAndGoToNextPage = () => {
    props.dispatch({
      type: "UPDATE_UNDERSTANDING",
      payload: understandingValue,
    });
    props.history.push("/supported");
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
              How well are you understanding the content?
            </Text>
          </Box>
          <NumberInput
            w="50%"
            defaultValue={1}
            value={understandingValue}
            min={1}
            max={5}
            onChange={(value) => setUnderstandingValue(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button
            onClick={addUnderstandingAndGoToNextPage}
            marginTop={3}
            w="25%"
          >
            Next
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default connect()(withRouter(Understanding));
