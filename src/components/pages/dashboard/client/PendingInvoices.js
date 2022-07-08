import React from "react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { Helmet } from "react-helmet-async";
import { withTheme } from "@emotion/react";

import {
    Grid,
    Link,
    Breadcrumbs as MuiBreadcrumbs,
    Card as MuiCard,
    CardContent as MuiCardContent,
    Divider as MuiDivider,
    Paper as MuiPaper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { spacing } from "@mui/system";
import { getPendinginvoices } from "../../../../API/Clientapi";
//import DashboardLayout from "../../layouts/Dashboard";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CustomTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background: ${(props) => props.theme.palette.common.black};
    color: ${(props) => props.theme.palette.common.red};
  }
  &.${tableCellClasses.body} {
    font-size: 14px;
  }
`;

const CustomTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

// Data
let id = 0;
function createData(name, invoices) {
    id += 1;
    return { id, name, invoices };
}


React.useEffect(() => {
    getAllPendinginvoices();
}, []);

const getAllPendinginvoices = async () => {
    const response = await getPendinginvoices({ org_id: 1 });
    if (response.status === 200) {
        if (response.data && response.data != undefined) {
            console.log("----", response.data);
        }
    } else {
    }
};

const rows = [
    createData("Blue Scouts", 12),
    createData("Blue Link", 23),
    createData("Red", 34),
    createData("One", 45),
    createData("BLueone", 33),
];

var cardStyle = {
    height: '200px',
}

const PendingInvoices = ({ theme }) => {
    return (
        <Card mb={1} style={cardStyle}>
            <CardContent pb={1}>
                <Typography variant="h6" gutterBottom>
                    <Grid container spacing={6}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl>
                            Pending Invoices
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl align="right">
                            Total :122
                        </Grid>
                    </Grid>
                </Typography>
                {/* <Typography variant="body2" gutterBottom>
                    A simple example with no frills.
                </Typography> */}
            </CardContent>
            <Paper>
                <Table>
                    {/* <TableHead>
                        <TableRow>
                            <TableCell>Client Name</TableCell>
                            <TableCell align="right">No. Of Invoice</TableCell>
                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.invoices}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Card>


    );
};
export default withTheme(PendingInvoices);
