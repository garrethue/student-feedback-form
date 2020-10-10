import React, { useState, useEffect } from "react";
import "./Admin.css";
import { Grid, Box, IconButton } from "@chakra-ui/core";
import axios from "axios";

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

  useEffect(() => {
    //useEffect makes a fetch request to a restful api every time the component is rendered
    getData();
  }, []); //passing in an empty array as the second argument ensures that we only get the orders once

  return (
    <div>
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box marginTop={3} marginBottom={3} rounded={3} w="100%" bg="blue.500">
          <table>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
              <th>Flag</th>
            </tr>
            {feedbackData.map((dataObj) => {
              return (
                <tr>
                  <td>{dataObj.feeling}</td>
                  <td>{dataObj.understanding}</td>
                  <td>{dataObj.support}</td>
                  <td>{dataObj.comments}</td>
                  <td>
                    <IconButton
                      variantColor="red"
                      aria-label="Delete Entry"
                      icon="delete"
                    />
                  </td>
                  <td>
                    <IconButton
                      variantColor="red"
                      aria-label="Flag Entry"
                      icon="warning-2"
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        </Box>
      </Grid>
    </div>
  );
}
