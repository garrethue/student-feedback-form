import React, { Fragment } from "react";
import { Box, Button } from "@chakra-ui/core";

export default function TableData(props) {
  return (
    <Fragment>
      {props.feedbackData.map((dataObj) => {
        return (
          <Fragment key={dataObj.id}>
            <Box
              textAlign="center"
              padding={1}
              w="100%"
              h="10"
              fontSize="1.5em"
            >
              {dataObj.feeling}
            </Box>
            <Box
              textAlign="center"
              padding={1}
              w="100%"
              h="10"
              fontSize="1.5em"
            >
              {dataObj.understanding}
            </Box>
            <Box
              textAlign="center"
              padding={1}
              w="100%"
              h="10"
              fontSize="1.5em"
            >
              {dataObj.support}
            </Box>
            <Box
              textAlign="center"
              padding={1}
              w="100%"
              h="10"
              fontSize="1.5em"
            >
              {dataObj.comments}
            </Box>
            <Box textAlign="center" padding={1} w="100%" h="10">
              <Button
                size="sm"
                onClick={() => props.handleDelete(dataObj.id)}
                variantColor="red"
              >
                Delete
              </Button>
            </Box>
            <Box textAlign="center" padding={1} w="100%" h="10">
              {!dataObj.flagged ? (
                <Button
                  size="sm"
                  variantColor="red"
                  onClick={() =>
                    props.handleUpdate(dataObj.id, dataObj.flagged)
                  }
                >
                  Flag
                </Button>
              ) : (
                <Button
                  size="sm"
                  variantColor="yellow"
                  onClick={() =>
                    props.handleUpdate(dataObj.id, dataObj.flagged)
                  }
                >
                  Unflag
                </Button>
              )}
            </Box>
          </Fragment>
        );
      })}
    </Fragment>
  );
}
