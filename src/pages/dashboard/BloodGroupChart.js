import React from "react";
import { Card, Grid, CardActions, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const BloodGroupChart = () => {
  const [data, setData] = useState([]);
  const getTable = () => {
    const output = "TableData";
    setData(output.data);
    console.log(output.data);
  };
  useEffect(() => {
    getTable();
  }, []);
  const TableData = [
    {
      Id: 1,
      Scots: "A+ ",
      num: "12",
    },
    {
      Id: 2,
      Scots: "A- ",
      num: "23",
    },
    {
      Id: 3,
      Scots: "B+",
      num: "23",
    },
    {
      Id: 1,
      Scots: "B-",
      num: "12",
    },
    {
      Id: 2,
      Scots: "AB+ ",
      num: "12",
    },
    {
      Id: 3,
      Scots: "AB-",
      num: "23",
    },
    {
      Id: 4,
      Scots: "O+",
      num: "23",
    },
    {
      Id: 5,
      Scots: "O-",
      num: "23",
    },
    {
      Id: 5,
      Scots: "Others",
      num: "23",
    },
  ];

  return (
    <Card>
      <Grid container xs={12}>
        <Typography variant="h4" margin={2}>
          Blood Group
        </Typography>

        {TableData.map((item) => {
          return (
            <Grid container xs={12} height="30px">
              <Grid xs={5.5} style={{ border: "1px solid black" }}>
                <Typography marginLeft={1}>{item.Scots}</Typography>
              </Grid>
              <Grid
                xs={5.5}
                style={{ border: "1px solid black" }}
                align="Right"
              >
                <Typography marginRight={1}>{item.num}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default BloodGroupChart;
