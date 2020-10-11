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
  ButtonGroup,
  Tooltip,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Supported(props) {
  const [supportedValue, setSupportedValue] = useState(props.supported);
  const [isDisabledValue, setIsDisabled] = useState(false);

  const handleChange = (value) => {
    //if value is out of bounds, disable the next button and set the value to the invalid number
    if (value > 5 || value < 1) {
      setIsDisabled(true);
      setSupportedValue(value);
    } else {
      //else if within range, let user move onto next page
      setIsDisabled(false);
      setSupportedValue(value);
    }
  };

  const addSupportedAndGoToNextPage = () => {
    props.dispatch({ type: "UPDATE_SUPPORTED", payload: supportedValue });
    props.history.push("/comments");
  };

  const goBackToPrevPage = () => {
    props.history.push("/understanding");
  };

  //use GRID for layout design!
  return (
    <>
      <div>
        <Grid justifyContent="center" alignItems="center" bg="transparent">
          <Box
            marginTop={3}
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
          <Tooltip
            placement="left"
            showDelay={2000}
            label="From 1 (bad) to 5 (great)."
          >
            <NumberInput
              w="50%"
              defaultValue={1}
              value={supportedValue}
              min={1}
              max={5}
              onChange={(value) => handleChange(value)}
            >
              <NumberInputField />

              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Tooltip>
          <ButtonGroup spacing={3}>
            <Button
              isDisabled={isDisabledValue}
              onClick={goBackToPrevPage}
              marginTop={3}
              w="20%"
            >
              Back
            </Button>
            <Button
              isDisabled={isDisabledValue}
              onClick={addSupportedAndGoToNextPage}
              marginTop={3}
              w="20%"
            >
              Next
            </Button>
          </ButtonGroup>
        </Grid>
      </div>
    </>
  );
}

//bring in the feelings
const mapSupportedStateToProps = ({ supported }) => ({ supported });

export default connect(mapSupportedStateToProps)(withRouter(Supported));
