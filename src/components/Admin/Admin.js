import React from "react";
import "./Admin.css";
import { Grid, Box } from "@chakra-ui/core";

export default function Admin() {
  return (
    <div>
      <Grid justifyContent="center" alignItems="center" bg="transparent">
        <Box
          marginTop={3}
          marginBottom={3}
          rounded={3}
          paddingLeft={2}
          paddingRight={2}
          w="100%"
          bg="blue.500"
        >
          <table>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </table>
        </Box>
      </Grid>
    </div>
  );
}
