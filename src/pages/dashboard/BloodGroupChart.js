import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  CardActions,
  Typography,
  listItemAvatarClasses,
} from "@mui/material";
import { getBloodGroup } from "../../Api/api";

const BloodGroupChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllBloodGroup();
  }, []);

  const getAllBloodGroup = async () => {
    const response = await getBloodGroup({ org_id: 1 });
    // console.log("data****", response);
    if (response.status === 200) {
      if (response.data && response.data != undefined) {
        // setData(response.data);
        const arr = [];
        JSON.stringify(response.data)
          .split(",")
          .map((data) => {
            let obj = {
              bGroup: data.split(":")[0],
              value: data.split(":")[1],
            };
            arr.push(obj);
          });
        // console.log("888888", arr);
        setData(arr);
      }
    } else {
    }
  };
  // console.log("888888", data);

  return (
    <Card
      sx={{
        position: "absolute",
        width: "216px",
        height: "452px",
        left: "520px",
        top: "604px",
        background: "#FFFFFF",
        borderRadius: "10px",
      }}
    >
      <Grid container xs={12}>
        <Typography variant="h4" margin={5}>
          Blood Group
        </Typography>

        {data &&
          data.length &&
          data.map((item) => {
            return (
              !item.bGroup.includes("TotalCount") && (
                <Grid container xs={12} height="30px">
                  <Grid xs={5.5} style={{ border: "1px solid black" }}>
                    <Typography marginLeft={1}>
                      {item.bGroup.split('"')[1].includes("Pos")
                        ? `${item.bGroup.split('"')[1].split("Pos")[0]}+`
                        : item.bGroup.split('"')[1].includes("Ne")
                        ? `${item.bGroup.split('"')[1].split("Ne")[0]}-`
                        : item.bGroup.split('"')[1]}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={5.5}
                    style={{ border: "1px solid black" }}
                    align="Right"
                  >
                    <Typography marginRight={1}>
                      {item.value.split('"')[1]}
                    </Typography>
                  </Grid>
                </Grid>
              )
            );
          })}
      </Grid>
    </Card>
  );
};

export default BloodGroupChart;
