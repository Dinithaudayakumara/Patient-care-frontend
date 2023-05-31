import React from "react";
import Avatar from "@mui/material/Avatar";
import { Grid, Rating, Typography } from "@mui/material";

export default function PatientFeedbackPopDialogbox() {
  return (
    <div>
      <Grid item sx={{ textAlign: "center" }} pt={4}>
        <Avatar sx={{ width: 100, height: 100, mx: "auto" }}></Avatar>
        <Typography fontSize={25}>
          <b> Dinitha Prasanna</b>
        </Typography>

        <Typography fontSize={12} pt={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </Grid>
      <div
        style={{
          position: "relative",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        <div
          style={{
            borderRadius: 14,
            height: 100,
            marginBottom: "10px",
            border: "2px solid #EDEDED",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "45px",
              paddingLeft: "10px",
              paddingTop: "10px",
            }}
          >
            <Rating name="read-only" value={3} readOnly />

            <Typography
              sx={{
                color: "#8E8E8E",
                fontSize: "12",
                paddingLeft: "80px",
                fontFamily: "Poppins",
              }}
            >
              Neutral
            </Typography>
          </div>
          <Typography
            sx={{
              pl: "10px",
              pb: "10px",
              color: "#666362",
              paddingTop: "10px",
              fontFamily: "Poppins",
            }}
          >
            Good service
          </Typography>
        </div>
        <div
          style={{
            borderRadius: 14,
            height: 100,
            marginBottom: "10px",
            border: "2px solid #EDEDED",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "45px",
              paddingLeft: "10px",
              paddingTop: "10px",
            }}
          >
            <Rating name="read-only" value={2} readOnly />

            <Typography
              sx={{
                color: "#8E8E8E",
                fontSize: "12",
                paddingLeft: "80px",
                fontFamily: "Poppins",
              }}
            >
              Neutral
            </Typography>
          </div>
          <Typography
            sx={{
              pl: "10px",
              pb: "10px",
              color: "#666362",
              paddingTop: "10px",
              fontFamily: "Poppins",
            }}
          >
            Enhance appointment scheduling, timely responses, and coordination
            for better patient access and overall healthcare experiences.
          </Typography>
        </div>
      </div>
    </div>
  );
}
