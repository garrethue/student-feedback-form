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

function Feeling(props) {
  const [feelingValue, setFeelingValue] = useState(1);
  const addFeelingsAndGoToNextPage = () => {
    props.dispatch({ type: "UPDATE_FEELINGS", payload: feelingValue });

    props.history.push("/understanding");
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
              How are you feeling today?
            </Text>
          </Box>
          <NumberInput
            w="50%"
            defaultValue={1}
            value={feelingValue}
            min={1}
            max={5}
            onChange={(value) => setFeelingValue(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button onClick={addFeelingsAndGoToNextPage} marginTop={3} w="25%">
            Next
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default connect()(withRouter(Feeling));
