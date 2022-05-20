import React from "react";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import { red } from "@mui/material/colors";

const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false }
);

const MapContainer = styled.div`
  height: 300px;
`;

const Card = styled(MuiCard)(spacing);

function China() {
  const options = {
    map: "ch_mill",
    regionStyle: {
      initial: {
        fill: red[500],
      },
    },
    backgroundColor: "transparent",
    containerStyle: {
      width: "100%",
      height: "100%",
    },
    zoomOnScroll: false,
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          China Map
        </Typography>
        <MapContainer>
          <VectorMap {...options} />
        </MapContainer>
      </CardContent>
    </Card>
  );
}

export default China;
