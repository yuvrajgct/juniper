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
    Chip as MuiChip,
    MenuItem,
    FormHelperText,
    FormControl as MuiFormControl,
    Select,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { spacing } from "@mui/system";

//import DashboardLayout from "../../layouts/Dashboard";
const Chip = styled(MuiChip)`
  height: 15px;
  padding: 2px 0;
  font-size: 90%;
  fontWeight: 'bold';
`;
const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
const Paper = styled(MuiPaper)(spacing);
const FormControlSpacing = styled(MuiFormControl)(spacing);

const FormControl = styled(FormControlSpacing)`
  min-width: 18px;
`;

const CustomTableRow = styled(TableRow)`
    &: nth-of - type(odd) {
    background - color: rgba(0, 0, 0, 0.025);
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
];

const handleChange = (event) => {
    setAge(event.target.value);
};

var cardStyle = {
    height: '415px',
}
var selectstyle = {
    height: '2px',
}
const SimpleTable = ({ theme }) => {
    return (
        <Card mb={6} style={cardStyle}>
            <CardContent pb={1}>
                <Typography variant="h6" gutterBottom>
                    <Grid container spacing={6}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl>
                            Missing (12)
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl align="right" style={selectstyle}>
                            <FormControl >
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={10}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
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
                                <TableCell align="left">
                                    {row.PAN != '' &&
                                        <Chip label={row.PAN} />
                                    }

                                    {row.CIN != '' &&
                                        <Chip label={row.CIN} />
                                    }

                                    {row.GST != '' &&
                                        <Chip label={row.GST} />
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Link href="" pb={2} pt={2}>
                    <Grid align="center">View All</Grid>
                </Link>
            </Paper>
        </Card >


    );
};
export default withTheme(SimpleTable);
