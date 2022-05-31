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

//import DashboardLayout from "../../layouts/Dashboard";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);


const CustomTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

// Data
let id = 0;
function createData(name, PAN, CIN, GST) {
    id += 1;
    return { id, name, PAN, CIN, GST };
}

const rows = [
    createData("Blue Scouts", 'PAN', '', ''),
    createData("Blue Link", '', '', 'GST'),
    createData("Red", 'PAN', '', 'GST'),
    createData("One", 'PAN', 'CIN', ''),
    createData("Sarthi", 'PAN', 'CIN', 'GST',),
    createData("Blue Scouts", '', 'CIN', 'GST',),
    createData("Blue Ink", 'PAN', 'CIN', 'GST',),
    createData("Red", 'PAN', '', 'GST',),
    createData("One Ink", '', '', 'GST',),
    createData("Blue Ink", 'PAN', '', '',),
    createData("Scouts Ink", '', 'CIN', '',),

];

const SimpleTable = ({ theme }) => {
    return (
        <Card mb={6}>
            <CardContent pb={1}>
                <Typography variant="h6" gutterBottom>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl>
                            Missing (12)
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
                                <TableCell align="right">{row.PAN} {row.CIN} {row.GST}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Link href="" pb={2} pt={2}>
                    <Grid align="center">View All</Grid>
                </Link>
            </Paper>
        </Card>


    );
};
export default withTheme(SimpleTable);
