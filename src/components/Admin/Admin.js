import React, { useState, useEffect } from "react";
import { Grid, Box, Text } from "@chakra-ui/core";
import axios from "axios";
import TableData from "./AdminComponents/TableData";
import TableHeaders from "./AdminComponents/TableHeaders";

export default function Admin() {
  const [feedbackData, setFeedbackData] = useState([]);

  const getData = () => {
    axios
      .get("/feedback/")
      .then((res) => {
        const allFeedbackData = res.data;
        setFeedbackData(allFeedbackData);
        console.log(allFeedbackData);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`feedback/delete-row-entry/${id}`)
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  const handleUpdate = (id, flagged) => {
    axios
      .put(`feedback/update-flagged/${id}`, { flagged })
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //useEffect makes a fetch request to a restful api every time the component is rendered
    getData();
  }, []); //passing in an empty array as the second argument ensures that we only get the orders once

  return (
    <div>
      <Grid
        margin={3}
        justifyContent="center"
        alignItems="center"
        bg="transparent"
      >
        <Box
          marginBottom={5}
          rounded={3}
          paddingLeft={2}
          paddingRight={2}
          w="100%"
          bg="blue.500"
        >
          <Text fontWeight="bold" fontSize="50px">
            All Submitted Feedback:
          </Text>
        </Box>
        <Box
          marginBottom={3}
          paddingBottom={3}
          rounded={3}
          h="100%"
          w="100%"
          bg="blue.500"
        >
          <Grid
            bg="transparent"
            margin={5}
            justifyContent="center"
            alignItems="center"
            templateColumns="repeat(6, 1fr)"
            gap={4}
          >
            <TableHeaders />
            <TableData
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              feedbackData={feedbackData}
            />
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
