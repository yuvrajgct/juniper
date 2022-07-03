import React, { useState, useEffect } from "react";
import { Card, Grid, CardActions, Typography, Paper } from "@mui/material";
import axios from "axios";
import { getDepartmentWise } from "../../Api/api";
// import styled from "@emotion/styled";
const Tables = () => {
  const [data, setData] = useState([]);
  // const getTable = () => {
  //   const output = "TableData";
  //   setData(output.data);
  //   console.log(output.data);
  // };
  // useEffect(() => {
  //   getTable();
  // }, []);
  // const devider = styled.div`

  //   color: red;
  //   background:green;
  //   `

  const TableData = [
    {
      Id: 1,
      Scots: "Blue Scouts ",
      num: "12",
    },
    {
      Id: 2,
      Scots: "Blue lnk ",
      num: "23",
    },
    {
      Id: 3,
      Scots: "Red",
      num: "23",
    },
    {
      Id: 3,
      Scots: "One",
      num: "54",
    },
    {
      Id: 1,
      Scots: "BluOne ",
      num: "12",
    },
    {
      Id: 2,
      Scots: "Saarthi ",
      num: "12",
    },
    {
      Id: 3,
      Scots: "Two",
      num: "23",
    },
    {
      Id: 4,
      Scots: "Three",
      num: "23",
    },
    {
      Id: 5,
      Scots: "Four",
      num: "23",
    },
  ];

  useEffect(() => {
    getAllDepartmentWise();
  }, []);

  const getAllDepartmentWise = async () => {
    const response = await getDepartmentWise({ org_id: 1 });
    // console.log("data****", response);
    if (response.status === 200) {
      if (response.data) {
        setData(response.data);
        console.log("get  Department", response.data);
      }
    } else {
    }
  };

  return (
    // <Card>
    <Grid container xs={12}>
      <Typography variant="h4" margin={2}>
        Dapartments
      </Typography>

      {
        data && data.length ? (
          data?.map((item) => {
            return (
              <Grid container xs={12} height="30px">
                <Grid xs={5.5} style={{ border: "1px solid black" }}>
                  <Typography marginLeft={1}>
                    {item?.department?.name.split("-")[0]}
                  </Typography>
                </Grid>
                <Grid
                  xs={5.5}
                  style={{ border: "1px solid black" }}
                  align="Right"
                >
                  <Typography marginRight={1}>
                    {item?.TotalAssociate}
                  </Typography>
                </Grid>
              </Grid>
            );
          })
        ) : (
          // return (
          <Grid container xs={12} height="30px">
            <Grid xs={5.5} style={{ border: "1px solid black" }}>
              <Typography marginLeft={1}>
                <span>No data found </span>
              </Typography>
            </Grid>
            <Grid xs={5.5} style={{ border: "1px solid black" }} align="Right">
              <Typography marginRight={1}>
                {" "}
                <span>0</span>
              </Typography>
            </Grid>
          </Grid>
        )
        // );
      }
    </Grid>
    // </Card>
  );
};

export default Tables;
