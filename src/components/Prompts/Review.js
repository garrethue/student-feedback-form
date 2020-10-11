import React, { useState } from "react";
import {
  useToast,
  Button,
  Grid,
  Text,
  Box,
  ButtonGroup,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Review(props) {
  const toast = useToast(); //upon submission a little window pops up to signal success
  const [isDisabledValue, setIsDisabled] = useState(false);

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
          setIsDisabled(true); //prevent user from nav'ing if user submits
          toast({
            title: "Form submitted.",
            description:
              "We have received your feedback. Thank you! In a few seconds, you will be re-directed.",
            status: "success",
            duration: 3500, //pop up lasts for 3.5 sec
            isClosable: true,
          });
          setTimeout(() => props.dispatch({ type: "RESET_STORE" }), 3600); //reset store to original default values. setTimeOut is needed so the review back doesn't show this
          setTimeout(() => props.history.push("/"), 3500); //go to welcome page after 3.5 sec
        }
      )
      .catch((err) => console.log(err));
  };

  const goBackToPrevPage = () => {
    props.history.push("/comments");
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
            onClick={onSubmit}
            marginTop={3}
            w="35%"
          >
            Submit Feedback
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
}

//bring in the store
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(withRouter(Review));
