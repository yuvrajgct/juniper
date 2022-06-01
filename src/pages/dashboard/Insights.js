import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { display } from "@mui/system";
const Insights = () => {
  return (

    <Card sx={{ maxWidth: "250px" }}>
        
        <Grid>
        <Typography variant="h5" color="black" gutterBottom>
          Insights
        </Typography>
        <Typography
            sx={{ fontSize: 16, marginLeft: 15,display:"flex" }}
            component="div">
            <span style={{marginLeft:"-50px",marginTop:"5px"}}><LightbulbOutlinedIcon  fontSize="large" sx={{color: "orange"}} /></span>The Organisation sex ratio look a little lup sided,how about we
            chack on thet huh?
         </Typography>
          </Grid>
          < Grid >
        <Typography
          sx={{ fontSize: 16, marginLeft: 15,marginTop:"50px",display:"flex" }}
          component="div"
          >
          <span style={{marginLeft:"-50px",marginTop:"5px"}}><LightbulbOutlinedIcon  fontSize="large" sx={{color: "orange"}} /></span>The Organisation sex ratio look a little lup sided,how about we chack
          on thet huh?
        </Typography>
        </Grid>
         
    </Card>

  );
};

export default Insights;
