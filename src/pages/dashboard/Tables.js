import React from "react";
import { Card, Grid ,CardActions,Typography} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
// import styled from "@emotion/styled";
const Tables = () => {
  const [data, setData] = useState([])
  const getTable = () => {
        const output = ("TableData")
        setData(output.data)
        console.log(output.data)
    }
    useEffect(() => {
        getTable();
        
    }, [])
  // const devider = styled.div`
    
  //   color: red;
  //   background:green;
  //   `
    
    
  
    

 const TableData = [

    {
        Id: 1 ,
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
        Id: 1 ,
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
  return (
    
      
      <Grid container xs={12}>
          
          <Typography variant="h4" >
              Dapartments
              </Typography>
          
        {TableData.map((item) => {
          return (
            <Grid container xs={12}  height = "30px">
              <Grid xs={5.5}  style={{ border: "1px solid black" }} >
                <Typography marginLeft={1}>{item.Scots}</Typography>
              </Grid>
              <Grid xs={5.5}  style={{ border: "1px solid black" }} align="Right" >
                <Typography marginRight={1}>{item.num}</Typography>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
      
  
  );
};

export default Tables;
