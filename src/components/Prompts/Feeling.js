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
  Tooltip,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Feeling(props) {
  const [feelingValue, setFeelingValue] = useState(props.feeling); //props.feeling will be the default value upon each rendering
  const [isDisabledValue, setIsDisabled] = useState(false);

  const handleChange = (value) => {
    //if value is out of bounds, disable the next button and set the value to the invalid number
    if (value > 5 || value < 1) {
      setIsDisabled(true);
      setFeelingValue(value);
    } else {
      //else if within range, let user move onto next page
      setIsDisabled(false);
      setFeelingValue(value);
    }
  };

  const addFeelingsAndGoToNextPage = () => {
    props.dispatch({ type: "UPDATE_FEELINGS", payload: feelingValue });
    props.history.push("/understanding");
  };

  //use GRID for layout design!
  return (
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
          value={feelingValue}
          min={1}
          max={5}
          onChange={(value) => handleChange(value)}
        >
          <Tooltip label="From 1 (bad) to 5 (great).">
            <NumberInputField />
          </Tooltip>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button
          isDisabled={isDisabledValue}
          onClick={addFeelingsAndGoToNextPage}
          marginTop={3}
          w="25%"
        >
          Next
        </Button>
      </Grid>
    </div>
  );
}

//bring in the feelings
const mapFeelingStateToProps = ({ feeling }) => ({ feeling });

export default connect(mapFeelingStateToProps)(withRouter(Feeling));
