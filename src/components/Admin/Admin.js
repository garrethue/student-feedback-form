import React, { useState, useEffect, Fragment } from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/core";
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
            All Submitted Feedback:
          </Text>
        </Box>
        <Box marginBottom={3} rounded={3} w="100%" bg="blue.500">
          <Grid
            bg="transparent"
            margin={5}
            justifyContent="center"
            alignItems="center"
            templateColumns="repeat(6, 1fr)"
            gap={6}
          >
            <Box
              fontWeight="bold"
              textAlign="center"
              padding={1}
              fontSize="20px"
              w="100%"
              h="10"
              bg="blue.800"
            >
              Feeling
            </Box>
            <Box
              fontWeight="bold"
              textAlign="center"
              padding={1}
              fontSize="20px"
              w="100%"
              h="10"
              bg="blue.800"
            >
              Comprehension
            </Box>
            <Box
              fontWeight="bold"
              textAlign="center"
              padding={1}
              fontSize="20px"
              w="100%"
              h="10"
              bg="blue.800"
            >
              Support
            </Box>
            <Box
              fontWeight="bold"
              textAlign="center"
              padding={1}
              fontSize="20px"
              w="100%"
              h="10"
              bg="blue.800"
            >
              Comments
            </Box>
            <Box
              fontWeight="bold"
              textAlign="center"
              padding={1}
              fontSize="20px"
              w="100%"
              h="10"
              bg="blue.800"
            >
              Delete
            </Box>
            <Box
              fontWeight="bold"
              textAlign="center"
              padding={1}
              fontSize="20px"
              w="100%"
              h="10"
              bg="blue.800"
            >
              Flag
            </Box>
            {feedbackData.map((dataObj) => {
              return (
                <Fragment key={dataObj.id}>
                  <Box
                    textAlign="center"
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
                    textAlign="center"
                    padding={1}
                    w="100%"
                    h="10"
                    fontSize="1.5em"
                  >
                    {dataObj.comments}
                  </Box>
                  <Box
                    textAlign="center"
                    textAlign="center"
                    padding={1}
                    w="100%"
                    h="10"
                  >
                    <Button
                      size="sm"
                      onClick={() => handleDelete(dataObj.id)}
                      variantColor="red"
                    >
                      Delete
                    </Button>
                  </Box>
                  <Box
                    textAlign="center"
                    textAlign="center"
                    padding={1}
                    w="100%"
                    h="10"
                  >
                    {!dataObj.flagged ? (
                      <Button
                        size="sm"
                        variantColor="red"
                        onClick={() =>
                          handleUpdate(dataObj.id, dataObj.flagged)
                        }
                      >
                        Flag
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variantColor="yellow"
                        onClick={() =>
                          handleUpdate(dataObj.id, dataObj.flagged)
                        }
                      >
                        Unflag
                      </Button>
                    )}
                  </Box>
                </Fragment>
              );
            })}
          </Grid>

          {/* <table>
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
                  <tr key={dataObj.id}>
                    <td>{dataObj.feeling}</td>
                    <td>{dataObj.understanding}</td>
                    <td>{dataObj.support}</td>
                    <td>{dataObj.comments}</td>
                    <td>
                      <Button
                        size="sm"
                        onClick={() => handleDelete(dataObj.id)}
                        variantColor="red"
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      {!dataObj.flagged ? (
                        <Button
                          size="sm"
                          variantColor="red"
                          onClick={() =>
                            handleUpdate(dataObj.id, dataObj.flagged)
                          }
                        >
                          Flag
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variantColor="yellow"
                          onClick={() =>
                            handleUpdate(dataObj.id, dataObj.flagged)
                          }
                        >
                          Unflag
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </table> */}
        </Box>
      </Grid>
    </div>
  );
}
