import React from "react";
import { Button, Grid, Text, Box } from "@chakra-ui/core";
import { withRouter } from "react-router-dom";

function ThankYou(props) {
  const nextPage = () => {
    props.history.push("/");
  };

  return (
    <div>
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box
          marginBottom={3}
          marginTop={3}
          rounded={3}
          paddingLeft={2}
          paddingRight={2}
          w="100%"
          bg="blue.500"
        >
          <Text fontWeight="bold" fontSize="50px">
            Thanks for your submission!
          </Text>
        </Box>
        <Button onClick={nextPage} w="25%">
          Back to Home.
        </Button>
      </Grid>
    </div>
  );
}
export default withRouter(ThankYou);
