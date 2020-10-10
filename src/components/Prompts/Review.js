import React from "react";
import { useToast, Button, Grid, Text, Box } from "@chakra-ui/core";
import { connect } from "react-redux";

function Review(props) {
  const toast = useToast(); //upon submission a little window pops up to signal success
  return (
    <div>
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box
          marginBottom={3}
          rounded={3}
          paddingLeft={2}
          paddingRight={2}
          w="100%"
          bg="blue.500"
        >
          <Text fontWeight="bold" fontSize="50px">
            Review Your Feedback.
          </Text>
        </Box>

        <Box
          marginBottom={3}
          rounded={3}
          paddingLeft={2}
          paddingRight={2}
          w="100%"
          bg="blue.300"
        >
          <Text fontWeight="bold" fontSize="30px">
            Feelings: {props.store.feeling}
          </Text>
          <Text fontWeight="bold" fontSize="30px">
            Understanding: {props.store.understanding}
          </Text>
          <Text fontWeight="bold" fontSize="30px">
            Support: {props.store.supported}
          </Text>
          <Text fontWeight="bold" fontSize="30px">
            Comments: {props.store.comments}
          </Text>
        </Box>

        <Button
          w="25%"
          onClick={
            () =>
              toast({
                title: "Form submitted.",
                description: "We have received your feedback. Thank you!",
                status: "success",
                duration: 5000,
                isClosable: true,
              }) //add toast to .then() //add setTimeOut to take them to a NEW PAGE
          }
        >
          Submit Form
        </Button>
      </Grid>
    </div>
  );
}

//bring in the store
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
