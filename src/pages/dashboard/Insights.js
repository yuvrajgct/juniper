import React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { display } from "@mui/system";
import "@fontsource/roboto"; // Defaults to weight 400.
// const Matters = styled.h6`
//   position: absolute;
//   width: 152px;
//   height: 64px;
//   left: 54px;
//   top: 44px;

//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 16px;

//   color: #494949;
// `;
// const Insight = styled.h5`
//   position: absolute;
//   width: 236px;
//   height: 16px;
//   left: 16px;
//   top: 17px;

//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 16px;

//   color: #494949;
// `;

const Insights = () => {
  return (
    <Card
      sx={{
        position: "absolute",
        padding: "15px",
        width: "216px",
        height: "216px",
        left: "1240px",
        top: "132px",
        background: "#FFFFFF",
        borderRadius: "10px",
      }}
    >
      <Grid>
        <Typography variant="h5" color="black" gutterBottom>
          Insights
        </Typography>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            width: "152px",
            height: "64px",
            left: "54px",
            top: "44px",

            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",

            color: "#494949",
          }}
        >
          The organisation sex ratio looks a little lop sided, how about we
          check on that huh?
        </Typography>
        <LightbulbOutlinedIcon
          fontSize="large"
          sx={{
            color: "#ffba34",
            position: "absolute",
            left: "10.19%",
            right: "80.56%",
            top: "21.76%",
            bottom: "33.33%",
          }}
        />
      </Grid>
      <Grid>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            width: "152px",
            height: "64px",
            left: "54px",
            top: "119px",

            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",

            color: "#494949",
          }}
        >
          The organisation sex ratio looks a little lop sided, how about we
          check on that huh?
        </Typography>
        <LightbulbOutlinedIcon
          fontSize="large"
          sx={{
            color: "#ffba34",
            position: "absolute",
            left: "10.19%",
            right: "80.56%",
            top: "56.48%",
            bottom: "33.33%",
          }}
        />
      </Grid>
    </Card>
  );
};

export default Insights;
