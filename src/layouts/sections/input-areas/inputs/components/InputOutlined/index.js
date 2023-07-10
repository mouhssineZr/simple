/* eslint-disable no-param-reassign */
/**
=========================================================
* Example - v2.1.0
=========================================================

* 
* 



 =========================================================

* 
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Example components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";

function InputOutlined() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput label="Outline" fullWidth />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputOutlined;
