import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
const Insights = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" color="black" gutterBottom>
          Insights
        </Typography>
        <Typography
          sx={{ fontSize: 16, marginLeft: 10, marginBottom: 25 }}
          component="div"
        >
          The Organisation sex ratio look a little lup sided,how about we chack
          on thet huh?
        </Typography>
      </CardContent>
      <CardContent sx={{ marginTop: -48, color: "orange" }}>
        <LightbulbOutlinedIcon fontSize="large" />
      </CardContent>
      <CardContent>
        <Typography
          sx={{ fontSize: 16, marginLeft: 10, marginBottom: 25 }}
          component="div"
        >
          The Organisation sex ratio look a little lup sided,how about we chack
          on thet huh?
        </Typography>
      </CardContent>
      <CardContent sx={{ marginTop: -48, color: "orange" }}>
        <LightbulbOutlinedIcon fontSize="large" />
      </CardContent>
    </Card>
  );
};

export default Insights;
