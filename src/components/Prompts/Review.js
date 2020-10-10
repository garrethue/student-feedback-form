import React from "react";
import { useToast, Button, Grid, Text, Box } from "@chakra-ui/core";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Review(props) {
  const toast = useToast(); //upon submission a little window pops up to signal success

  const onSubmit = (event) => {
    axios
      .post("feedback/add-feedback", {
        feeling: props.store.feeling,
        understanding: props.store.understanding,
        supported: props.store.supported,
        comments: props.store.comments,
      })
      .then(
        //add setTimeOut to take them to a NEW PAGE AND RESET STORE!
        () => {
          toast({
            title: "Form submitted.",
            description:
              "We have received your feedback. Thank you! In a few seconds, you will be re-directed.",
            status: "success",
            duration: 4000, //pop up lasts for 4 sec
            isClosable: false,
          });
          props.dispatch({ type: "RESET_STORE" }); //reset store to original default values
          setTimeout(() => props.history.push("/"), 5000); //go to welcome page after 5 sec
        }
      )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box
          marginBottom={3}
          rounded={3}
          marginTop={3}
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

        <Button w="35%" onClick={onSubmit}>
          Submit Feedback
        </Button>
      </Grid>
    </div>
  );
}

//bring in the store
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(withRouter(Review));
