import React, { useState } from "react";
import { Box, Grid, Input, Text, Button, ButtonGroup } from "@chakra-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Comments(props) {
  const [commentValue, setCommentValue] = useState(props.comments);
  const addCommentAndGoToNextPage = () => {
    props.dispatch({ type: "UPDATE_COMMENTS", payload: commentValue });
    setCommentValue("");
    props.history.push("/review");
  };
  const goBackToPrevPage = () => {
    props.history.push("/supported");
  };

  //use GRID for layout!
  return (
    <div>
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box
          marginTop={3}
          marginBottom={2}
          rounded={3}
          paddingLeft={2}
          paddingRight={2}
          w="100%"
          bg="blue.500"
        >
          <Text fontWeight="bold" fontSize="30px">
            Are there any comments you want to leave?
          </Text>
        </Box>
        <Input
          value={commentValue}
          onChange={(event) => setCommentValue(event.target.value)}
          variant="flushed"
          placeholder="Write comment here."
        />
        <ButtonGroup spacing={3}>
          <Button onClick={goBackToPrevPage} marginTop={3} w="20%">
            Back
          </Button>
          <Button onClick={addCommentAndGoToNextPage} marginTop={3} w="20%">
            Next
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  );
}

//bring in the feelings
const mapCommentsStateToProps = ({ comments }) => ({ comments });

export default connect(mapCommentsStateToProps)(withRouter(Comments));
