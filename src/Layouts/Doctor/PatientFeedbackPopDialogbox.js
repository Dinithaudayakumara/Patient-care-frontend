import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Grid, Rating, Typography } from "@mui/material";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "40rem",
  height: "6rem",
};
export default function PatientFeedbackPopDialogbox() {
  return (
    <div>
      <Grid item sx={{ textAlign: "center" }} pt={4}>
        <Avatar sx={{ width: 100, height: 100, mx: "auto" }}></Avatar>
        <Typography fontSize={25}>
          <b>Olive G.</b>
        </Typography>

        <Typography fontSize={12} pt={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <Grid pl={2}>
          <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
            <Rating name="size-small" defaultValue={2} size="small" />
          </Box>
          <Box sx={{ ...commonStyles, borderRadius: "16px" }}>
            <Rating name="size-small" defaultValue={2} size="small" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
