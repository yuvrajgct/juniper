import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Chart from "react-chartjs-2";
import { orange, indigo, teal } from "@mui/material/colors";
import {
  Card as MuiCard,
  CardContent,
  TableCell as MuiTableCell,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
} from "@mui/material";
import { maxWidth, spacing } from "@mui/system";
import { getGender } from "../../../../Api/api";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 130px;
  position: relative;
`;
const Female = styled.h6`
  position: absolute;
  width: 83px;
  height: 16px;
  left: 10px;
  top: 24px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #494949;
`;

const DoughnutInner = styled.h5`
  width: 100%;
  //margin:-15px
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 0px;
  margin-top: -20px;
  text-align: center;
  z-index: 0;

  color: rgba(73, 73, 73, 0.5);
`;

const TableRow = styled(MuiTableRow)`
  height: 42px;
`;

const TableCell = styled(MuiTableCell)`
  padding-top: 0;
  padding-bottom: 0;
`;

const GreenText = styled.span`
  color: ${() => green[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const RedText = styled.span`
  color: ${() => red[400]};
  // font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const DoughnutChart = () => {
  const [total, setTotal] = React.useState();
  const [APidata, setApiData] = React.useState();
  const [labels, setLabels] = React.useState();
  const [numbers, setNumbers] = React.useState();

  const [value, setValue] = useState([]);

  // ------------------------Api  start -------------------------
  React.useEffect(() => {
    getAllGender();
  }, []);

  const getAllGender = async () => {
    const response = await getGender({ org_id: 1 });
    // console.log("data****", response);
    if (response.status === 200) {
      // if (response.data) {
      let obj = {
        Female: parseFloat(response.Female.split("%")[0]),
        Male: parseFloat(response.Male.split("%")[0]),
        Other: parseFloat(response.Other.split("%")[0]),
        associate: response.associate,
      };
      setValue(obj);
      // console.log("data****", response.data);
      // }
    } else {
    }
  };
  // console.log("data****", value);
  // -------------------------Api  end-----------------------------

  // const postURL = "https://mis-sandbox.bluone.in/services/associate/get-gender";
  // const bodyData = {
  //   org_id: "1",
  // };
  // const encodeFormData = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // };

  // // usage

  // const option = {
  //   method: "POST",
  //   body: encodeFormData(bodyData),
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // };

  const data = {
    labels: ["Female", "Male", "Other"],
    datasets: [
      {
        data: [
          value.associate * (value.Female / 100),
          value.associate * (value.Male / 100),
          value.associate * (value.Other / 100),
        ],
        backgroundColor: [teal[500], indigo[500], orange[500]],
        borderWidth: 0,
      },
    ],
  };

  // React.useEffect(() => {
  //   let labels = APidata ? Object.keys(APidata) : null;
  //   data.labels = labels;
  //   let numbers = APidata ? Object.values(APidata) : null;
  //   console.log(labels, numbers);
  // }, [APidata]);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "75%",
  };

  return (
    <Card
      // mb={6}
      sx={{
        padding: "10px",
        position: "absolute",
        width: "216px",
        height: "216px",
        left: "520px",
        top: "132px",

        background: "#FFFFFF",
        borderRadius: "10px",
      }}
    >
      {" "}
      <Typography
        sx={{
          position: "absolute",
          width: "71px",
          height: "16px",
          left: "138px",
          top: "12px",

          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "16px",
          textAlign: "center",

          color: "#494949",
        }}
      >
        {value.Other}% Others
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          width: "71px",
          height: "16px",
          left: "10px",
          top: "12px",

          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "16px",
          textAlign: "center",

          color: "#494949",
        }}
      >
        {value.Female}% Female
        {/* {item.other} */}
      </Typography>
      {/* {item.Female} */}
      <CardContent sx={{ margin: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        ></div>
        <ChartWrapper>
          <DoughnutInner>
            <Typography variant="h5">Associates</Typography>
            <Typography variant="h2" sx={{ color: "#494949" }}>
              {value.associate}
            </Typography>
            {/* <Typography variant="h5">{item.messges}</Typography> */}
            {/* <Typography variant="h2">{item.associate}</Typography> */}
          </DoughnutInner>
          <Chart
            type="doughnut"
            style={{ marginBottom: "40" }}
            data={data}
            options={options}
          />
        </ChartWrapper>
        <Typography
          sx={{
            position: "absolute",
            width: "71px",
            height: "16px",
            left: "10px",
            top: "179px",

            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",
            textAlign: "center",

            color: "#494949",
          }}
        >
          {" "}
          {value.Male}% Male
          {/* {item.Male} */}
        </Typography>
      </CardContent>
      {/* ); })} */}
    </Card>
  );
};

export default DoughnutChart;
