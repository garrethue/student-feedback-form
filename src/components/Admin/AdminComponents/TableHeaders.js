import React, { Fragment } from "react";
import { Box } from "@chakra-ui/core";

export default function TableHeaders() {
  const headers = [
    "Feeling",
    "Comprehension",
    "Support",
    "Comments",
    "Delete",
    "Flag",
  ];
  return (
    <Fragment>
      {headers.map((header) => {
        return (
          <Box
            fontWeight="bold"
            textAlign="center"
            padding={1}
            fontSize="20px"
            w="100%"
            h="10"
            bg="blue.300"
          >
            {header}
          </Box>
        );
      })}
    </Fragment>
  );
}
